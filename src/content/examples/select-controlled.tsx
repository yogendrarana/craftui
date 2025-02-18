import React from "react";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectOption,
    SelectGroup,
    SelectValue
} from "../components/select";

export default function SelectDemo() {
    const [open, setOpen] = React.useState(false);

    return (
        <Select open={open} onOpenChange={setOpen}>
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
                    <SelectOption value="laravel" disabled>
                        Laravel
                    </SelectOption>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
