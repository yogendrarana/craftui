"use client";

import React from "react";
import { useState } from "react";

export default function ClassicSwitch() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <div className="flex items-center justify-center">
            <button
                className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
                    isOn ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={toggleSwitch}
            >
                <span
                    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                        isOn ? "translate-x-6" : ""
                    }`}
                ></span>
            </button>
        </div>
    );
}
