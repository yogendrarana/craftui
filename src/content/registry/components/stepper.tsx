/**
 * @todo Add support vertical stepper
 * @todo Add support linear and non-linear stepper
 */

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StepperContextType {
    currentStep: number;
    totalSteps: number;
    isLastStep: boolean;
    goToNextStep: () => void;
    goToPreviousStep: () => void;
    goToStep: (step: number) => void;
}

const StepperContext = React.createContext<StepperContextType>({
    currentStep: 0,
    totalSteps: 0,
    isLastStep: false,
    goToNextStep: () => {},
    goToPreviousStep: () => {},
    goToStep: () => {}
});

/* -------------------------------------------------------------------------------------------------
 * Stepper (Root component)
 * -------------------------------------------------------------------------------------------------
 */

interface StepperProps {
    children: React.ReactNode;
    activeStep?: number;
    totalSteps: number;
    className?: string;
    onStepChange?: (step: number) => void;
}

const Stepper = ({
    children,
    onStepChange,
    className = "",
    totalSteps,
    activeStep = 0
}: StepperProps) => {
    const id = React.useId();
    const [currentStep, setCurrentStep] = React.useState(activeStep);
    const isLastStep = currentStep === totalSteps - 1;

    const contextValue = React.useMemo(
        () => ({
            currentStep,
            totalSteps,
            isLastStep,
            goToNextStep: () =>
                onStepChange?.(Math.min(currentStep + 1, totalSteps - 1)) ||
                setCurrentStep?.(Math.min(currentStep + 1, totalSteps - 1)),
            goToPreviousStep: () =>
                onStepChange?.(Math.max(currentStep - 1, 0)) ||
                setCurrentStep?.(Math.max(currentStep - 1, 0)),
            goToStep: (step: number) =>
                onStepChange?.(Math.min(Math.max(step, 0), totalSteps - 1)) ||
                setCurrentStep?.(Math.min(Math.max(step, 0), totalSteps - 1))
        }),
        [currentStep, totalSteps, isLastStep, setCurrentStep, onStepChange]
    );

    return (
        <StepperContext.Provider value={contextValue}>
            <div
                id={id}
                className={cn(
                    "w-full mx-auto p-4",
                    "sm:w-full md:w-[24rem] lg:w-[30rem] xl:w-[36rem]",
                    className
                )}
                role="group"
                aria-label="Stepper"
            >
                {children}
            </div>
        </StepperContext.Provider>
    );
};

const useStepper = () => {
    const context = React.useContext(StepperContext);
    if (!context) {
        throw new Error("useStepper must be used within a StepperProvider");
    }
    return context;
};

/* -------------------------------------------------------------------------------------------------
 * StepperContent
 * -------------------------------------------------------------------------------------------------
 */

interface StepperContentProps {
    children: React.ReactNode;
    className?: string;
}

const StepperContent = ({ children, className }: StepperContentProps) => {
    return <div className={cn("my-6", className)}>{children}</div>;
};

/* -------------------------------------------------------------------------------------------------
 * Step Component
 * -------------------------------------------------------------------------------------------------
 */

interface StepProps {
    children: React.ReactNode;
    className?: string;
    step: number;
}

const Step = ({ children, step, className = "" }: StepProps) => {
    const { currentStep } = useStepper();
    const isActive = currentStep === step - 1;

    if (!isActive) return null;

    return (
        <div className={cn("space-y-4", className)}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

/* -------------------------------------------------------------------------------------------------
 * Step Title
 * -------------------------------------------------------------------------------------------------
 */

interface StepTitleProps {
    children: React.ReactNode;
    className?: string;
}

const StepTitle = ({ children, className = "" }: StepTitleProps) => {
    return (
        <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)}>
            {children}
        </h3>
    );
};

/* -------------------------------------------------------------------------------------------------
 * Step Description
 * -------------------------------------------------------------------------------------------------
 */

interface StepDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

const StepDescription = ({ children, className = "" }: StepDescriptionProps) => {
    return <p className={cn("text-sm text-gray-500 dark:text-gray-400", className)}>{children}</p>;
};

/* -------------------------------------------------------------------------------------------------
 * PrevStep
 * -------------------------------------------------------------------------------------------------
 */

interface PrevStepProps {
    className?: string;
}

