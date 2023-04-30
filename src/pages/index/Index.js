import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../components/sideMenu/Navbar'
import SideMenu from '../../components/sideMenu/SideMenu'
import './index.css'
import RegisterForm from '../../components/RegisterForm'
import SignIn from '../signin/SignIn'

function Index() {
  const [signIn, setSignIn] = useState(false);
  
  return (
    <div className='index' id='index'>
      <Navbar signIn={setSignIn} />
      <Outlet context={{ signIn, setSignIn}}  />
      {/* Outlet will render the inner component of the route */}
      {/* default route -> home */}
      {signIn && (
        <div className="wrapper">
          <div className="blocker" onClick={() => setSignIn(false)}></div>
          <SignIn />
        </div>
      )}
    </div>
  )
}

export default Index