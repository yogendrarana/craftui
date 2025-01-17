import React from "react";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectOption,
    SelectValue
} from "../registry/components/select";

export default function SelectDemo() {
    return (
        <Select
            searchable
            creatable
            onCreateOption={(value) =>
                alert(
                    `Do something to create  ${value}. Like sending a request to the server or open a form modal.`
                )
            }
        >
            <SelectTrigger>
                <SelectValue placeholder="Select a fruit ..." />
            </SelectTrigger>
            <SelectContent>
                <SelectOption value="mango">Mango</SelectOption>
                <SelectOption value="apple">Apple</SelectOption>
                <SelectOption value="banana">Banana</SelectOption>
                <SelectOption value="orange">Orange</SelectOption>
                <SelectOption value="coconut">Coconut</SelectOption>
            </SelectContent>
        </Select>
    );
}
