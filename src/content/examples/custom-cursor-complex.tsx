"use client";

import { Star } from "lucide-react";
import CustomCursor from "@/content/registry/core/custom-cursor";

export default function CustomCursorComplex() {
    return (
        <CustomCursor
            cursorType="custom"
            cursorContent={
                <div className="flex items-center space-x-2 bg-yellow-300 px-3 py-1 rounded-full shadow-lg">
                    <Star className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-800">Star me!</span>
                </div>
            }
        >
            <div className="bg-yellow-100 p-8 rounded-md text-center">
                <h2 className="text-xl font-semibold mb-4">Custom Cursor</h2>
                <p>Hover over this area to see a custom cursor</p>
            </div>
        </CustomCursor>
    );
}
