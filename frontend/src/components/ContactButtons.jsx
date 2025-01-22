import React, { useState } from "react";
import userIcon from '../assets/user.svg'
import { Mail, Phone, PhoneCall } from 'lucide-react'

const ContactButtons = () => {
  const [isOpen, setIsOpen] = useState(true); // Default open state

  return (
    <div className="relative">
        <div className="fixed bottom-4 right-6 z-50">
       
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute bottom-0 right-0 -inset-10 z-10 bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-transform duration-500 cursor-pointer"
            >
                ⋮   
            </button>

        {/* Contact Buttons */}
        <div
            className={`absolute bottom-0 right-0 inset-0 flex items-center justify-center transition-all duration-500 ${
            isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
        >
            {/* Email Button */}
            <a
            href="mailto:info.rainbowriserealty@gmail.com"
            className="absolute p-2 bg-yellow-600  w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 text-white transition-transform duration-500 cursor-pointer"
            style={{ transform: isOpen ? "translate(-5.5rem, -1.25rem)" : "translate(0, 0)" }}
            >
            <Mail
                size={30} // Adjust size as needed
            />
            </a>

            {/* WhatsApp Button */}
            <a
            href="https://wa.me/+918058517274"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform duration-500 cursor-pointer"
            style={{ transform: isOpen ? "translate(-4.25rem, -4.75rem)" : "translate(0, 0)" }}
            >
            <img src={userIcon} alt="" height={32} width={32} />
            </a>

            {/* Call Button */}
            <a
            href="tel:+918058517274"
            className="absolute p-2 bg-blue-700 w-10 h-10  text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-transform duration-500 cursor-pointer"
            style={{ transform: isOpen ? "translate(-.5rem, -6rem)" : "translate(0, 0)" }}
            >
            <PhoneCall
                className="text-white"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={1}
                size={28} // Adjust size as needed
            />
            </a>
        </div>
        </div>
    </div>
  );
};

export default ContactButtons;
