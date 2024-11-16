"use client";

import React from "react";
import { useState } from "react";

export default function NeonSwitch() {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => setIsOn(!isOn);

    return (
        <div>
            <button
                onClick={handleToggle}
                className={`w-16 h-8 rounded-full p-1 duration-300 ease-in-out ${
                    isOn
                        ? "bg-purple-900 shadow-[0_0_10px_2px_rgba(147,51,234,0.7)]"
                        : "bg-gray-500"
                }`}
            >
                <div
                    className={`w-6 h-6 rounded-full transform duration-300 ease-in-out ${
                        isOn
                            ? "translate-x-8 bg-purple-400 shadow-[0_0_10px_2px_rgba(167,139,250,0.7)]"
                            : "bg-gray-400"
                    }`}
                />
            </button>
        </div>
    );
}