const PrevStep = ({ className = "" }: PrevStepProps) => {
    const { currentStep, goToPreviousStep } = useStepper();

    return (
        <Button
            variant="outline"
            onClick={goToPreviousStep}
            disabled={currentStep === 0}
            className={cn(
                {
                    "text-gray-400 cursor-not-allowed": currentStep === 0
                },
                className
            )}
        >
            <ChevronLeft className="w-4 h-4" />
            Prev
        </Button>
    );
};

/* -------------------------------------------------------------------------------------------------
 * NextStep
 * -------------------------------------------------------------------------------------------------
 */

interface NextStepProps {
    onFinish: () => void;
    className?: string;
}

const NextStep = ({ onFinish, className = "" }: NextStepProps) => {
    const { goToNextStep, isLastStep } = useStepper();

    const handleClick = () => {
        if (isLastStep && onFinish) {
            onFinish();
        } else {
            goToNextStep();
        }
    };

    return (
        <Button variant="outline" onClick={handleClick} className={cn(className)}>
            {isLastStep ? "Finish" : "Next"}
            <ChevronRight className="w-4 h-4" />
        </Button>
    );
};

/* -------------------------------------------------------------------------------------------------
 * StepIndicator
 * -------------------------------------------------------------------------------------------------
 */

interface StepIndicatorProps {
    variant?: "dots" | "fraction" | "progress" | "numbers" | "text";
    className?: string;
}

const StepIndicator = ({ variant = "dots", className = "" }: StepIndicatorProps) => {
    const { currentStep, totalSteps, goToStep } = useStepper();

    switch (variant) {
        case "fraction":
            return (
                <div className={cn("text-sm font-medium", className)}>
                    Step {currentStep + 1} of {totalSteps}
                </div>
            );

        case "progress":
            const progress = ((currentStep + 1) / totalSteps) * 100;
            return (
                <div className={cn("w-full bg-gray-200 rounded-full h-2", className)}>
                    <motion.div
                        className="bg-black dark:bg-zinc-700 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                    />
                </div>
            );

        case "numbers":
            return (
                <div className={cn("flex space-x-2", className)}>
                    {[...Array(totalSteps)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToStep(index)}
                            className={cn(
                                "w-6 h-6 rounded flex items-center justify-center text-xs transition-all duration-300",
                                {
                                    "bg-black dark:bg-zinc-700 text-white": index === currentStep,
                                    "bg-gray-200 dark:bg-gray-300 text-black":
                                        index !== currentStep,
                                    "hover:bg-gray-300": index !== currentStep
                                }
                            )}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            );

        case "text":
            return (
                <div className={cn("flex items-center space-x-4", className)}>
                    {[...Array(totalSteps)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToStep(index)}
                            className={cn("text-sm font-medium transition-all duration-300", {
                                "text-black dark:text-gray-200": index === currentStep,
                                "text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-gray-400":
                                    index !== currentStep
                            })}
                        >
                            Step {index + 1}
                        </button>
                    ))}
                </div>
            );

        // default dots
        default:
            return (
                <div className={cn("flex space-x-2", className)}>
                    {[...Array(totalSteps)].map((_, index) => (
                        <motion.div
                            key={index}
                            className={cn("w-2 h-2 rounded-full", {
                                "bg-black dark:bg-zinc-700": index === currentStep,
                                "bg-gray-300": index !== currentStep
                            })}
                            initial={{ scale: 1 }}
                            animate={{ scale: index === currentStep ? 1.5 : 1 }}
                        />
                    ))}
                </div>
            );
    }
};

/* -------------------------------------------------------------------------------------------------
 * StepNavigation
 * -------------------------------------------------------------------------------------------------
 */

interface StepperNavigationProps {
    onFinish: () => void;
    className?: string;
}

const StepperNavigation = ({ onFinish, className = "" }: StepperNavigationProps) => {
    return (
        <div className={cn("flex justify-between items-center gap-2", className)}>
            <PrevStep />
            <NextStep onFinish={onFinish} />
        </div>
    );
};

export {
    Stepper,
    StepperContent,
    Step,
    StepTitle,
    StepDescription,
    PrevStep,
    NextStep,
    StepIndicator,
    StepperNavigation
};
