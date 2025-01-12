"use client";

import React, { useState } from "react";

export default function GradientSwitch() {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => setIsOn(!isOn);

    return (
        <button
            onClick={handleToggle}
            className={`w-16 h-8 rounded-full p-1 duration-300 ease-in-out ${
                isOn
                    ? "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                    : "bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"
            }`}
        >
            <div
                className={`w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out bg-white dark:bg-gray-200/50 ${
                    isOn ? "translate-x-8" : ""
                }`}
            />
        </button>
    );
}
