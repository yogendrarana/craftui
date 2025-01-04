"use client";

import React from "react";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectOption,
    SelectGroup,
    SelectValue
} from "../registry/core/select";

export default function SelectDemo() {
    return (
        <Select>
            <SelectTrigger>
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup label="Frontend">
                    <SelectOption value="react">React</SelectOption>
                    <SelectOption value="vue">Vue</SelectOption>
                    <SelectOption value="svelte">Svelte</SelectOption>
                </SelectGroup>
                <SelectGroup label="Backend">
                    <SelectOption value="node">Node</SelectOption>
                    <SelectOption value="deno">Deno</SelectOption>
                    <SelectOption value="bun">Bun</SelectOption>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
