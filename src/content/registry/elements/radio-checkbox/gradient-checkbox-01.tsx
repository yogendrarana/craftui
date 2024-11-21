"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function GradientCheckbox() {
    const [isChecked, setIsChecked] = useState(true);

    const toggleCheckbox = () => setIsChecked(!isChecked);

    return (
        <div className="flex items-center justify-center">
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={isChecked}
                    onChange={toggleCheckbox}
                />
                <motion.div
                    className={`w-8 h-8 rounded-md border ${
                        isChecked
                            ? "bg-gradient-to-br from-purple-500 via-pink-500 to-red-500"
                            : "bg-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }}
                >
                    <motion.svg
                        className="w-full h-full p-2 text-white"
                        viewBox="0 0 24 24"
                        initial="hidden"
                        animate={isChecked ? "visible" : "hidden"}
                    >
                        <motion.path
                            d="M4 12.6111L8.92308 17.5L20 6.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={{
                                visible: {
                                    pathLength: 1,
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut"
                                    }
                                },
                                hidden: {
                                    pathLength: 0,
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeIn"
                                    }
                                }
                            }}
                        />
                    </motion.svg>
                </motion.div>
            </label>
        </div>
    );
}
