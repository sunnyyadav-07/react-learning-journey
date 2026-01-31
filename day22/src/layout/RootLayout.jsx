import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RootLayout = () => {
  return (
    <div className='min-h-screen'>
     <Navbar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout
