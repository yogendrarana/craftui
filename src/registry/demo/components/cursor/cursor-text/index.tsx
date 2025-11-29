"use client";

import CustomCursor from "@/registry/components/cursor";

export default function CursorChangerText() {
	return (
		<CustomCursor
			cursor={
				<span className="text-sm border bg-white text-black px-2 py-1 rounded shadow">
					Hello, World!
				</span>
			}
			className="h-[400px] w-full flex items-center justify-center"
		>
			<div className="text-center">
				<h2 className="text-xl font-semibold mb-2">Text Cursor</h2>
				<p>Hover over this area to see a text cursor</p>
			</div>
		</CustomCursor>
	);
}
