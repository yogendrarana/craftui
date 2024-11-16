"use client";

import React from "react";
import { useState } from "react";

export default function MinimalistSwitch() {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => setIsOn(!isOn);

    return (
        <div>
            <button onClick={handleToggle} className="w-12 h-6 flex items-center">
                <div
                    className={`
                        w-full h-[2px] bg-gray-200 relative transition-all duration-200
                        ${isOn ? "bg-black" : ""}
                    `}
                >
                    <div
                        className={`
                            absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 
                            transition-all duration-200 cursor-pointer
                            ${
                                isOn
                                    ? "right-0 border-black bg-black"
                                    : "left-0 border-gray-200 bg-gray-100"
                            }
                        `}
                    />
                </div>
            </button>
        </div>
    );
}
