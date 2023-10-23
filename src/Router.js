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
import HomeIndex from "./pages/index/HomeIndex";
import Dashboard from "./pages/dashboard/Dashboard";
import Store from "./store/StoreContext";
import About from "./pages/About/About";
import CourseDetails from "./pages/courses/CourseDetails";
import Enroll from "./pages/payment/Enroll";
import InfoForm from "./pages/myAccount/InfoForm";
import Sower from "./pages/sower/Sower";
import EventDetails from "./pages/events/EventDetails";
import Faq from "./pages/faq/Faq";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Terms from "./pages/terms/Terms";
import RefundPolicy from "./pages/refundPolicy/RefundPolicy";
import PaymentDelay from "./pages/payment/PaymentDelay";


function Router() {
  return (

    <HashRouter >
      <Routes>

        <Route exact path="/" element={<Home />} />   {/* WEBISTE route*/}
        <Route exact path="/about" element={<About />} /> {/* ABOUT route */}
        <Route exact path="/sower" element={<Sower />} /> {/* SOWER route */}
        <Route exact path="/faq" element={<Faq />} /> {/* FAQ route */}
        <Route exaact path="/processing" element={<PaymentDelay />} />
        <Route path="/menu" exact element={<Index />}> {/* NESTED ROUTE TO WEB APPLICATION */}
          <Route element={<HomeIndex />}> {/* NESTED ROUTE */}
            <Route index element={<Navigate to='dashboard' />} /> {/* DEFAULT ROUTE -> /menu/dashboard */}
            <Route exaact path="dashboard" element={<Dashboard />} /> {/* DASHBOARD */}
            <Route exact path="courses" element={<CoursesHome />} /> {/* COURSES HOME */}
            <Route path="courses/details/:index" element={<CourseDetails />} /> {/* DEATAILS OF SINGLE COURSE */}
            <Route path="events" element={<EventIndex />} /> {/* EVENTS HOME */}
            <Route exact path="events/details/:index" element={<EventDetails />} /> {/* DEATAILS OF SINGLE EVENT */}
            <Route path="account" element={<InfoForm />} /> {/* USER INFO SUBMISSION */}
          </Route>
        </Route>
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </HashRouter>

  );
}

export default Router;
