import React, { useState, useRef, useEffect } from "react";
import CollapsibleSection from "../components/CollapsibleSection";
import Spa from "../assets/img5.png";
import mainImageFile from "../assets/img3.png";
import Sunshine from "../assets/img4.png";
import Three from "../assets/img2.png";
import { MapPin, Building, Bed, Ruler, Phone } from "lucide-react";

const Projectpage = () => {
  const [mainImage, setMainImage] = useState(mainImageFile);
  const navbarRef = useRef(null);
  const aboutRef = useRef(null);
  const configRef = useRef(null);
  const amenitiesRef = useRef(null);
  const localityRef = useRef(null);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  const images = [Spa, Sunshine, Three];

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleScroll = () => {
    if (navbarRef.current) {
      const offset = navbarRef.current.getBoundingClientRect().top;
      setIsNavbarSticky(offset <= 0);
    }
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Main Content */}
      <div className="mx-auto p-4 mt-20">
        <div className="flex flex-col-reverse gap-4 lg:flex-row bg-[#F8FAFC] shadow-md rounded-lg overflow-hidden">
          {/* Left Section */}
          <div className="lg:w-2/5 p-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold bg-yellow-300 px-2 py-1 rounded">
                Ready to Move
              </span>
            </div>
            <div className="flex justify-between items-center my-4">
              <h1 className="text-3xl font-bold text-gray-800">Gaur NYC Residences</h1>
            </div>
            <div className="text-sm text-gray-500 my-2">Wave City, Ghaziabad</div>
            <div className="flex flex-col justify-center my-3">
              <div className="grid grid-cols-2 gap-2">
                {/* Location */}
                <div className="flex items-center p-2">
                  <MapPin className="text-blue-500 mr-2" />
                  <p className="text-base">Location</p>
                </div>

                <div className="flex items-center p-2">
                  <Building className="text-green-500 mr-2" />
                  <p className="text-base">Category</p>
                </div>

                {/* BHK */}
                <div className="flex items-center p-2">
                  <Bed className="text-purple-500 mr-2" />
                  <p className="text-base">Rooms</p>
                </div>

                {/* Area Size */}
                <div className="flex items-center p-2">
                  <Ruler className="text-red-500 mr-2" />
                  <p className="text-base">Area Size</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button className="flex gap-2 bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600">
                <Phone />
                Instant Call Back
              </button>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600">
                Instant Enquiry
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-3/5 flex flex-col">
            <div className="flex flex-col items-center space-y-4">
              {/* Main Image */}
              <div className="w-full">
                <img
                  src={mainImage}
                  alt="Main Display"
                  className="w-full sm:w-full h-[300px] sm:h-[400px] rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex justify-center space-x-4">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all"
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div
        className={`${
          isNavbarSticky ? "sticky top-0 z-10" : ""
        } bg-black text-white`}
        ref={navbarRef}
      >
        <ul className="flex flex-wrap justify-around md:justify-center md:space-x-6 py-3">
          <li
            className="px-4 py-2 text-sm md:text-base font-medium hover:text-pink-500 cursor-pointer"
            onClick={() => scrollToSection(aboutRef)}
          >
            ABOUT
          </li>
          <li
            className="px-4 py-2 text-sm md:text-base font-medium hover:text-pink-500 cursor-pointer"
            onClick={() => scrollToSection(configRef)}
          >
            CONFIGURATION
          </li>
          <li
            className="px-4 py-2 text-sm md:text-base font-medium hover:text-pink-500 cursor-pointer"
            onClick={() => scrollToSection(amenitiesRef)}
          >
            AMENITIES
          </li>
          <li
            className="px-4 py-2 text-sm md:text-base font-medium hover:text-pink-500 cursor-pointer"
            onClick={() => scrollToSection(localityRef)}
          >
            LOCALITY
          </li>
        </ul>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col md:flex-row bg-[#F8FAFC] shadow-lg rounded-lg overflow-hidden">
        {/* Left Content */}
        <div className="px-12 md:w-2/3">
          <div ref={aboutRef}>
            <CollapsibleSection title="About">
              <p>
                Gaur NYC Residences are the living spaces that are surrounded by
                limitless luxury and offer the best kind of living in Ghaziabad.
              </p>
            </CollapsibleSection>
          </div>
          <div ref={configRef}>
            <CollapsibleSection title="Configuration">
              <div className="border p-4 rounded shadow">
                <h3 className="text-xl font-bold text-center">Floor Plan</h3>
                <p className="text-gray-600">Click To See</p>
              </div>
            </CollapsibleSection>
          </div>
          <div ref={amenitiesRef}>
            <CollapsibleSection title="Amenities">
              <p>Swimming Pool, Fitness Center, Gardens, Clubhouse, etc.</p>
            </CollapsibleSection>
          </div>
          <div ref={localityRef}>
            <CollapsibleSection title="Location">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </CollapsibleSection>
          </div>
        </div>

        {/* Enquiry Box */}
        <div className="md:w-1/4 w-full p-4">
          <div className="sticky top-20">
            <div className="bg-gray-100 border rounded-lg p-4 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Enquire Box</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg p-2"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full border rounded-lg p-2"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    className="w-full border rounded-lg p-2"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectpage;
