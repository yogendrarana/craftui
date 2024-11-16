"use client";

import React, { useState } from "react";

export default function EmojiSwitch() {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => setIsOn(!isOn);

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          className={`w-16 h-9 flex items-center rounded-full p-1 cursor-pointer ${
            isOn ? "bg-yellow-400" : "bg-gray-300"
          }`}
          onClick={handleToggle}
        >
          <span
            className={`w-8 h-8 rounded-full text-2xl transform transition-transform duration-300 ease-in-out ${
              isOn ? "translate-x-6" : ""
            }`}
          >
            {isOn ? "😊" : "😴"}
          </span>
        </button>
      </div>
    </div>
  );
}
