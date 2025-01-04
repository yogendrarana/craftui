/**
 * @todo Add support for keyboard navigation
 * @todo Add support for custom option rendering
 * @todo Add support for loading custom options and extracting label and value
 * @todo Add support for maximum selected options i.e limit the number of selected options for multiple select
 */

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Check, Loader2, Search } from "lucide-react";

type ValueType = string | string[] | null;

interface SelectContextType {
    // core state
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    value: ValueType;
    setValue: React.Dispatch<React.SetStateAction<ValueType>>;
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;

    // features
    multiple?: boolean;
    loading?: boolean;
    disabled?: boolean;
    searchable?: boolean;
    creatable?: boolean;

    // option management
    selectedOptions: string[];
    filteredOptions: string[];
    onCreateOption?: (value: string) => void;
    loadedOptions: any[];

    // Navigation
    highlightedIndex: number;
    setHighlightedIndex: (index: number) => void;

    // Handlers
    // handleSelect: (option: string) => void;
    // handleKeyDown: (event: React.KeyboardEvent) => void;
    handleCreateOption?: (value: string) => void;

    // Custom behaviors
    getOptionLabel?: (option: string) => string;
    filterOption?: (option: string, searchValue: string) => boolean;

    // misc
    clearable?: boolean;
    maxSelected?: number;
}

/* -------------------------------------------------------------------------------------------------
 * SelectContext and utility hook for it
 * -------------------------------------------------------------------------------------------------
 */

const SelectContext = React.createContext<SelectContextType | null>(null);

const useSelectContext = () => {
    const context = React.useContext(SelectContext);
    if (!context) {
        throw new Error("Select components must be used within a Select provider");
    }
    return context;
};

/* -------------------------------------------------------------------------------------------------
 * select context provider component as Select
 * -------------------------------------------------------------------------------------------------
 */

interface SelectProps {
    // required
    children: React.ReactNode;

    // controlled value
    defaultValue?: ValueType;
    onValueChange?: (value: ValueType) => void;

    // customizations
    className?: string;
    
    // Options
    getOptionLabel?: (option: string) => string;
    loadOptions?: (inputValue: string) => Promise<Array<any>>;
    filterOption?: (option: string, searchValue: string) => boolean;
    onCreateOption?: (value: string) => void;

    // features
    multiple?: boolean;
    searchable?: boolean;
    disabled?: boolean;
    loading?: boolean;
    creatable?: boolean;
    clearable?: boolean;

    // limit
    maxSelected?: number;

    // controlled open
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

const Select = ({
    children,
    className,
    loadOptions,
    filterOption,
    getOptionLabel,
    onCreateOption,
    open,
    onOpenChange,
    maxSelected,
    multiple = false,
    disabled = false,
    creatable = false,
    clearable = true,
    searchable = false,
    defaultValue = null,
    loading: externalLoading = false
}: SelectProps) => {
    const id = React.useId();
    const selectRef = React.useRef<HTMLDivElement>(null);

    const [loading, setLoading] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    const [internalOpen, setInternalOpen] = React.useState(false);
    const [highlightedIndex, setHighlightedIndex] = React.useState(-1);
    const [loadedOptions, setLoadedOptions] = React.useState<any[]>([]);
    const [value, setValue] = React.useState<ValueType>(
        multiple ? (Array.isArray(defaultValue) ? defaultValue : []) : defaultValue
    );

    // open state management
    const isControlledOpen = open !== undefined;
    const isOpen = isControlledOpen ? open : internalOpen;
    const setIsOpen = React.useCallback(
        (newOpen: boolean) => {
            if (!isControlledOpen) {
                setInternalOpen(newOpen);
            }
            onOpenChange?.(newOpen);
        },
        [isControlledOpen, onOpenChange]
    );

    // Handle filtering of options
    React.useEffect(() => {
        if (isOpen && searchValue && !loadOptions) {
            setLoadedOptions([]);
        }
    }, [isOpen, loadOptions, searchValue]);

    // Handle loading of async options
    React.useEffect(() => {
        if (loadOptions && isOpen && searchValue) {
            const debounceTimer = setTimeout(async () => {
                setLoading(true);
                try {
                    const options = await loadOptions(searchValue);
                    setLoadedOptions(options);
                } catch (error) {
                    console.error("Error loading options:", error);
                } finally {
                    setLoading(false);
                }
            }, 300);

            return () => clearTimeout(debounceTimer);
        }
    }, [loadOptions, searchValue, isOpen]);

    // Close select when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setIsOpen]);

    const contextValue = {
        isOpen,
        setIsOpen,
        value,
        setValue,
        searchValue,
        setSearchValue,
        multiple,
        loading: loading || externalLoading,
        disabled,
        loadedOptions,
        getOptionLabel,
        filterOption,
        searchable,
        clearable,
        creatable,
        maxSelected,
        selectedOptions: [],
        filteredOptions: [],
        highlightedIndex,
        setHighlightedIndex,
        onCreateOption
    };

    return (
        <SelectContext.Provider value={contextValue}>
            <div id={id} ref={selectRef} className={cn("w-60 relative inline-block", className)}>
                {children}
            </div>
        </SelectContext.Provider>
    );
};

/* -------------------------------------------------------------------------------------------------
 * select contents component
 * -------------------------------------------------------------------------------------------------
 */

interface SelectContentProps {
    scrollbarWidth?: "thin" | "none" | "auto";
    children: React.ReactNode;
    className?: string;
}

const SelectContent = ({ children, className, scrollbarWidth = "none" }: SelectContentProps) => {
    const context = useSelectContext();
    const [filteredChildren, setFilteredChildren] = React.useState<React.ReactNode[]>([]);

    React.useEffect(() => {
        if (!children) {
            setFilteredChildren([]);
            return;
        }

        const result = React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                if (child.type === SelectGroup) {
                    const filteredGroupChildren = React.Children.toArray(child.props.children)
                        .filter((groupChild) => {
                            if (React.isValidElement(groupChild) && groupChild.props.children) {
                                return String(groupChild.props.children)
                                    .toLowerCase()
                                    .includes(context.searchValue?.toLowerCase() || "");
                            }
                            return false;
                        })
                        .filter(Boolean);

                    if (filteredGroupChildren.length > 0) {
                        return React.cloneElement(child, {}, filteredGroupChildren);
                    }
                    return null;
                }

                if (child.type === SelectOption) {
                    if (
                        String(child.props.children)
                            .toLowerCase()
                            .includes(context.searchValue?.toLowerCase() || "")
                    ) {
                        return child;
                    }
                    return null;
                }
            }

            return child;
        });

