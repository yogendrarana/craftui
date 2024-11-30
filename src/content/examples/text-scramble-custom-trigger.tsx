"use client";

import React from "react";
import TextScramble from "@/content/registry/core/text-scramble";

export default function TextScrambleCustomTrigger() {
    const [triggerScramble, setTriggerScramble] = React.useState(false);
    return (
        <div
            // onMouseEnter={() => setTriggerScramble(true)}
            // onMouseLeave={() => setTriggerScramble(false)}
            className="flex flex-col gap-4 items-center border"
        >
            <TextScramble speed={50} trigger={triggerScramble} className="cursor-pointer uppercase">
                Hover to scramble this text
            </TextScramble>

            <button onClick={() => setTriggerScramble(!triggerScramble)}>
                {triggerScramble ? "True" : "False"}
            </button>
        </div>
    );
}
