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
import ScrollToTop from "../components/ScrollToTop"
import Project1 from '../pages/Project1'
import Project2 from '../pages/Project2'
import ContactUs from '../pages/ContactUs'

const WebsiteRoutes = () => {
  return (
    <>
        <Header />
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/properties" element={<Listing />}/>
            <Route path="/about-us" element={<AboutPage />}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
            <Route path="/project" element={<Project />}/>
            <Route path="/contactus" element={<ContactUs />}/>
            <Route path="/project1" element={<Project1 />}/>
            <Route path="/project2" element={<Project2 />}/>
        </Routes>
        <Toaster />
        <Footer />
    </>
  );
};

export default WebsiteRoutes;
