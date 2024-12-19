"use client";

import React from "react";
import { triggerConfetti } from "../registry/functions/confetti";

export default function ConfettiDemo() {
    return (
        <div className="flex gap-4">
            <button
                onClick={() => {
                    triggerConfetti({
                        particleCount: 20,
                        origin: "left",
                        duration: 5000
                    });
                }}
                className="w-20 bg-gray-200 py-2 rounded-sm"
            >
                Left
            </button>

            <button
                onClick={() => {
                    triggerConfetti({
                        particleCount: 60,
                        origin: "center",
                        duration: 5000
                    });
                }}
                className="w-20 bg-gray-200 py-2 rounded-sm"
            >
                Center
            </button>

            <button
                onClick={() => {
                    triggerConfetti({
                        particleCount: 40,
                        origin: "right",
                        duration: 5000
                    });
                }}
                className="w-20 bg-gray-200 py-2 rounded-sm"
            >
                Right
            </button>
        </div>
    );
}
