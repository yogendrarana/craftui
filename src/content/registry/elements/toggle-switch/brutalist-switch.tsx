"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BrutalistSwitch() {
    const [isOn, setIsOn] = useState(false);

    return (
        <motion.button
            className={`w-24 h-12 rounded-none border-4 border-black relative ${
                isOn ? "bg-yellow-400" : "bg-white"
            }`}
            onClick={() => setIsOn(!isOn)}
            aria-checked={isOn}
            role="switch"
        >
            <motion.div
                className="w-10 h-10 bg-black absolute top-0 left-0"
                animate={{ x: isOn ? 52 : 0 }}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
            />
        </motion.button>
    );
}
