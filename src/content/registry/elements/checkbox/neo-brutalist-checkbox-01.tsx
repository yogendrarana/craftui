import React from "react";

export default function NeoBrutalistCheckbox() {
    return (
        <label className="cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-7 h-7 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] peer-checked:bg-yellow-400 transition-all">
                <svg
                    className="w-7 h-7 text-black fill-current hidden peer-checked:block"
                    viewBox="0 0 20 20"
                >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
            </div>
        </label>
    );
}
