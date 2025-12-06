"use client";

import TextScramble from "../../../components/text-scramble";

export default function TextScramblePreview() {
	return (
		<TextScramble speed={50} characterSet="*">
			Custom Scramble
		</TextScramble>
	);
}
