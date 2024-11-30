"use client";

import React from "react";
import TextScramble from "@/content/registry/core/text-scramble";

export default function TextScrambleBasic() {
    return (
        <TextScramble speed={50} className="font-mono uppercase">
            Welcome to Text Scramble!
        </TextScramble>
    );
}
