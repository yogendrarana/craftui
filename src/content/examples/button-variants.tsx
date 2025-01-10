import React from "react";
import { Button } from "../registry/core/button";

export default function ButtonDemo() {
    return (
        <div className="flex flex-col md:flex-row gap-2">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="gradient">Gradient</Button>
            <Button variant="glow">Glow</Button>
            <Button variant="glass">Glass</Button>

        </div>
    );
}
