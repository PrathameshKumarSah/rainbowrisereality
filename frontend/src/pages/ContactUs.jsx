import React, { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { apiStore } from "../store/apiHandler";
import { ClipLoader, SkewLoader } from "react-spinners";
import userIcon from '../assets/user.svg'

const ContactUs = () => {
  const {sendContactMsg, contactStatus, contactLoading} = apiStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {

      // here function call to submit
      const currentDate = new Date();
      formData['date'] = `${currentDate.toDateString()}, ${currentDate.toLocaleTimeString()}`;
      setFormData(formData);
      console.log(formData);
      sendContactMsg(formData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(()=>{
      if(contactStatus){
        setSubmitted(true);
        setErrors({});
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    }, [contactStatus]);

  return (
    <div className="min-h-screen flex flex-col">


      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-60"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl">We're here to help you find your dream home</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {!contactLoading ? 
                'Send Message' :
                  <ClipLoader 
                    height="20"
                    width="20"
                    radius={1}
                    color="#fff"
                    aria-label='puff-loading'
                />
                }   
              </button>           
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaPhone className="text-blue-600 text-xl mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+91-8058517274, +91-8077148435</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-600 text-xl mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info.rainbowriserealty@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 text-xl mr-4" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">123 Real Estate Ave, City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center bg-white rounded-lg shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.723655937583!2d77.5119842465003!3d28.47295268432532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea853d1c9a8f%3A0x1279ef07f589fa5!2sGodrej%20Golf%20Links!5e0!3m2!1sen!2sin!4v1702920000000!5m2!1sen!2sin"
            alt="Location Overview Map"
            className="w-full h-64 rounded-lg shadow-lg object-cover"
          />
        </div>
          </div>
        </div>
      </main>
         <div class="fixed bottom-4 right-4">
           <button className="flexCenter gap-x-6 medium-10 rounded-full pr-3">
                             <a href="https://wa.me/+918058517274" target="_blank"><img src={userIcon} alt="" height={40} width={40} /></a>
                              <span className='hidden'>Whatsapp</span>
                          </button>
      </div>

    </div>
  );
};

export default ContactUs;
