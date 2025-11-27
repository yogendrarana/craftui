"use client";

import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "../components/accordion";

export default function AccordionDemo() {
	return (
		<Accordion defaultOpen={["item-1"]} className="w-full md:w-[500px]">
			<AccordionItem id="item-1">
				<AccordionTrigger>What is React?</AccordionTrigger>
				<AccordionContent>
					React is a JavaScript library for building user interfaces.
					It lets you create reusable UI components.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem id="item-3">
				<AccordionTrigger>What is Tailwind CSS?</AccordionTrigger>
				<AccordionContent>
					Tailwind CSS is a utility-first CSS framework packed with
					classes like flex, pt-4, text-center and rotate-90 that can
					be composed to build any design, directly in your markup.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem id="item-2">
				<AccordionTrigger>Why use Framer Motion?</AccordionTrigger>
				<AccordionContent>
					Framer Motion is a motion library for React. It provides a
					declarative, flexible API to add smooth animations and
					gestures to your components.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
