"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import CustomCursor from "@/content/registry/components/cursor";

export default function CustomCursorComplex() {
    return (
        <CustomCursor
            cursor={
                <div className="flex items-center space-x-2 bg-yellow-300 px-3 py-1 rounded-full shadow-lg">
                    <Sparkles className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-800">Click Here!</span>
                    <ArrowRight className="w-4 h-4 text-yellow-600" />
                </div>
            }
            className="h-[400px] w-full flex items-center justify-center"
        >
            <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">Custom Cursor</h2>
                <p>Hover over this area to see a custom cursor</p>
            </div>
        </CustomCursor>
    );
}
