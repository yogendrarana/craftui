"use client";

import React, { useState } from "react";

export default function SkeuomorphicSwitch() {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => setIsOn(!isOn);

    return (
        <div>
            <button
                onClick={handleToggle}
                className={`w-16 h-10 rounded-full bg-gradient-to-b from-gray-300 to-gray-400 border border-gray-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] flex items-center justify-start p-1`}
            >
                <div
                    className={`w-8 h-8 rounded-full transform duration-300 ease-in-out ${
                        isOn
                            ? "translate-x-6 bg-gradient-to-b from-green-400 to-green-500 border border-green-600 shadow-md"
                            : "bg-gradient-to-b from-gray-100 to-gray-300 border border-gray-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                    }`}
                />
            </button>
        </div>
    );
}
