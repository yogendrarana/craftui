import React from "react";
import { ArrowRight, Mail, Sun } from "lucide-react";
import { Button } from "../components/button";

export default function ButtonDemo() {
	return (
		<div className="flex flex-col md:flex-row gap-2">
			<Button variant="outline" size="icon">
				<Sun size={16} />
			</Button>

			<Button variant="outline">
				<Mail className="h-4 w-4" />
				With Icon
			</Button>

			<Button variant="outline">
				Arrow Right
				<ArrowRight className="h-4 w-4" />
			</Button>
		</div>
	);
}
