import React, { useEffect, useRef, useState } from "react";
import { ADMIN_BASE_URL } from "../App";
import { apiStore } from "../store/apiHandler";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const {otpVerified, verifyOtp} = apiStore();
  const navigate = useNavigate();
    const [otp, setOtp] = useState(Array(4).fill("")); // Array with 6 empty strings
    const inputRefs = useRef([]); // Array of refs for each input field
  
    const handleKeyDown = (e) => {
      if (
        !/^[0-9]{1}$/.test(e.key) &&
        e.key !== "Backspace" &&
        e.key !== "Delete" &&
        e.key !== "Tab" &&
        !e.metaKey
      ) {
        e.preventDefault();
      }
  
      if (e.key === "Delete" || e.key === "Backspace") {
        const index = inputRefs.current.indexOf(e.target);
        if (index > 0) {
          setOtp((prevOtp) => [
            ...prevOtp.slice(0, index - 1),
            "",
            ...prevOtp.slice(index),
          ]);
          inputRefs.current[index - 1].focus();
        }
      }
    };
  
    const handleInput = (e) => {
      const { target } = e;
      const index = inputRefs.current.indexOf(target);
      if (target.value) {
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index),
          target.value,
          ...prevOtp.slice(index + 1),
        ]);
        if (index < otp.length - 1) {
          inputRefs.current[index + 1].focus();
        }
      }
    };
  
    const handleFocus = (e) => {
      e.target.select();
    };
  
    const handlePaste = (e) => {
      e.preventDefault();
      const text = e.clipboardData.getData("text");
      if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
        return;
      }
      const digits = text.split("");
      setOtp(digits);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(otp);
      console.log(otp.join(''));
      const formData = {
        otp:  otp.join('')
      };
      await verifyOtp(formData);
      if(otpVerified){
        navigate(ADMIN_BASE_URL+'/create-password')
      }
    };

    useEffect(()=> {
      if(otpVerified){
        navigate(ADMIN_BASE_URL+'/create-password')
      }
    }, [otpVerified]);


  return (
    <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div className="flex justify-center">

                <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                    <header className="mb-8">
                        <h1 className="text-2xl font-bold mb-1">OTP Verification</h1>
                        <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your Mail Id.</p>
                    </header>
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center justify-center gap-3">
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              type="text"
                              maxLength={1}
                              value={digit}
                              onChange={handleInput}
                              onKeyDown={handleKeyDown}
                              onFocus={handleFocus}
                              onPaste={handlePaste}
                              ref={(el) => (inputRefs.current[index] = el)}
                              className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                              required
                            />
                          ))}
                        </div>
                        <div className="max-w-[260px] mx-auto mt-4">
                            <button
                              type="submit"
                                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">Verify
                                Account</button>
                        </div>
                    </form>
                    {/* <div className="text-sm text-slate-500 mt-4">Didn't receive code? <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">Resend</a></div> */}
                </div>
                
            </div>
        </div>
    </main>
  )
}

export default OtpVerification