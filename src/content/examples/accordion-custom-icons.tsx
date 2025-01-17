"use client";

import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "../registry/components/accordion";
import { Plus, Minus } from "lucide-react";

export default function AccordionDemo() {
    return (
        <Accordion className="w-full md:w-[500px]">
            <AccordionItem id="item-1">
                <AccordionItem id="item-1">
                    <AccordionTrigger
                        customOpenIcon={<Minus size={14} />}
                        customClosedIcon={<Plus size={14} />}
                    >
                        What is React?
                    </AccordionTrigger>
                    <AccordionContent>
                        React is a JavaScript library for building user interfaces. It lets you
                        create reusable UI components.
                    </AccordionContent>
                </AccordionItem>
            </AccordionItem>
            <AccordionItem id="item-2">
                <AccordionTrigger
                    customOpenIcon={<Minus size={14} />}
                    customClosedIcon={<Plus size={14} />}
                >
                    What is Tailwind CSS?
                </AccordionTrigger>
                <AccordionContent>
                    Tailwind CSS is a utility-first CSS framework packed with classes like flex,
                    pt-4, text-center and rotate-90 that can be composed to build any design,
                    directly in your markup.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem id="item-3">
                <AccordionTrigger
                    customOpenIcon={<Minus size={14} />}
                    customClosedIcon={<Plus size={14} />}
                >
                    Why use Framer Motion?
                </AccordionTrigger>
                <AccordionContent>
                    Framer Motion is a motion library for React. It provides a declarative, flexible
                    API to add smooth animations and gestures to your components.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
