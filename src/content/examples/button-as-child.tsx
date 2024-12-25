import React from "react";
import { Button } from "../registry/core/button";

export default function ButtonDemo() {
    return (
        <Button variant="outline" asChild>
            <span>Button</span>
        </Button>
    );
}
