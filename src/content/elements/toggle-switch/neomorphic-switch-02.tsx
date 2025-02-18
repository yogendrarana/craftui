"use client";

import React from "react";
import { useState } from "react";

export default function NeomorphicSwitch() {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => setIsOn(!isOn);

    return (
        <div>
            <button
                onClick={handleToggle}
                className="w-16 h-8 rounded-full bg-gray-100 dark:bg-gray-700 shadow-[inset_0px_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.1)] p-1 transition-colors duration-200"
            >
                <div
                    className={`
                        w-6 h-6 rounded-full transition-all duration-200
                        ${
                            isOn
                                ? "bg-blue-500 dark:bg-blue-400 shadow-lg translate-x-8"
                                : "bg-white dark:bg-gray-300 shadow-md translate-x-0"
                        }
                    `}
                />
            </button>
        </div>
    );
}

