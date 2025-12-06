"use client";

import Magnetic from "../../components/magnetic";

export default function MagneticBasic() {
	return (
		<Magnetic>
			<button
				type="button"
				className="px-4 py-2 cursor-pointer border rounded shadow"
			>
				Hover Me
			</button>
		</Magnetic>
	);
}
