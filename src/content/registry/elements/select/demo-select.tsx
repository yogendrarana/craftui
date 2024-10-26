"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type Option = {
    value: string;
    label: string;
};

const options: Option[] = [
    { value: "node", label: "Node" },
    { value: "laravel", label: "Laravel" },
    { value: "django", label: "Django" },
    { value: "rails", label: "Rails" }
];

export default function DemoSelect() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <div className="w-40 relative">
                <select
                    value={selectedOption}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                >
                    <option value="" disabled>
                        Framework
                    </option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
            </div>
        </div>
    );
}
