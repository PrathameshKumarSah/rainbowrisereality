import React from 'react'
import Alpha from '../assets/alpha.png'
import Alpha1 from '../assets/alpha1.png'
import Alpha2 from '../assets/alpha2.png'

const alphabeta = () => {
  return (
    <div className="max-padd-container mt-20">
    <div className="flex items-center justify-center ">
    <img
      src={Alpha}
      alt="Full Screen"
      className="h-200 w-200 object-cover"
    />
  </div>
  <div className=" flex items-center justify-center ">
    <img
      src={Alpha1}
      alt="Full Screen"
      className="h-200 w-200 object-cover"
    />
  </div>
  <div className=" flex items-center justify-center ">
    <img
      src={Alpha2}
      alt="Full Screen"
      className="h-200 w-200 object-cover"
    />
  </div>
  </div>
  )
}

export default alphabeta
