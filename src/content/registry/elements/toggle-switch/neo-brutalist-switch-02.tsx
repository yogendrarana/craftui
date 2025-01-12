"use client";

import React, { useState } from "react";

export default function NeoBrutalistSwitch() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <div>
            <button
                className={`
                    relative w-20 h-9
                    bg-black dark:bg-white 
                    border-4 border-black dark:border-white
                    transition-all duration-300 ease-in-out
                `}
                onClick={toggleSwitch}
                aria-checked={isOn}
                role="switch"
            >
                <div
                    className={`
                    absolute top-0 left-0 w-1/2 h-full 
                    bg-white dark:bg-black
                    transform transition-transform duration-300 ease-in-out
                    flex items-center justify-center
                    ${isOn ? "translate-x-full" : "translate-x-0"}
                `}
                >
                    <span className="text-black dark:text-white font-bold text-xs">
                        {isOn ? "ON" : "OFF"}
                    </span>
                </div>
            </button>
        </div>
    );
}