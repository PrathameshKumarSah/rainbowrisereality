import React from 'react'
import ProfileDropDown from './ProfileDropDown'

const AdminHeader = ({title}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-md z-10">
        <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
           <div className='text-bold text-lg lg:text-xl'>{title}</div>
           <ProfileDropDown />
        </div>
    </header>
  )
}

export default AdminHeader
