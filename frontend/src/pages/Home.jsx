import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Properties from '../components/Properties'
import Blogs from '../components/Blogs'
import bannerImg from '../assets/banner.png'
import BuilderAssociations from '../components/BuilderAssociations'
import LatestProjects from '../components/LatestProjects'
import Slider from '../constant/Slider'
import ReadyToMoveProjects from '../components/ReadyToMoveProjects'

const Home = () => {
  return (
    <main>
      <Hero/>
      <BuilderAssociations />
      <About/>
      <Properties />
      <LatestProjects />
      <Slider />
      <Blogs />
      <div className='max-padd-container py-16 overflow-x-hidden'>
        <img src={bannerImg} alt="" />
      </div>
      <ReadyToMoveProjects />
    </main>
  )
}

export default Home