"use client";

import CustomCursor from "../components/cursor";

export default function CustomCursorBasic() {
    return (
        <CustomCursor cursor={<span>👋</span>} className="h-[400px] w-full flex items-center justify-center">
            Emoji Cursor
        </CustomCursor>
    );
}
