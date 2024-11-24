"use client";

import CustomCursor from "@/content/registry/core/custom-cursor";

export default function CursorChangerText(){
    return (
        <div>
            <CustomCursor cursorType="text" cursorContent="Hello, World!">
                <div className="bg-green-200 p-8 rounded-lg text-center">
                    <h2 className="text-xl font-semibold mb-4">Text Cursor</h2>
                    <p>Hover over this area to see a text cursor</p>
                </div>
            </CustomCursor>
        </div>
    );
}
