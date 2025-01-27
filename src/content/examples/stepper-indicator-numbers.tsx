"use client";

import React, { useState } from "react";
import {
    Stepper,
    StepperContent,
    Step,
    StepTitle,
    StepDescription,
    StepIndicator,
    StepperNavigation
} from "../registry/components/stepper";

const StepperPreview = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            title: "Step 1",
            description: "This is the first step of the process."
        },
        {
            title: "Step 2",
            description: "This is the second step of the process."
        },
        {
            title: "Step 3",
            description: "This is the third and final step of the process."
        }
    ];

    return (
        <div className="border rounded-md">
            <Stepper activeStep={activeStep} onStepChange={setActiveStep}>
                <StepIndicator className="mb-8" variant="numbers" />
                <StepperContent>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </Step>
                    ))}
                </StepperContent>
                <StepperNavigation onFinish={() => alert("This is the end!")} />
            </Stepper>
        </div>
    );
};

export default StepperPreview;
