import React from 'react'
import Team1 from '../assets/team1.jpg'
import Team2 from '../assets/team2.jpg'
import Team3 from '../assets/team3.jpg'


const team = () => {
  return (
    <div className="p-4">
  <div className="text-center mb-16">
    <p className="mt-4 text-lg font-bold leading-7 text-black font-regular">
      THE TEAM
    </p>
    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
      Meet Our <span className="text-indigo-600">Team</span>
    </h3>
  </div>
  <div className="sm:grid grid-cols-2 md:grid-cols-3 col-gap-10 mx-auto">
    <div className="text-center">
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 max-w-sm mx-auto">
  <img
    src={Team1}
    alt="University of Southern California"
    className="rounded object-cover w-full sm:h-80 h-80"
  />
  {/* <h3 className="z-10 mt-3 text-3xl font-bold text-black">Paris</h3> */}
</article>
    </div>
    <div className="text-center">
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8  max-w-sm mx-auto">
  <img
    src={Team2}
    alt="University of Southern California"
    className="rounded object-cover w-full sm:h-80 h-80"
    />
    {/* <h3 className="z-10 mt-3 text-3xl font-bold text-black">Paris</h3> */}
</article>
    </div>
    <div className="text-center">
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8  max-w-sm mx-auto">
  <img
    src={Team3}
    alt="University of Southern California"
    className="rounded object-cover w-full sm:h-80 h-80"
    />
    {/* <h3 className="z-10 mt-3 text-3xl font-bold text-black">Paris</h3> */}
</article>
    </div>
  </div>
</div>


  )
}

export default team
