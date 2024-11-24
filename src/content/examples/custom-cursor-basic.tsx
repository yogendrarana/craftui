"use client";

import CustomCursor from "../registry/core/custom-cursor";

export default function CustomCursorBasic() {
    return (
        <CustomCursor cursorType="icon" cursorContent="👋">
            <div>Hover me!</div>
        </CustomCursor>
    );
}
