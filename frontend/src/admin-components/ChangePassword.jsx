import React, { useState } from 'react';
import { apiStore } from '../store/apiHandler';

function ChangePassword() {
  const {changePassword} = apiStore();
  const [pass, setPass] = useState({
    oldPass: '',
    newPass: '',
    confirmPass: '',
  });
  const [msg, setMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPass({ ...pass, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle login logic here
    // console.log(pass.newPass, pass.confirmPass);
    if(pass.newPass != pass.confirmPass){
        setMsg('New and Confirm Pasword are not same.');
    }
    await changePassword(pass);
    // console.log('Change password');
    setMsg('');
  };

  return (
    <div className="flex justify-center items-center py-8 px-2 md:px-0 bg-slate-50">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-2xl font-bold mb-1 text-center">Change Password</h5>
          <p className='text-xs mt-2 text-rose-600 text-center'>{msg}</p>
          <div>
              <label htmlFor="oldPass" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old password</label>
              <input type="password" name="oldPass" id="oldPass" placeholder="••••••••" className="block w-full p-2.5 text-sm text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              onChange={handleInputChange}
              required />
          </div>
          <div>
              <label htmlFor="newPass" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
              <input type="password" name="newPass" id="newPass" placeholder="••••••••" className="block w-full p-2.5 text-sm text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              onChange={handleInputChange}
              required />
          </div>
          <div>
              <label htmlFor="confirmPass" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
              <input type="password" name="confirmPass" id="confirmPass" placeholder="••••••••" className="block w-full p-2.5 text-sm text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              onChange={handleInputChange}
              required />
          </div>
          {/* <div className="flex items-start">
              <div className="flex items-start">
                  <div className="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-100 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 outline-none dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required />
                  </div>
                  <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
              </div>
              <Link to={ADMIN_BASE_URL+"/forget-password"} className="ms-auto text-sm text-indigo-700 hover:underline dark:text-indigo-500">Lost Password?</Link>
          </div> */}
          <button type={"submit"} className="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Password</button>
      </form>
      </div>
    </div>

  );
}

export default ChangePassword;