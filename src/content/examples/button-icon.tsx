import React from "react";
import { Button } from "../registry/core/button";
import { Sun } from "lucide-react";

export default function ButtonDemo() {
    return (
        <Button variant="outline" size="icon">
            <Sun size={18} />
        </Button>
    );
}
