"use client";

import React from "react";
import { useState } from "react";

export default function GlowSwitch() {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => setIsOn(!isOn);

    return (
        <div>
            <button
                onClick={handleToggle}
                className={`
                    w-14 h-7 rounded-full transition-all duration-300
                    ${isOn ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "bg-gray-200"}
                `}
            >
                <div
                    className={`
                        w-5 h-5 rounded-full bg-white transition-transform duration-200
                        m-1 shadow-md
                        ${isOn ? "translate-x-7" : "translate-x-0"}
                    `}
                />
            </button>
        </div>
    );
}
