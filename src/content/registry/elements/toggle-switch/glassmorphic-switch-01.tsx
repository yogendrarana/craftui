"use client";

import React from "react";
import { useState } from "react";

export default function GlassmorphicSwitch() {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => setIsOn(!isOn);

    return (
        <div>
            <div
                className={`relative w-16 h-8 rounded-full p-1 transition-all duration-300 ${
                    isOn
                        ? "bg-gradient-to-r from-blue-500 to-purple-500"
                        : "bg-gray-200 dark:bg-gray-700"
                }`}
                onClick={handleToggle}
            >
                <div
                    className={`w-6 h-6 rounded-full backdrop-blur-md shadow-lg transform transition-all duration-300 ${
                        isOn ? "translate-x-8" : "translate-x-0"
                    }`}
                    style={{
                        background: isOn ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.2)",
                        boxShadow: isOn
                            ? "0 4px 8px rgba(0, 0, 0, 0.2)"
                            : "0 4px 8px rgba(0, 0, 0, 0.1)",
                        border: isOn
                            ? "1px solid rgba(255, 255, 255, 0.3)"
                            : "1px solid rgba(255, 255, 255, 0.2)"
                    }}
                ></div>
            </div>
        </div>
    );
}
