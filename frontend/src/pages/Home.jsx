import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Properties from '../components/Properties'
import Blogs from '../components/Blogs'
import bannerImg from '../assets/banner.png'
import BuilderAssociations from '../components/BuilderAssociations'
import LatestProjects from '../components/LatestProjects'
import ReadyToMoveProjects from '../components/ReadyToMoveProjects'

const Home = () => {
  return (
    <main>
      <Hero/>
      <Properties />
      <BuilderAssociations />
{/*       <About/> */}
{/*       <LatestProjects /> */}
{/*       <div className=' py-16 overflow-x-hidden'>
        <img src={bannerImg} alt="" />
      </div> */}
{/*       <ReadyToMoveProjects /> */}
      <Blogs />
    </main>
  )
}

export default Home
