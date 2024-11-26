import React from "react";
import Sticky from "@/content/registry/core/sticky";

export default function StickyBasic() {
    return (
        <Sticky>
            <div className="p-2 cursor-pointer">Hover Me!</div>
        </Sticky>
    );
}
