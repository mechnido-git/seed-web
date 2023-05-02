import React, { useState } from 'react'
import SignIn from '../signin/SignIn';
import { Outlet, useOutletContext } from 'react-router-dom';
import SideMenu from '../../components/sideMenu/SideMenu';

function HomeIndex() {
    const [register, setRegister] = useState(false);
    const {event, signIn, setSignIn} = useOutletContext();
  return (
    <>
        <SideMenu event={event} signIn={setSignIn} />
        <Outlet context={{register, setRegister, setSignIn}}  />
      {signIn && (
        <div className="wrapper">
          <div className="blocker" onClick={() => setSignIn(false)}></div>
          <SignIn />
        </div>
      )}
    </>
  )
}

export default HomeIndex