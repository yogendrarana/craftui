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
import { ChevronDown, X, Check, Loader, Search } from "lucide-react";

type ValueType = string | string[] | null;

interface SelectContextType {
    // core state
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    value: ValueType;
    setValue: React.Dispatch<React.SetStateAction<ValueType>>;
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;

    // value
    handleValueClear: () => void;
    handleValueChange: (newValue: string) => void;

    // features
    multiple?: boolean;
    loading?: boolean;
    disabled?: boolean;
    searchable?: boolean;
    creatable?: boolean;
    clearable?: boolean;

    // option management
    onCreateOption?: (value: string) => void;

    // Navigation
    highlightedIndex: number;
    setHighlightedIndex: (index: number) => void;

    // Handlers
    // handleSelect: (option: string) => void;
    // handleKeyDown: (event: React.KeyboardEvent) => void;

    // misc
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
    onValueChange?: (value: any) => void;

    // customizations
    className?: string;

    // Options
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
    onCreateOption,
    open,
    onOpenChange,
    onValueChange,
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

    const [loading, setLoading] = React.useState(externalLoading);
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

    /**
     *
     * @param newValue
     * @returns
     *
     * A function to handle the change in value
     */
    const handleValueChange = (newValue: string) => {
        if (disabled) return;

        const isValueSelected = multiple
            ? Array.isArray(value) && value.includes(newValue)
            : value === newValue;

        if (multiple && Array.isArray(value)) {
            const updatedValue = isValueSelected
                ? value.filter((v) => v !== newValue)
                : [...value, newValue];
            setValue(updatedValue);
            onValueChange?.(newValue);
        } else {
            setValue(newValue);
            onValueChange?.(newValue);
            setIsOpen(false);
        }
    };

    /**
     * Function to clear the value
     * @returns
     */
    const handleValueClear = () => {
        if (disabled) return;
        setValue(multiple ? [] : null);
        setIsOpen(false);
        onValueChange?.(null);
    };

    // Handle filtering of options
    React.useEffect(() => {
        if (isOpen && searchValue) {
            setLoadedOptions([]);
        }
    }, [isOpen, searchValue]);

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
        searchable,
        clearable,
        creatable,
        maxSelected,
        highlightedIndex,
        setHighlightedIndex,
        onCreateOption,
        handleValueChange,
        handleValueClear
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

    const content = React.useMemo(() => {
        if (context.loading && !context.searchValue) {
            return (
                <div className="px-4 py-2 text-sm flex items-center gap-2">
                    <Loader className="w-4 h-4 animate-spin" />
                    Loading...
                </div>
            );
        }

        if (context.loading && context.searchValue) {
            return (
                <div className="px-4 py-2 text-sm flex items-center gap-2">
                    <Loader className="w-4 h-4 animate-spin" />
                    Searching for &quot;{context.searchValue}&quot;...
                </div>
            );
        }

        if (filteredChildren.length === 0 && !context.loading) {
            if (context.creatable && context.searchValue) {
                return (
                    <div
                        className="flex items-center px-2 py-1.5 text-sm text-primary cursor-pointer hover:bg-primary/10"
                        onClick={() => context.onCreateOption?.(context.searchValue)}
                    >
                        Cannot find &quot;{context.searchValue}&quot;. Create instead?
                    </div>
                );
            }

            return (
                <div className="py-6 text-center text-sm text-muted-foreground">
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
                        "max-h-[350px] absolute z-50 w-full mt-1 bg-white rounded shadow-lg overflow-hidden border border-gray-200",
                        "dark:bg-zinc-800 dark:border-zinc-700",
                        className
                    )}
                    style={{
                        scrollbarWidth: scrollbarWidth
                    }}
                    role="listbox"
                >
                    {context.searchable && (
                        <div className="relative flex items-center px-2 border-b border-gray-200 dark:border-zinc-700">
                            <Search size={16} className="text-gray-400" />
                            <input
                                autoFocus
                                type="text"
                                className="sticky top-0 w-full px-3 py-2 text-sm bg-transparent text-foreground placeholder-gray-400 focus:outline-none"
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
            <div
                className={cn(
                    "px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-400",
                    " dark:text-gray-500"
                )}
            >
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
                                className={cn(
                                    "px-2 py-0.5 inline-flex items-center rounded-full text-xs bg-gray-200",
                                    "dark:bg-zinc-700"
                                )}
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
                "w-full px-3 py-2 flex items-center justify-between text-sm border rounded-md focus-within:ring-2",
                "border border-gray-200 text-foreground hover:bg-gray-50 focus-within:ring-gray-100",
                "dark:border-zinc-700 dark:bg-zinc-800",
                context.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
                className
            )}
        >
            <div className="flex flex-1 items-center">{children}</div>
            <div className="h-full flex gap-2 items-center justify-center">
                {/* loading icon */}
                {context.loading && (
                    <Loader className="w-4 h-4 animate-spin text-gray-500 dark:text-gray-100" />
                )}

                {/* clear icon */}
                {context.clearable &&
                    (context.multiple
                        ? Array.isArray(context.value) && context.value.length > 0
                        : context.value) && (
                        <X
                            className={cn("p-1 transition-transform duration-200 rounded-full", {
                                "text-gray-400 dark:text-gray-500": context.disabled
                            })}
                            size={20}
                            onClick={(e) => {
                                e.stopPropagation();
                                context.handleValueClear();
                            }}
                        />
                    )}

                <ChevronDown
                    className={cn("transition-transform duration-200", {
                        "text-gray-400 dark:text-gray-500": context.disabled,
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
    onSelect?: () => void;
}

const SelectOption = ({
    value,
    children,
    disabled = false,
    className = "",
    onSelect
}: SelectOptionProps) => {
    const context = useSelectContext();

    const isSelected = context.multiple
        ? Array.isArray(context.value) && context.value.includes(value)
        : context.value === value;

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            context.handleValueChange(value);
            onSelect?.();
        }
    };

    const label = children?.toString() || value;

    const isVisible =
        context.searchValue || label.toLowerCase().includes(context.searchValue.toLowerCase());

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className={cn(
                "px-4 py-2 text-sm cursor-pointer flex items-center justify-between hover:bg-gray-100",
                "dark:hover:bg-zinc-700/50",
                {
                    "opacity-50 cursor-not-allowed": disabled,
                    "bg-gray-100 dark:bg-zinc-700/50": isSelected
                },
                className
            )}
            role="option"
            onClick={() => {
                if (!disabled) {
                    context.handleValueChange(value);
                    onSelect?.();
                }
            }}
            onKeyDown={handleKeyDown}
            aria-selected={isSelected}
            aria-disabled={disabled}
            tabIndex={0}
        >
            <span>{label}</span>
            {isSelected && <Check className="w-4 h-4 text-primary" />}
        </div>
    );
};

export { Select, SelectTrigger, SelectContent, SelectOption, SelectValue, SelectGroup };