        setFilteredChildren(result || []);
    }, [children, context.searchValue]);

    // content
    const content = React.useMemo(() => {
        // Show loading state when initial load
        if (context.loading && !context.searchValue) {
            return (
                <div className="px-4 py-2 text-sm text-gray-500 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Loading...
                </div>
            );
        }

        // Show loading state during async search
        if (context.loading && context.searchValue) {
            return (
                <div className="px-4 py-2 text-sm text-gray-500 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Searching for &quot;{context.searchValue}&quot;...
                </div>
            );
        }

        if (filteredChildren.length === 0 && !context.loading) {
            if (context.creatable && context.searchValue) {
                return (
                    <div
                        className="flex items-center px-2 py-1.5 text-sm text-blue-600 cursor-pointer hover:bg-blue-50"
                        onClick={() => context.onCreateOption?.(context.searchValue)}
                    >
                        Cannot find &quot;{context.searchValue}&quot;. Create instead?
                    </div>
                );
            }

            return (
                <div className="py-6 text-center text-sm text-gray-500">
                    {context.searchValue ? "No results found" : "No options available"}
                </div>
            );
        }

        return filteredChildren;
    }, [context.loading, context.searchValue, filteredChildren, context.creatable]);

    if (!context.isOpen) return null;

    return (
        <AnimatePresence>
            {context.isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                        "absolute z-50 w-full mt-1 bg-white rounded shadow-lg overflow-hidden",
                        "border border-gray-200",
                        "max-h-80 overflow-auto",
                        className
                    )}
                    style={{
                        scrollbarWidth: scrollbarWidth
                    }}
                    role="listbox"
                >
                    {context.searchable && (
                        <div className="relative flex items-center px-2 border-b border-gray-4200">
                            <Search size={16} className="text-gray-400" />
                            <input
                                autoFocus
                                type="text"
                                className="sticky top-0 w-full px-3 py-2 text-sm focus:outline-none"
                                placeholder="Search..."
                                value={context.searchValue}
                                onChange={(e) => context.setSearchValue(e.target.value)}
                                onKeyDown={(e) => e.stopPropagation()}
                                disabled={context.disabled}
                            />
                        </div>
                    )}
                    <div>{content}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

/* -------------------------------------------------------------------------------------------------
 * select group component
 * -------------------------------------------------------------------------------------------------
 */
interface SelectGroupProps {
    label: string;
    children: React.ReactNode;
    className?: string;
}

const SelectGroup = ({ children, className, label }: SelectGroupProps) => {
    return (
        <div className={cn("py-1", className)} role="group" aria-label={label}>
            <div className="px-4 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {label}
            </div>
            {children}
        </div>
    );
};

/* -------------------------------------------------------------------------------------------------
 * select value component
 * -------------------------------------------------------------------------------------------------
 */
