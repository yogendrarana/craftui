"use client";

import { useState } from "react";

type Option = {
    id: string;
    label: string;
};

const options: Option[] = [
    { id: "react", label: "React" },
    { id: "vue", label: "Vue" },
    { id: "svelte", label: "Svelte" }
];

export default function DemoRadio() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (optionId: string) => {
        setSelectedOption(optionId);
    };

    return (
        <div className="flex flex-col justify-center">
            {options.map((option) => (
                <label
                    key={option.id}
                    className="flex items-center space-x-3 mb-3 cursor-pointer group"
                >
                    <div className="relative">
                        <input
                            type="radio"
                            className="sr-only"
                            name="radio-group"
                            value={option.id}
                            checked={selectedOption === option.id}
                            onChange={() => handleOptionChange(option.id)}
                        />
                        <div
                            className={`w-4 h-4 border-2 rounded-full ${
                                selectedOption === option.id
                                    ? "border-primary"
                                    : "border-gray-300 group-hover:border-gray-400"
                            } transition-colors duration-200 ease-in-out`}
                        >
                            <div
                                className={`w-2 h-2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                                    selectedOption === option.id
                                        ? "bg-primary scale-100"
                                        : "bg-gray-300 scale-0"
                                } transition-all duration-200 ease-in-out`}
                            ></div>
                        </div>
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200 ease-in-out">
                        {option.label}
                    </span>
                </label>
            ))}
        </div>
    );
}
