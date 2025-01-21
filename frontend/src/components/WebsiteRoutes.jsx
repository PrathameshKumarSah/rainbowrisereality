import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Listing from "../pages/Listing"
import Footer from "../components/Footer"
import Header from "../components/Header"
import AboutPage from "../pages/AboutPage"
import PrivacyPolicy from "../components/PrivacyPolicy"
import { Toaster } from 'react-hot-toast';
import EnquireModalBox from "./EnquireModalBox";
import { apiStore } from "../store/apiHandler";
import ThankYou from "./ThankYou";
import Property from "../pages/Property";
import ScrollToTop from "../components/ScrollToTop"
import Residential from '../pages/Residential'
import Commercial from '../pages/Commercial'
import ContactUs from '../pages/ContactUs'
import Alpha from '../pages/alphabeta'
import Alpha1 from '../pages/alphabeta1'
import Allproject from '../pages/Allproject'

const WebsiteRoutes = () => {
  const {modalOpen, setModalOpen} = apiStore();
  return (
    <>
        <Header />
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/properties">
              <Route index  element={<Listing />} />
              <Route path=":propertyId"  element={<Property />} />
            </Route>
            <Route path="/about-us" element={<AboutPage />}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
            <Route path="/contactus" element={<ContactUs />}/>
            <Route path="/thankyou" element={<ThankYou />}/>
            <Route path="/residential" element={<Residential />}/>
            <Route path="/commercial" element={<Commercial />}/>
           <Route path="/alpha" element={<Alpha/>}/>
            <Route path="/alpha1" element={<Alpha1/>}/>
          <Route path="/allproject" element={<Allproject />}/>
        </Routes>
        <Toaster />
        <EnquireModalBox modalOpen={modalOpen.val} title={modalOpen.title} setModalOpen={setModalOpen} />
        <Footer />
    </>
  );
};

export default WebsiteRoutes;
