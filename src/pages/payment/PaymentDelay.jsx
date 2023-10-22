import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'

export default function PaymentDelay() {

    const navigate = useNavigate()
   useEffect(()=>{
    const unmount =  setTimeout(()=>{
      navigate("/menu/dashboard")
    }, 1000)

    return ()=>{
      clearTimeout(unmount)
    }
   }, [])

  return (
    <div>
      <Spinner loading={true} />
    </div>
  )
}
