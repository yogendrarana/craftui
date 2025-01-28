"use client";

import React from "react";
import {
    Stepper,
    Step,
    StepTitle,
    StepDescription,
    StepIndicator,
    StepperContent,
    PrevStep,
    NextStep
} from "../registry/components/stepper";

const StepperPreview = () => {
    return (
        <div className="border rounded-md">
            <Stepper totalSteps={4}>
                <StepperContent>
                    <Step step={1}>
                        <StepTitle>Step 1</StepTitle>
                        <StepDescription>Step 1 Description</StepDescription>
                    </Step>

                    <Step step={2}>
                        <StepTitle>Step 2</StepTitle>
                        <StepDescription>Step 2 Description</StepDescription>
                    </Step>

                    <Step step={3}>
                        <StepTitle>Step 3</StepTitle>
                        <StepDescription>Step 3 Description</StepDescription>
                    </Step>

                    <Step step={4}>
                        <StepTitle>Step 4</StepTitle>
                        <StepDescription>Step 4 Description</StepDescription>
                    </Step>
                </StepperContent>

                <div className="flex justify-between items-center gap-8">
                    <PrevStep />
                    <StepIndicator variant="progress" />
                    <NextStep onFinish={() => alert("This is the end!")} />
                </div>
            </Stepper>
        </div>
    );
};

export default StepperPreview;
