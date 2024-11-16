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
                className={`w-16 h-8 rounded-full bg-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] flex items-center justify-start p-1`}
            >
                <div
                    className={`w-6 h-6 rounded-full transform duration-300 ease-in-out ${
                        isOn
                            ? "translate-x-8 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                            : "bg-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
                    }`}
                />
            </button>
        </div>
    );
}
