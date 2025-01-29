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
// import Residential from '../pages/Residential'
// import Commercial from '../pages/Commercial'
import ContactUs from '../pages/ContactUs'
import Allproject from '../pages/Allproject'
import ContactButtons from "./ContactButtons";
import ProjectPage from '../pages/Projectpage';
import SearchQueries from "../pages/SearchQueries";

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
            {/* <Route path="/residential" element={<Residential />}/> */}
            {/* <Route path="/commercial" element={<Commercial />}/> */}
            <Route path="/project/:id" element={<ProjectPage />}/>
            <Route path="/allproject" element={<Allproject />}/>
            <Route path="/search" element={<SearchQueries />}/>
        </Routes>
        <Toaster />
        <EnquireModalBox modalOpen={modalOpen.val} title={modalOpen.title} setModalOpen={setModalOpen} />
        <ContactButtons />
        <Footer />
    </>
  );
};

export default WebsiteRoutes;
