"use client";

import React from "react";
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectOption,
	SelectValue,
} from "@craftdotui/craftui/components/select";

export default function SelectMultiple() {
	const [value, setValue] = React.useState<string[]>([]);

	React.useEffect(() => {
		console.log(value);
	}, [value]);

	return (
		<Select multiple onValueChange={setValue} defaultValue={value}>
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
