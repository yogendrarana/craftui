import React from "react";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectOption,
    SelectValue
} from "../components/select";

const countries = [
    { label: "Australia", value: "AU" },
    { label: "China", value: "CN" },
    { label: "Canada", value: "CA" },
    { label: "Spain", value: "ES" },
    { label: "France", value: "FR" },
    { label: "Germany", value: "DE" },
    { label: "Italy", value: "IT" },
    { label: "Japan", value: "JP" },
    { label: "United Kingdom", value: "UK" },
    { label: "United States", value: "US" }
];

export default function SearchableSelectDemo() {
    return (
        <Select searchable>
            <SelectTrigger>
                <SelectValue placeholder="Select country ..." />
            </SelectTrigger>
            <SelectContent>
                {countries.map((country) => (
                    <SelectOption key={country.value} value={country.value}>
                        {country.label}
                    </SelectOption>
                ))}
            </SelectContent>
        </Select>
    );
}
