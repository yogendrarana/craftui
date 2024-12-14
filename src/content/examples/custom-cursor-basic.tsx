"use client";

import CustomCursor from "../registry/core/custom-cursor";

export default function CustomCursorBasic() {
    return (
        <CustomCursor cursor={<span>👋</span>}>
            <div className="px-8 py-4 border rounded-md">Hover me!</div>
        </CustomCursor>
    );
}
