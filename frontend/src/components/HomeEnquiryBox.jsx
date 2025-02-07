import React, { useEffect, useState } from "react";
import { apiStore } from "../store/apiHandler";
import { SkewLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const HomeEnquiryBox = ({ modalOpen, title }) => {
  const initialData = { title: "", name: "", phone: "", message: "", date: "" };
  const [formData, setFormData] = useState(initialData);
  const { sendEnquire, enquireStatus, enquireLoading } = apiStore();
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phone.length < 10) {
      setWarning("Phone number should be 10 digits");
      return;
    }
    const currentDate = new Date();
    formData["date"] = `${currentDate.toDateString()}, ${currentDate.toLocaleTimeString()}`;
    setFormData(formData);
    if (title) {
      formData["title"] = title;
      setFormData(formData);
    }
    sendEnquire(formData);
  };

  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (enquireStatus) {
      closeModal();
      setFormData(initialData);
      navigate("/thankyou");
    }
  }, [enquireStatus]);

  return (
    <div className="relative">
      {/* Modal Overlay */}
      <div className="fixed top-64 right-4 transform -translate-y-1/2 z-20 shadow-md hidden md:flex items-center">
        {/* Modal Content */}
        <div
          className="bg-white rounded p-4 shadow-lg w-full sm:w-3/4 md:w-full lg:w-full h-auto"
        >
          <h2 className="text-lg font-semibold mb-2 text-blue-950">Lets Get Your Dream Home</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2 text-sm"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Your Full Name"
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2 text-sm"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                className="w-full px-2 py-1 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                autoComplete="off"
                maxLength={10}
                required
              />
              {warning && (
                <p className="text-red-500 text-sm mt-2">{warning}</p>
              )}
            </div>
            <div className="mb-2">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2 text-sm"
              >
                Message
              </label>
              <input
                type="text"
                id="message"
                name="message"
                value={formData.message}
                placeholder="Type Message"
                onChange={handleChange}
                className="w-full px-2 py-1 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              ></input>
            </div>
            <button
              type="submit"
              className="w-full btn-secondary rounded-xl shadow mt-5 text-center hover:bg-blue-900"
            >
              {!enquireLoading ? (
                "Connect"
              ) : (
                <SkewLoader
                  height="10"
                  width="10"
                  radius={1}
                  color="#fff"
                  aria-label="puff-loading"
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeEnquiryBox;
