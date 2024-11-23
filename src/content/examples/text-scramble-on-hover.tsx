"use client";

import React from "react";
import TextScramble from "@/content/registry/core/text-scramble";

export default function TextScrambleOnHover() {
    return (
        <TextScramble
            displayText="Text Scramble Effect Demo"
            scrambleOnHover={true}
            duration={1.2}
        />
    );
}
