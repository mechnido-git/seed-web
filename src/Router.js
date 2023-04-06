import React from 'react'
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import CoursesHome from './pages/courses/CoursesHome'
import EventIndex from './pages/events/EventIndex'
import Home from './pages/home/Home'
import Index from './pages/index/Index'


function Router() {
  return (
    <BrowserRouter  >
        <Routes>
            <Route path='/' exact element={<Index />} >
              <Route exact index element={<Navigate to='home' />} /> {/* default route -> home */}
              <Route exact path='home' element={<Home />} />
              <Route exact path='courses' element={<CoursesHome />} />
              <Route path='events' element={<EventIndex />} />
              <Route path='*' element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter >
  )
}

export default Router