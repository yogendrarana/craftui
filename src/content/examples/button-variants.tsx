import React from "react";
import { Button } from "../registry/core/button";

export default function ButtonDemo() {
    return (
        <div className="flex flex-col md:flex-row gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Danger</Button>
            <Button variant="danger">Outline</Button>
            <Button variant="link">Link</Button>
        </div>
    );
}