interface SelectValueProps {
    placeholder?: string;
}

const SelectValue = ({ placeholder = "Select an option ..." }: SelectValueProps) => {
    const context = useSelectContext();

    if (context.multiple && Array.isArray(context.value)) {
        return (
            <div className="flex flex-wrap gap-1">
                {context.value.length === 0 ? (
                    <span className="h-full w-full flex items-center text-gray-500">
                        {placeholder}
                    </span>
                ) : (
                    <div className="flex flex-wrap gap-1">
                        {context.value.map((val) => (
                            <span
                                key={val}
                                className="inline-flex items-center px-2 py-0.5 bg-blue-100 rounded-full text-xs"
                            >
                                {val}
                                <X
                                    className="w-3 h-3 ml-1 cursor-pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (!context.disabled) {
                                            context.setValue(
                                                (context.value as string[]).filter((v) => v !== val)
                                            );
                                        }
                                    }}
                                />
                            </span>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <span
            onClick={() => {
                if (!context.isOpen) {
                    context.setIsOpen(true);
                }
            }}
            className={cn("h-full w-full flex items-center", { "text-gray-500": !context.value })}
        >
            {context.value || placeholder}
        </span>
    );
};

/* -------------------------------------------------------------------------------------------------
 * select trigger provider component
 * -------------------------------------------------------------------------------------------------
 */
interface SelectTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
}

const SelectTrigger = ({ children, className }: SelectTriggerProps) => {
    const context = useSelectContext();

    return (
        <div
            onClick={() => {
                if (!context.disabled) {
                    if (!context.isOpen && context.searchValue) {
                        context.setSearchValue("");
                    }
                    context.setIsOpen(!context.isOpen);
                }
            }}
            className={cn(
                "w-full px-3 py-2 flex items-center justify-between text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus-within:ring-2 focus-within:ring-gray-200",
                context.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
                className
            )}
        >
            <div className="flex flex-1 items-center">{children}</div>
            <div className="h-full flex gap-2 items-center justify-center">
                {/* loading icon */}
                {context.loading && <Loader2 className="w-4 h-4 animate-spin text-gray-400" />}

                {/* clear icon */}
                {context.clearable &&
                    (context.multiple
                        ? Array.isArray(context.value) && context.value.length > 0
                        : context.value) && (
                        <X
                            className={cn(
                                "p-1 transition-transform duration-200 rounded-full hover:bg-gray-200",
                                {
                                    "text-gray-400": context.disabled
                                }
                            )}
                            size={20}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (!context.disabled) {
                                    context.setValue(context.multiple ? [] : null);
                                    context.setIsOpen(false);
                                }
                            }}
                        />
                    )}

                <ChevronDown
                    className={cn("transition-transform duration-200", {
                        "text-gray-400": context.disabled,
                        "transform rotate-180": context.isOpen
                    })}
                    size={18}
                />
            </div>
        </div>
    );
};

/* -------------------------------------------------------------------------------------------------
 * select option component
 * -------------------------------------------------------------------------------------------------
 */
interface SelectOptionProps {
    value: string;
    children: string;
    highlighted?: boolean;
    disabled?: boolean;
    className?: string;
}

const SelectOption = ({
    value,
    children,
    highlighted,
    disabled = false,
    className = ""
}: SelectOptionProps) => {
    const context = useSelectContext();

    const isSelected = context.multiple
        ? Array.isArray(context.value) && context.value.includes(value)
        : context.value === value;

    const handleSelect = () => {
        if (disabled || context.disabled) return;

        if (context.multiple && Array.isArray(context.value)) {
            const newValue = isSelected
                ? context.value.filter((v) => v !== value)
                : [...context.value, value];
            context.setValue(newValue);
        } else {
            context.setValue(value);
            context.setIsOpen(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleSelect();
        }
    };

    const label = context.getOptionLabel
        ? context.getOptionLabel(children)
        : children?.toString() || value;

    const isVisible = context.filterOption
        ? context.filterOption(children, context.searchValue)
        : !context.searchValue || label.toLowerCase().includes(context.searchValue.toLowerCase());

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className={cn(
                "px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 flex items-center justify-between",
                {
                    "opacity-50 cursor-not-allowed": disabled,
                    "bg-gray-100": highlighted,
                    "bg-blue-50 text-blue-600": isSelected
                },
                className
            )}
            role="option"
            onClick={handleSelect}
            onKeyDown={handleKeyDown}
            aria-selected={isSelected}
            aria-disabled={disabled}
            tabIndex={0}
        >
            <span>{label}</span>
            {isSelected && <Check className="w-4 h-4 text-blue-500" />}
        </div>
    );
};

export { Select, SelectTrigger, SelectContent, SelectOption, SelectValue, SelectGroup };
