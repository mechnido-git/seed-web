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
import Path from "./pages/path/Path";
import CourseDetails from "./pages/courses/CourseDetails";
import Enroll from "./pages/payment/Enroll";
import InfoForm from "./pages/myAccount/InfoForm";
import Sower from "./pages/sower/Sower";

function Router() {
  return (
    
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/sower" element={<Sower />} />
        <Route path="/menu" exact element={<Index />}>
          <Route element={<HomeIndex />}>
            <Route index element={<Navigate to='courses' />} />
            <Route exaact path="dashboard" element={<Dashboard />} />
            <Route exact path="courses" element={<CoursesHome />} />
            <Route exact path="courses/details/:index" element={<CourseDetails />} />
            <Route exact path="courses/enroll/:index" element={<Enroll />} />
            <Route path="events" element={<EventIndex />} />
            <Route path="events/:eventId" element={<EventConfig />} />
            <Route path="event-config/:eventId" element={<EventConfig />} />
            <Route path="account" element={<InfoForm />} />
          </Route>
        </Route>
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default Router;
