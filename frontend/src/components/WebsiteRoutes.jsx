import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Listing from "../pages/Listing"
import Footer from "../components/Footer"
import Header from "../components/Header"
import AboutPage from "../pages/AboutPage"
import PrivacyPolicy from "../components/PrivacyPolicy"
import { Toaster } from 'react-hot-toast';
import Project from "../pages/Project";

const WebsiteRoutes = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/properties" element={<Listing />}/>
            <Route path="/about-us" element={<AboutPage />}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
            <Route path="/project" element={<Project />}/>
        </Routes>
        <Toaster />
        <Footer />
    </>
  );
};

export default WebsiteRoutes;
