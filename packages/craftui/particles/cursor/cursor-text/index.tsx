"use client";

import CustomCursor from "../../../components/cursor";

export default function CursorChangerText() {
	return (
		<CustomCursor
			cursor={
				<span className="text-sm border px-2 py-1 rounded shadow">
					Hello, World!
				</span>
			}
			className="h-full w-full flex items-center justify-center"
		>
			<div className="text-center">
				<p>Hover over this area to see a text cursor</p>
			</div>
		</CustomCursor>
	);
}
