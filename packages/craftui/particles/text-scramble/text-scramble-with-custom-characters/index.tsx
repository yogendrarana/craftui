"use client";

import TextScramble from "@craftdotui/craftui/components/text-scramble";

export default function Particle() {
	return (
		<TextScramble speed={50} characterSet="*">
			Custom Scramble
		</TextScramble>
	);
}
