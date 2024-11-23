"use client";

import React from "react";
import TextScramble from "@/content/registry/core/text-scramble";

export default function TextScrambleBasic() {
    return (
        <TextScramble
            displayText="Text Scramble Effect Demo"
            scrambleOnHover={false}
            duration={1.2}
        />
    );
}
