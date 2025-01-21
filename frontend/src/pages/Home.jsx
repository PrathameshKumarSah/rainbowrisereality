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
import userIcon from '../assets/user.svg'

const Home = () => {
  return (
    <main>
      <Hero/>
      <BuilderAssociations />
      <Properties />
{/*       <About/> */}
{/*       <LatestProjects /> */}
      // <Slider />
{/*       <div className=' py-16 overflow-x-hidden'>
        <img src={bannerImg} alt="" />
      </div> */}
{/*       <ReadyToMoveProjects /> */}
      <Blogs />
         <div class="fixed bottom-4 right-4">
           <button className="flexCenter gap-x-6 medium-10 rounded-full pr-3">
                             <a href="https://wa.me/8058517274" target="_blank"><img src={userIcon} alt="" height={40} width={40} /></a>
                              <span className='hidden'>Whatsapp</span>
           </button>
      </div>
    </main>
  )
}

export default Home
