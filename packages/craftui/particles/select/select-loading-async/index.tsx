"use client";

import React, { useState } from "react";
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectOption,
	SelectValue,
} from "@craftdotui/craftui/ui/select";

export default function SelectLoadingAsync() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [, setSelected] = useState<{ id: number; name: string } | null>(null);

	React.useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate loading
				const res = await fetch(
					"https://jsonplaceholder.typicode.com/users",
				);
				const data = await res.json();
				setUsers(data);
			} catch (error: any) {
				console.error(error.message);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return (
		<Select
			searchable
			loading={loading}
			onValueChange={(v: string) => {
				const user = users.find((u: any) => u.name === v);
				setSelected(user || null);
			}}
		>
			<SelectTrigger>
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{users.map((user: any, idx) => (
					<SelectOption key={idx} value={user.name}>
						{`${user.name} (ID: ${user.id})`}
					</SelectOption>
				))}
			</SelectContent>
		</Select>
	);
}
