"use client";

import React from "react";
import TextScramble from "@/content/components/text-scramble";

export default function TextScrambleCustomChars() {
    return (
        <TextScramble speed={50} characterSet=".">
            Custom Scramble
        </TextScramble>
    );
}
