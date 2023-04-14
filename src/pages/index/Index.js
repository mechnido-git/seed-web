import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../components/sideMenu/Navbar'
import SideMenu from '../../components/sideMenu/SideMenu'
import './index.css'
import RegisterForm from '../../components/RegisterForm'

function Index() {
  const [prev, setPrev] = useState(null);
  const [event, setEvent] = useState(false);
  const [register, setRegister] = useState(false);


  const location = useLocation();
  const loc = location.pathname.split("/");

  function click(e) {
    e.stopPropagation();
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.classList.remove("clicked");
    });
    const index = e.target.closest("[data-index]").dataset.index;
    console.log(index);
    if (index == 0 || index == 2) {
      console.log(links[0], "k");
      links[0].classList.add("clicked");
      links[2].classList.add("clicked");
      setEvent(false);
    } else {
      links[1].classList.add("clicked");
      links[3].classList.add("clicked");
      setEvent(true);
    }
  }

  useEffect(() => {
    
    let elem = -1;
    switch (loc[loc.length - 1]) {
      case "courses":
        elem = 0;
        break;
      case "events":
        setEvent(true);
        elem = 1;
        break;
    }
    console.log(elem);
    document.querySelectorAll(".link").forEach((link, index) => {
      if (prev === null) {
        if (elem === 0) {
          if (index === 0 || index === 2) link.classList.add("clicked");
          setPrev(link);
        } else if(elem === 1) {
          if (index === 1 || index === 3) {
            link.classList.add("clicked");
            setPrev(link);
          }
        }
      }
      link.addEventListener("click", click);
    });
    return () => {
      document.querySelectorAll(".link").forEach((link) => {
        link.removeEventListener("click", click);
      });
    };
    
  }, []);
  
  return (
    <div className='index' id='index'>
      <SideMenu event={event}  />
      {/* Outlet will render the inner component of the route */}
      {/* default route -> home */}
      <Navbar />
      <Outlet context={[register, setRegister]}  />
    </div>
  )
}

export default Index