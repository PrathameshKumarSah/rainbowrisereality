import React, {useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import AdminLogin from "./AdminLogin";
import Logout from "./Logout";
import {ADMIN_BASE_URL} from "../App";
import Enquires from "./Enquires";
import ViewProperty from "./ViewProperty";
import UpdatedProperty from "./UpdatedProperty";
import AddProperty from "./AddProperty";
import RemoveProperty from "./RemoveProperty";
import Main from "./Main";
import Profile from "./Profile";
import OtpVerification from "./OtpVerification";
import CreatePassword from "./CreatePassword";
import {apiStore} from "../store/apiHandler.js"
import { Toaster } from 'react-hot-toast';
import { Loader } from "lucide-react";
import ChangePassword from "./ChangePassword.jsx";


const AdminRoutes = () => {
  const { authUser, checkAuth, isCheckingAuth, otpVerified } = apiStore();

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  // if (isCheckingAuth && !authUser)
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <Loader className="size-10 animate-spin" />
  //     </div>
  //   );

  return (
      <>
        <Routes>
            <Route path="/" element={authUser ? <Main><Dashboard /> Dashboard</Main> : <AdminLogin />} />
            <Route path="/enquires" element={authUser ? <Main><Enquires /> Enquires</Main> : <Navigate to={ADMIN_BASE_URL + "/login"} />} />
            <Route path="/view-properties" element={authUser ? <Main><ViewProperty /> All Properties</Main> : <Navigate to={ADMIN_BASE_URL + "/login"} />} />
            <Route path="/add-property" element={authUser ? <Main><AddProperty /> Add Property</Main> : <Navigate to={ADMIN_BASE_URL + "/login"} />} />
            <Route path="/update-property/:id" element={authUser ? <Main><UpdatedProperty /> Updated Property</Main> : <Navigate to={ADMIN_BASE_URL + "/login"} />} />
            <Route path="/remove-property" element={authUser ? <Main><RemoveProperty /> Remove Property</Main> : <Navigate to={ADMIN_BASE_URL + "/login"} />} />
            <Route path="/profile" element={authUser ? <Main><Profile />Profile</Main> : <Navigate to={ADMIN_BASE_URL + "/login"} />} /> 
            <Route path="/login" element={authUser ? <Navigate to={ADMIN_BASE_URL} /> : <AdminLogin />} />
            <Route path="/otp-verification" element={authUser ? <Navigate to={ADMIN_BASE_URL+"/"} /> : <OtpVerification /> } />
            <Route path="/create-password" element={authUser  ? <Navigate to={ADMIN_BASE_URL+"/"} /> : otpVerified ? <CreatePassword /> : <Navigate to={ADMIN_BASE_URL+"/login"} /> } />
            <Route path="/change-password" element={authUser ? <Main><ChangePassword /> Change Password </Main> : <Navigate to={ADMIN_BASE_URL+"/"} /> } />
            <Route path="/logout" element={authUser ? <Logout /> : <Navigate to={ADMIN_BASE_URL+"/login"} />} />


            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
        <Toaster />
      </>
  );
};

export default AdminRoutes;
