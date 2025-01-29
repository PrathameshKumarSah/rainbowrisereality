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
      {/* Social Media Sidebar */}
<div className="fixed left-4 bottom-0.5 transform -translate-y-1/2 flex flex-col gap-1 bg-black bg-transparent ">
  {[
    {
      name: "instagram",
      svg: (
        <button class="group transition-all duration-500 hover:-translate-y-2">
        <svg
                    height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                    <linearGradient id="instagram_svg__a" gradientTransform="matrix(0 -1.982 -1.844 0 -2.292 23.869)"
                        gradientUnits="userSpaceOnUse" x1="0.947" x2="11.036" y1="-2.332" y2="-13.176">
                        <stop offset="0" stop-color="#fd5"></stop>
                        <stop offset="0.5" stop-color="#ff543e"></stop>
                        <stop offset="1" stop-color="#c837ab"></stop>
                    </linearGradient>
                    <path
                        d="M12.004.5c-6.055 0-7.213-.158-8.727.597C1.883 1.791.882 3.104.628 4.863.55 5.4.528 5.51.523 8.258c-.02 10.161-.154 10.92.576 12.434a4.838 4.838 0 003.134 2.566c1.093.282 1.82.242 7.747.242 4.968 0 6.513.089 7.802-.244a4.811 4.811 0 003.134-2.571c.736-1.522.563-2.598.563-8.692 0-5.836.197-7.135-.575-8.709a4.567 4.567 0 00-.982-1.349C20.194.281 18.136.505 15.741.5h-3.737z"
                        fill="url(#instagram_svg__a)"></path>
                    <path
                        d="M12 17.537c-3.053 0-5.537-2.484-5.537-5.537S8.947 6.463 12 6.463 17.537 8.947 17.537 12 15.053 17.537 12 17.537zM18.359 6.514a.874.874 0 11.002-1.748.874.874 0 01-.002 1.748z"
                        fill="#fff"></path>
                    <circle cx="12" cy="12" fill="none" r="3.5"></circle>
                    <path
                        d="M4.75 24h14.5A4.756 4.756 0 0024 19.25V4.75A4.756 4.756 0 0019.25 0H4.75A4.756 4.756 0 000 4.75v14.5A4.756 4.756 0 004.75 24zM1.5 4.75A3.254 3.254 0 014.75 1.5h14.5a3.254 3.254 0 013.25 3.25v14.5a3.254 3.254 0 01-3.25 3.25H4.75a3.254 3.254 0 01-3.25-3.25z">
                    </path>
                    <path
                        d="M12 18.13c3.38 0 6.13-2.75 6.13-6.13S15.38 5.87 12 5.87 5.87 8.62 5.87 12s2.75 6.13 6.13 6.13zm0-10.76c2.553 0 4.63 2.077 4.63 4.63s-2.077 4.63-4.63 4.63S7.37 14.553 7.37 12 9.447 7.37 12 7.37zM18.358 7.362c.986 0 1.729-.74 1.729-1.721 0-1.023-.782-1.721-1.728-1.721-.986 0-1.729.74-1.729 1.721 0 1.021.778 1.721 1.728 1.721zm.177-1.886c.316.279-.405.618-.405.166 0-.27.367-.2.405-.166z">
                    </path>
                </svg>
                </button>
      ),
    },
    {
      name: "linkedin",
      svg: (
        <button class="group transition-all duration-500 hover:-translate-y-2">
        <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
                    <path
                        d="M469.779 503.983H42.221c-18.891 0-34.205-15.314-34.205-34.205V42.221c0-18.891 15.314-34.205 34.205-34.205h427.557c18.891 0 34.205 15.314 34.205 34.205v427.557c0 18.891-15.314 34.205-34.204 34.205z"
                        fill="#3cafe6"></path>
                    <path
                        d="M42.221 452.676V8.017c-18.891 0-34.205 15.314-34.205 34.205v427.557c0 18.891 15.314 34.205 34.205 34.205h427.557c18.891 0 34.205-15.314 34.205-34.205H59.324c-9.446 0-17.103-7.657-17.103-17.103z"
                        fill="#1c9ad6"></path>
                    <path fill="#fff" d="M84.977 196.142h68.409v230.881H84.977z"></path>
                    <path fill="#e5e5e5" d="M84.977 196.142h25.653v230.881H84.977z"></path>
                    <path
                        d="M350.063 196.142c-17.102 0-58.076 2.494-76.96 42.756v-42.756h-68.409v230.881h68.409V315.858c0-25.653 21.644-42.756 42.756-42.756 23.613 0 42.756 17.102 42.756 42.756V427.023h68.409V264.551c-.001-37.781-38.837-68.409-76.961-68.409z"
                        fill="#fff"></path>
                    <g fill="#e5e5e5">
                        <path
                            d="M204.693 196.142h25.653v230.881h-25.653zM384.267 315.858c0-25.653-19.143-42.756-42.756-42.756-4.154 0-8.326.671-12.351 1.93 17.098 5.139 29.453 20.219 29.453 40.825V427.022h25.653V315.858z">
                        </path>
                    </g>
                    <circle cx="119.182" cy="119.182" r="34.205" fill="#fff"></circle>
                    <path
                        d="M136.284 136.284c-18.891 0-34.205-15.314-34.205-34.205a34.07 34.07 0 013.03-14.072c-11.869 5.367-20.133 17.301-20.133 31.174 0 18.891 15.314 34.205 34.205 34.205 13.873 0 25.807-8.264 31.174-20.133a34.046 34.046 0 01-14.071 3.031z"
                        fill="#e5e5e5"></path>
                    <path
                        d="M503.983 92.994A8.017 8.017 0 00512 84.977V42.221C512 18.941 493.059 0 469.779 0H42.221C18.941 0 0 18.941 0 42.221v427.557C0 493.059 18.941 512 42.221 512h427.557c23.28 0 42.221-18.941 42.221-42.221V119.182c0-4.427-3.588-8.017-8.017-8.017s-8.017 3.589-8.017 8.017v350.597c0 14.44-11.747 26.188-26.188 26.188H42.221c-14.44 0-26.188-11.748-26.188-26.188V42.221c0-14.44 11.748-26.188 26.188-26.188h427.557c14.441 0 26.188 11.748 26.188 26.188v42.756a8.017 8.017 0 008.017 8.017z">
                    </path>
                    <path
                        d="M153.386 238.898a8.017 8.017 0 008.017-8.017v-34.739a8.017 8.017 0 00-8.017-8.017H84.977a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V266.154a8.017 8.017 0 00-16.034 0v152.852H92.994V204.159h52.376v26.722a8.017 8.017 0 008.016 8.017zM358.614 435.04h68.409a8.017 8.017 0 008.017-8.017V264.551c0-20.236-9.586-39.579-26.99-54.465-16.319-13.955-37.454-21.96-57.987-21.96-33.891 0-55.359 11.268-68.944 25.151v-17.134a8.017 8.017 0 00-8.017-8.017h-68.409a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V315.858c0-21.457 18.032-34.739 34.739-34.739 20.129 0 34.739 14.61 34.739 34.739v111.165a8.017 8.017 0 008.017 8.017zm-42.756-169.954c-24.418 0-50.772 19.412-50.772 50.772v103.148H212.71V204.159h52.376v34.739c0 3.656 2.573 6.926 6.125 7.789 3.66.888 7.55-.973 9.15-4.385 11.871-25.31 35.323-38.143 69.703-38.143 32.545 0 68.944 25.828 68.944 60.392v154.455H366.63V315.858c0-28.946-21.827-50.772-50.772-50.772zM119.182 76.96c-23.281 0-42.221 18.941-42.221 42.221s18.941 42.221 42.221 42.221 42.221-18.941 42.221-42.221-18.941-42.221-42.221-42.221zm0 68.41c-14.44 0-26.188-11.748-26.188-26.188s11.748-26.188 26.188-26.188 26.188 11.748 26.188 26.188-11.749 26.188-26.188 26.188z">
                    </path>
                </svg>
                </button>
      ),
    },
    {
      name: "facebook",
      svg: (
        <button class="group transition-all duration-500 hover:-translate-y-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 93 92" fill="none">
        <rect x="1.13867" width="91.5618" height="91.5618" rx="15" fill="#337FFF"/>
        <path d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z" fill="white"/>
        </svg>
        </button>
      ),
    },
  ].map((icon, index) => (
    <div
      key={index}
      className=" rounded-full p-2  text-white"
    >
      {icon.svg}
    </div>
  ))}
</div>
    </main>
  )
}

export default Home
