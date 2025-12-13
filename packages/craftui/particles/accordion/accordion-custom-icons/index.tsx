"use client";

import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@craftdotui/craftui/components/accordion";
import { Plus } from "lucide-react";

export default function AccordionCustomIcons() {
	return (
		<Accordion className="w-full md:w-[500px]">
			<AccordionItem id="item-1">
				<AccordionTrigger>
					What is React?
					<Plus className="size-4 shrink-0 transition-all ease-out group-data-[state=open]:rotate-45" />
				</AccordionTrigger>
				<AccordionContent>
					React is a JavaScript library for building user interfaces.
					It lets you create reusable UI components.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem id="item-2">
				<AccordionTrigger>
					<span>What is Tailwind CSS?</span>
					<Plus className="size-4 shrink-0 transition-all ease-out group-data-[state=open]:rotate-45" />
				</AccordionTrigger>
				<AccordionContent>
					Tailwind CSS is a utility-first CSS framework packed with
					classes like flex, pt-4, text-center and rotate-90 that can
					be composed to build any design, directly in your markup.
				</AccordionContent>
			</AccordionItem>

			<AccordionItem id="item-3">
				<AccordionTrigger>
					Why use Framer Motion?
					<Plus className="size-4 shrink-0 transition-all ease-out group-data-[state=open]:rotate-45" />
				</AccordionTrigger>
				<AccordionContent>
					Framer Motion is a motion library for React. It provides a
					declarative, flexible API to add smooth animations and
					gestures to your components.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
