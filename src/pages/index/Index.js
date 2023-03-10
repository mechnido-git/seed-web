import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/sideMenu/Navbar'
import SideMenu from '../../components/sideMenu/SideMenu'

function Index() {
  
  return (
    <div className='index' id='index'>
      <SideMenu />
      {/* Outlet will render the inner component of the route */}
      {/* default route -> home */}
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Index