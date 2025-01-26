import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Properties from '../components/Properties'
import Blogs from '../components/Blogs'
import BuilderAssociations from '../components/BuilderAssociations'

const Home = () => {
  return (
    <main>
      <Hero/>
      <Properties />
      <BuilderAssociations />
      <About/>
{/*       <LatestProjects /> */}
      <Blogs />
    </main>
  )
}

export default Home
