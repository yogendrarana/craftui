"use client";

import React, { useState } from "react";
import {
    Stepper,
    Step,
    StepTitle,
    StepDescription,
    StepIndicator,
    StepperNavigation,
    StepperContent
} from "../components/stepper";

const StepperPreview = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="border rounded-md">
            <Stepper activeStep={activeStep} totalSteps={4} onStepChange={setActiveStep}>
                <StepIndicator variant="text" />

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

                <StepperNavigation onFinish={() => alert("This is the end!")} />
            </Stepper>
        </div>
    );
};

export default StepperPreview;
