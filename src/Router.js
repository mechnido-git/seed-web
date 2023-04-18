import React from 'react'
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import CoursesHome from './pages/courses/CoursesHome'
import EventIndex from './pages/events/EventIndex'
import Home from './pages/home/Home'
import Index from './pages/index/Index'
import Dashboard from './pages/events/dashboard/Dashboard'



function Router() {
  return (
    <BrowserRouter basename='/' >
        <Routes>
        <Route exact path='/' element={<Navigate to='/home' />} />
        <Route exact path='/home' element={<Home />} />
            <Route path='/menu' exact element={<Index />} >
              <Route exact index element={<Navigate to='courses' />} />
              <Route exact path='courses' element={<CoursesHome />} />
              <Route path='events' element={<EventIndex />} />
              <Route path='dashboard' element={<Dashboard />} />
            </Route>
        </Routes>
    </BrowserRouter >
  )
}

export default Router