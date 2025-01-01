import { CircleCheck, MoveLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center h-screen md:px-100 px-4">
        <div>
            <div className="flex flex-col items-center space-y-2">
                <CircleCheck className="text-green-600 w-28 h-28" /> 
                <h1 className="text-4xl font-bold">Thank You !</h1>
                <p>Thank you for providing your information. Our executive will connect with you shortly.</p>
                <Link to="/" className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
                    <MoveLeft className='w-3 h-3 mr-2' /><span className="text-sm font-medium">Home</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ThankYou