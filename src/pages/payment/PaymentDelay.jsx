import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'

export default function PaymentDelay() {

    const navigate = useNavigate()
   useEffect(()=>{
    const unmount =  setTimeout(()=>{
      navigate("/menu/dashboard")
    }, 3000)

    return ()=>{
      clearTimeout(unmount)
    }
   }, [])
   console.log('hi');

  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <p style={{textAlign: 'center', paddingTop: '2rem'}}>Updating courses....</p>
      <Spinner loading={true} />
    </div>
  )
}
