import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ADMIN_BASE_URL, SERVER_URL } from '../App';
import {apiStore} from "../store/apiHandler.js"
import { Loader, Loader2, LogIn } from 'lucide-react';

function AdminLogin() {
  const {isLoggingIn, login, checkAuth, sendOtp} = apiStore();
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    await login(formData);
    checkAuth()
  };

  const handleLostPass = async () => {
    setIsDisabled(true);
    await sendOtp();
    navigate(ADMIN_BASE_URL+"/otp-verification");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-50">
      {isDisabled &&
        <Loader className="h-10  w-10 animate-spin" /> 
      }
      <div className={!isDisabled ? "w-full max-w-sm p-4 mx-8 md:mx-auto px-4 md:px-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700": "hidden"}>
      <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-2xl font-bold mb-1 text-center">Login in</h5>
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email" className="block w-full p-2.5 text-sm text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              placeholder="your@mail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
               required />
          </div>
          <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="block w-full p-2.5 text-sm text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required />
          </div>
          <div className="flex items-start">
              <div className="flex items-start">
                  <div className="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 outline-none dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                       />
                  </div>
                  <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>
              <button onClick={handleLostPass} className="ms-auto text-sm cursor-pointer text-indigo-700 hover:underline dark:text-indigo-500" disabled={isDisabled}>Lost Password?</button>
          </div>
          <button type={"submit"} className="w-full flex items-center justify-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader className="h-5 w-5 animate-spin" /> &nbsp;
                  Loading...
                </>
              ) : (
                <>
                  <LogIn size={20} /> &nbsp;
                  Sign in
                </>
              )}
          </button>
      </form>
      </div>
    </div>

  );
}

export default AdminLogin;