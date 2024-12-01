"use client";

import React from "react";
import TextScramble from "@/content/registry/core/text-scramble";

export default function TextScrambleCustomTrigger() {
    const [triggerScramble, setTriggerScramble] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setTriggerScramble(true)}
            onMouseLeave={() => setTriggerScramble(false)}
        >
            <TextScramble speed={50} className="cursor-pointer uppercase" trigger={triggerScramble}>
                Hover to scramble this text!
            </TextScramble>
        </div>
    );
}
