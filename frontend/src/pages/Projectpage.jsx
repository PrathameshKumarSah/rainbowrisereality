import Imag from '../assets/img3.png'
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
  

const Projectpage = () => (
    <div>
        <div className=" mx-auto p-4 mt-20">
            <div className="flex flex-col lg:flex-row bg-[#F8FAFC] shadow-md rounded-lg overflow-hidden">
                {/* Left Section */}
                <div className="lg:w-1/2 flex flex-col">
                    <img
                        src={Imag}
                        alt="Building"
                        className="h-max lg:h-auto w-full object-cover" />
                </div>
                {/* Right Section */}
                <div className="lg:w-2/3 p-6">

<div className='flex justify-between items-center'>
    <h1 className="text-3xl  font-bold text-gray-800">Gaur NYC Residences</h1>
    <h1 className="text-3xl sm:top-0 right-0 font-bold text-gray-800">Gaur</h1>
</div>
<div className="flex items-center mt-2">
</div>
<div className="text-sm text-gray-500 mt-1">Wave City, Ghaziabad</div>
<div className="text-3xl font-bold text-gray-800 mt-4">₹2.10 Cr</div>
<div className="mt-6">
    <h2 className="text-xl font-semibold text-gray-800">Project Highlights</h2>
    <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
            <span className="text-gray-500 text-sm">New Launch</span>
            <div className="bg-gray-200 h-2 rounded-full mt-1">
                <div className="bg-red-500 h-2 w-1/3 rounded-full"></div>
            </div>
        </div>
        <div>
            <span className="text-gray-500 text-sm">Possession Date</span>
            <div className="text-gray-800 font-medium text-sm">2028-12-01</div>
        </div>
        <div>
            <span className="text-gray-500 text-sm">Floor Plans</span>
            <div className="text-gray-800 font-medium text-sm">5 BHK</div>
        </div>
    </div>
    <div className='flex justify-between items-center'>
    <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600">
         Instant Call Back
    </button>
    <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600">
         Instant Equiry
    </button>
    </div>
</div>
</div>
            </div>
        </div>

        <div className="max-w-4xl mx-auto p-4">
           <div>
           <nav className="bg-black text-white">
      <ul className="flex flex-wrap justify-around md:justify-center md:space-x-6 py-3">
        <li className="px-4 py-2 text-sm md:text-base font-medium hover:text-pink-500 focus:text-pink-500">
            ABOUT
        </li>
        <li className="px-4 py-2 text-sm md:text-base font-medium hover:text-pink-500 focus:text-pink-500">
            CONFIGURATION
        </li>
        <li className="px-4 py-2 text-sm md:text-base font-medium hover:text-pink-500 focus:text-pink-500">
            AMENITIES
        </li>
        <li className="px-4 py-2 text-sm md:text-base font-medium hover:text-pink-500 focus:text-pink-500">
            LOCALITY
        </li>
      </ul>
    </nav>
           </div>

            <CollapsibleSection title="About">
                <p>
                    Gaur NYC Residences are the living spaces that are surrounded by
                    limitless luxury and offer the best kind of living in Ghaziabad.
                </p>
                {/* Add more content here */}
            </CollapsibleSection>

            <CollapsibleSection title="Configuration">
                <div className="">
                    <div className="border p-4 rounded shadow">
                        <h3 className="text-xl font-bold text-center">Floor Plan</h3>
                        <p className="text-gray-600">Click To See</p>
                    </div>
                    {/* Add more configurations as needed */}
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="Amenities">
                <p>Swimming Pool, Fitness Center, Gardens, Clubhouse, etc.</p>
                {/* Add more details about amenities */}
            </CollapsibleSection>

            <CollapsibleSection title="Location">
                <div className="h-64 w-full">
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8390127464!2d77.36566413789062!3d28.661897597776897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf0e03b89c203%3A0x295f9d1a4f5dfc2b!2sWave%20City%20Ghaziabad%2C%20NH24!5e0!3m2!1sen!2sin!4v1676587982418!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </CollapsibleSection>
        </div>

    </div>
)

export default Projectpage
