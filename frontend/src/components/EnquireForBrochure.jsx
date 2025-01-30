import { X } from "lucide-react";
import React, { useState } from "react";
import { apiStore } from "../store/apiHandler";
import { SkewLoader } from "react-spinners";

const EnquireForBrochure = ({ modalOpen, setModalOpen, brochureUrl }) => {
  const initialData = { title: "", name: "", phone: "", message: "", date: "" };
  const [formData, setFormData] = useState(initialData);
  const { sendEnquire, enquireLoading } = apiStore();
  const [warning, setWarning] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      if (value.length > 10) {
        setWarning("Phone number cannot exceed 10 digits");
      } else {
        setWarning("");
      }
      setFormData((prevData) => ({ ...prevData, [name]: value.slice(0, 10) }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length < 10) {
      setWarning("Phone number should be 10 digits");
      return;
    }

    const currentDate = new Date();
    formData["date"] = `${currentDate.toDateString()}, ${currentDate.toLocaleTimeString()}`;
    
    sendEnquire(formData).then(() => {
      if (brochureUrl) {
        downloadBrochure(brochureUrl);
      }
    });
  };

  const downloadBrochure = (url) => {
    const fileName = url.split("/").pop(); // Extract file name from URL
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName); // Preserve original file name and extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      {modalOpen && (
        <div
          className="fixed inset-0 shadow-md bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 shadow-lg w-5/6 md:w-2/4 lg:w-1/3 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 rounded-full p-1 bg-primary text-gray-600 hover:text-gray-800"
              onClick={() => setModalOpen(false)}
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">GET BROCHURE</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Your Full Name"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  autoComplete="off"
                  maxLength={10}
                  required
                />
                {warning && <p className="text-red-500 text-sm mt-2">{warning}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder="Type Message"
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                ></input>
              </div>
              <button
                type="submit"
                className="w-full btn-secondary rounded-xl shadow mt-5 text-center hover:bg-blue-900"
              >
                {!enquireLoading ? (
                  "Connect"
                ) : (
                  <SkewLoader height="10" width="10" radius={1} color="#fff" aria-label="loading" />
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnquireForBrochure;
