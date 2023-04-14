import React, { useEffect } from 'react'
import './home.css'

function Home() {
  useEffect(()=>{
    document.querySelector('.side-menu').classList.add('disable');
    document.getElementById('toggle').classList.add('disable');
    return ()=>{
      document.querySelector('.side-menu').classList.remove('disable')
      document.getElementById('toggle').classList.remove('disable')
    }
  }, [])
  return (
    <div className='home'><div><h2>Home This Page is under construction :)</h2></div></div>
  )
}

export default Home