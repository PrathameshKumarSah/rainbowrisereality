import React from 'react'
import AdminHeader from './AdminHeader'
import Sidebar from './Sidebar'
import { Toaster } from 'react-hot-toast';

const Main = ({children}) => {

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"> 
            <AdminHeader title={children[1]} />
            <main className='bg-white m-2 rounded-md p-2 2xl:p-10'>
                {children[0]}
            </main>
        </div>
        <Toaster />
    </div>
  )
}

export default Main