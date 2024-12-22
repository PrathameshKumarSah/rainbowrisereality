import React from 'react'

const InquiryBox = () => {
  return (
    <div >
    <div >
      {/* Inquiry Box */}
      <div className=" max-padd-container hidden lg:block absolute right-60 top-100 w-90 mt-20  bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl justify-items-center font-bold mb-4 text-[#000000]">Enquire </h2>
        <form>
          <div className="mb-5">
            <label
              htmlFor="name"
              className=" text-sm font-bold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="num"
              id="phone"
              name="phone"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0A3981] text-white py-2 rounded-md hover:bg-[#0A3981] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default InquiryBox