"use client";

import React, { useState } from "react";

export default function CustomCheckbox() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className="flex items-center">
            <label className="cursor-pointer relative">
                <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <span
                    className={`block border-2 border-gray-700 rounded-md transition-all duration-500 ${
                        isChecked
                            ? "h-7 w-4 rotate-45 -translate-y-1 border-t-transparent border-l-transparent rounded-none"
                            : "h-7 w-7"
                    }`}
                ></span>
            </label>
        </div>
    );
}
