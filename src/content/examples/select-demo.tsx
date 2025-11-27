"use client";

import React from "react";
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectOption,
	SelectValue,
} from "../components/select";

export default function SelectDemo() {
	const [fruit, setFruit] = React.useState<string | null>("apple");

	return (
		<Select defaultValue={fruit} onValueChange={(v: string) => setFruit(v)}>
			<SelectTrigger>
				<SelectValue placeholder="Select fruits ..." />
			</SelectTrigger>
			<SelectContent>
				<SelectOption value="apple">Apple</SelectOption>
				<SelectOption value="banana">Banana</SelectOption>
				<SelectOption value="orange">Orange</SelectOption>
				<SelectOption value="mango">Mango</SelectOption>
			</SelectContent>
		</Select>
	);
}
