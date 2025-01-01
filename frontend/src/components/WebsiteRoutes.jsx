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
import EnquireModalBox from "./EnquireModalBox";
import { apiStore } from "../store/apiHandler";
import ThankYou from "./ThankYou";
import Property from "../pages/Property";

const WebsiteRoutes = () => {
  const {modalOpen, setModalOpen} = apiStore();
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/properties">
              <Route index  element={<Listing />} />
              <Route path=":propertyId"  element={<Property />} />
            </Route>
            <Route path="/about-us" element={<AboutPage />}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
            <Route path="/project" element={<Project />}/>
            <Route path="/thankyou" element={<ThankYou />}/>
        </Routes>
        <Toaster />
        <EnquireModalBox modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <Footer />
    </>
  );
};

export default WebsiteRoutes;
