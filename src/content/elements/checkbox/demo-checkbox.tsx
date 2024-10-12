"use client";

import React from "react";
import { Check } from "lucide-react";

export default function DemoCheckbox() {
    const [isChecked, setIsChecked] = React.useState(false);

    const toggleCheckbox = () => setIsChecked(!isChecked);

    return (
        <div>
            <label className="flex items-center space-x-3 cursor-pointer">
                <div className="relative">
                    <input
                        type="checkbox"
                        className="sr-only"
                        checked={isChecked}
                        onChange={toggleCheckbox}
                    />
                    <div
                        className={`w-6 h-6 border-2 rounded-md ${
                            isChecked ? "border-primary bg-primary" : "border-gray-300 bg-white"
                        } transition-colors duration-200 ease-in-out`}
                    >
                        <Check
                            className={`w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                                isChecked ? "opacity-100" : "opacity-0"
                            } transition-opacity duration-200 ease-in-out`}
                        />
                    </div>
                </div>
            </label>
        </div>
    );
}
