"use client";

import { useConfetti } from "@craftdotui/hooks/use-confetti";

export default function ConfettiDemo() {
	const triggerConfetti = useConfetti();

	const origins = ["top", "bottom", "center", "left", "right"] as const;

	return (
		<div className="flex justify-center flex-wrap gap-4 dark:text-white">
			{origins.map((origin) => (
				<button
					key={origin}
					type="button"
					onClick={() => {
						triggerConfetti({
							particleCount: 50,
							origin,
							duration: 5000,
						});
					}}
					className="px-4 py-2 rounded bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-600 transition"
				>
					{origin.charAt(0).toUpperCase() +
						origin.slice(1).replace("-", " ")}
				</button>
			))}
		</div>
	);
}
