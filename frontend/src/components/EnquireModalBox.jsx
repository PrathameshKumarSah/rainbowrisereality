import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { apiStore } from "../store/apiHandler";
import {SkewLoader} from "react-spinners"
import { useNavigate } from "react-router-dom";

const EnquireModalBox = ({modalOpen}) => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submittedData, setSubmittedData] = useState(null);
  const {sendEnquire, enquireStatus, enquireLoading, setModalOpen} = apiStore();
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [warning, setWarning] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      if (value.length > 10) {
        setWarning('Phone number cannot exceed 10 digits');
      } else {
        setWarning('');
      }
      // setMobileNumber(value.slice(0, 10)); // Limit to 10 digits
      setFormData((prevData) => ({ ...prevData, [name]: value.slice(0, 10) }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // setSubmittedData(formData);
    sendEnquire(formData);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(()=>{
    if(enquireStatus){
      closeModal();
      navigate('/thankyou');
    }
  }, [enquireStatus]);

  return (
    <div className="relative">
      {/* Modal Overlay */}
      {modalOpen && (
        <div
          className="fixed inset-0 shadow-md bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-lg p-6 shadow-lg w-2/3 lg:w-1/3 relative"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 rounded-full p-1 bg-primary text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-4">CONNECT WITH US</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
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
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  // value={mobileNumber}
                  // onChange={handleInputChange}
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  autoComplete="off"
                  maxLength={10}
                  required
                />
                {warning && (
                  <p className="text-red-500 text-sm mt-2">{warning}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
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
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                ></input>
              </div>
              <button
                type="submit"
                className="w-full btn-secondary rounded-xl shadow mt-5 text-center hover:bg-blue-900"
              >{!enquireLoading ? 
                'Connect' :
                <SkewLoader 
                  height="10"
                  width="10"
                  radius={1}
                  color="#fff"
                  aria-label='puff-loading'
                  />
              }
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnquireModalBox
