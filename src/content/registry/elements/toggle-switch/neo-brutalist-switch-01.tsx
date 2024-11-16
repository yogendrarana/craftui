"use client";

import React, { useState } from "react";

export default function NeoBrutalistToggleSwitch() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <div>
            <button
                className={`
                    relative w-28 h-12
                    bg-black border-4 border-black
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    transition-all duration-300 ease-in-out
                `}
                onClick={toggleSwitch}
                aria-checked={isOn}
                role="switch"
            >
                <div
                    className={`
                    absolute top-0 left-0 w-1/2 h-full bg-white
                    transform transition-transform duration-300 ease-in-out
                    flex items-center justify-center
                    ${isOn ? "translate-x-full" : "translate-x-0"}
                `}
                >
                    <span className="text-black font-bold text-xs">{isOn ? "ON" : "OFF"}</span>
                </div>
            </button>
        </div>
    );
}
