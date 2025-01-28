import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Properties from '../components/Properties'
import LatestProjects from '../components/LatestProjects'
// import Blogs from '../components/Blogs'
import BuilderAssociations from '../components/BuilderAssociations'
import { apiStore } from '../store/apiHandler'

const Home = () => {
  const {setModalOpen} = apiStore();
  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true); 
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main>
      <Hero/>
      <Properties />
      <BuilderAssociations />
      <About/>
      <LatestProjects />
{/*       <Blogs /> */}
    </main>
  )
}

export default Home
