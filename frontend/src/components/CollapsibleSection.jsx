import React, { useState } from "react";

const CollapsibleSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
  
    return (
      <div className="border-b border-gray-200 py-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-2xl font-medium text-black">{title}</h2>
          <button
            className="text-gray-600 focus:outline-none"
            aria-label={isOpen ? "Collapse section" : "Expand section"}
          >
            {isOpen ? "-" : "+"}
          </button>
        </div>
        {isOpen && <div className="mt-4">{children}</div>}
      </div>
    );
  };

export default CollapsibleSection
