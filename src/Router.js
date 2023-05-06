import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import CoursesHome from "./pages/courses/CoursesHome";
import EventIndex from "./pages/events/EventIndex";
import Home from "./pages/home/Home";
import Index from "./pages/index/Index";
import Terms from "./pages/events/terms/Terms";
import EventConfig from "./pages/events/eventConfig/EventConfig";
import HomeIndex from "./pages/index/HomeIndex";
import Dashboard from "./pages/dashboard/Dashboard";
import Store from "./store/StoreContext";
import About from "./pages/About/About";
import Faq from "./pages/faq/Faq";
import Path from "./pages/path/Path";

function Router() {
  return (
    
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route path="/menu" exact element={<Index />}>
          <Route element={<HomeIndex />}>
            <Route index element={<Navigate to='courses' />} />
            <Route exact path="courses" element={<CoursesHome />} />
            <Route path="events" element={<EventIndex />} />
            <Route path="events/:eventId" element={<EventConfig />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="event-config/:eventId" element={<EventConfig />} />
          </Route>
          <Route exact path="path" element={<Path />} />
        </Route>
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default Router;
