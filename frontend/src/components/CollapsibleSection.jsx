import { LucideBadgeMinus, LucideBadgePlus } from "lucide-react";
import React, { useState } from "react";

const CollapsibleSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
  
    return (
      <div className="border-b border-gray-200 my-4 shadow-lg">
        <div
          className="flex justify-between items-center cursor-pointer bg-slate-200 px-4 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-2xl p-2 font-medium text-black">{title}</h2>
          <button
            className="text-orange-500 focus:outline-none"
            aria-label={isOpen ? "Collapse section" : "Expand section"}
          >
            {isOpen ? <LucideBadgeMinus /> : <LucideBadgePlus />}
          </button>
        </div>
        {isOpen && <div className="p-4 bg-white text-black">{children}</div>}
      </div>
    );
  };

export default CollapsibleSection
