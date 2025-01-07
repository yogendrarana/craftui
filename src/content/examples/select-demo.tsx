"use client";

import React from "react";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectOption,
    SelectValue
} from "../registry/core/select";

export default function SelectDemo() {
    const [_, setFruit] = React.useState<string | null>(null);

    return (
        <Select onValueChange={(v: string) => setFruit(v)}>
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
