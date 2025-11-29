"use client";

import React from "react";
import TextScramble from "@/registry/text/text-scramble";

export default function TextScrambleCustomChars() {
	return (
		<TextScramble speed={50} characterSet=".">
			Custom Scramble
		</TextScramble>
	);
}
