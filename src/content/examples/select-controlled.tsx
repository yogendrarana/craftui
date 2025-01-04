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
    const [open, setOpen] = React.useState(false);

    return (
        <Select open={open} onOpenChange={setOpen} searchable>
            <SelectTrigger>
                <SelectValue placeholder="Select ..." />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup label="Fruits">
                    <SelectOption value="apple">Apple</SelectOption>
                    <SelectOption value="banana">Banana</SelectOption>
                </SelectGroup>
                <SelectGroup label="Vegetables">
                    <SelectOption value="carrot">Carrot</SelectOption>
                    <SelectOption value="broccoli">Broccoli</SelectOption>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
