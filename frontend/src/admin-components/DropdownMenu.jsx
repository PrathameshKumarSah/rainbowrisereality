import React, { useState } from "react";

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-2 hover:bg-gray-700 text-gray-300 rounded"
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul className="ml-4">
          {items.map((item, index) => (
            <li key={index} className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
