"use client";

import CustomCursor from "@/content/registry/core/custom-cursor";

export default function CursorChangerText() {
    return (
        <CustomCursor cursorType="text" cursorContent="Hello, World!">
            <div className="border p-8 rounded-md text-center">
                <h2 className="text-xl font-semibold mb-2">Text Cursor</h2>
                <p>Hover over this area to see a text cursor</p>
            </div>
        </CustomCursor>
    );
}
