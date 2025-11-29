"use client";

import React from "react";
import Magnetic from "@/registry/components/magnetic";

export default function MagneticBasic() {
	return (
		<Magnetic>
			<button className="px-4 py-2 cursor-pointer border rounded shadow">
				Hover Me
			</button>
		</Magnetic>
	);
}
