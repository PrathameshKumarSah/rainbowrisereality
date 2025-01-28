import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Properties from '../components/Properties'
import LatestProjects from '../components/LatestProjects'
// import Blogs from '../components/Blogs'
import BuilderAssociations from '../components/BuilderAssociations'
import { apiStore } from '../store/apiHandler'
import HomeEnquiryBox from '../components/HomeEnquiryBox'

const Home = () => {
  const {setModalOpen} = apiStore();
  
  const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
  useEffect(() => {
    let timer;

    const handleModalFlow = () => {
      // Open the modal only if the view is mobile
      if (isMobile()) {
        setModalOpen(true);

        // Repeatedly open the modal every 30 seconds after it closes
        timer = setInterval(() => {
          setModalOpen(true);
        }, 30000);
      }
    };
    // Initial modal show after 2 seconds
    const initialTimer = setTimeout(handleModalFlow, 2000);
    // Cleanup timer on component unmount
    return () => {
      clearTimeout(initialTimer);
      clearInterval(timer);
    };
  }, []);
  
  return (
    <main>
      <Hero/>
      <Properties />
      <BuilderAssociations />
      <About/>
      <LatestProjects />
{/*       <Blogs /> */}
      <HomeEnquiryBox />
    </main>
  )
}

export default Home
