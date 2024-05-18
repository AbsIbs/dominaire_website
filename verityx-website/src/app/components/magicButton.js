"use client";
import { useState } from "react";

const MagicButton = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-flex items-center justify-center px-6 py-3 border border-gray-500 text-gray-500 font-medium rounded-full overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      <div
        className={`absolute inset-0 w-full h-full bg-red-500 ${
          isHovered ? "animate-fillBackground" : ""
        }`}
        style={{ borderRadius: "inherit" }}
      ></div>
    </div>
  );
};

export default MagicButton;
