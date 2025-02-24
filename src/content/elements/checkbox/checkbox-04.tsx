"use client";

import React, { useState } from "react";

export default function Checkbox() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <label className="relative cursor-pointer">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="absolute opacity-0"
            />
            <div
                className={`w-[30px] h-[30px] relative border-2 border-[#b7b7b7] rounded-[5px] shadow-[3px_3px_#b7b7b7] transition-all duration-300
                ${isChecked ? "bg-blue-500 border-blue-500" : "bg-[#fff]"}`}
            >
                {isChecked && (
                    <div className="w-[7px] h-[15px] absolute top-[2px] left-[8px] border-r-[2.5px] border-b-[2.5px] border-solid border-white transform rotate-45"></div>
                )}
            </div>
        </label>
    );
}
