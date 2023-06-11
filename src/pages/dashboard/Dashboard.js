import { onAuthStateChanged } from "firebase/auth";
import "./dashboard.css";
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase/config";
import Spinner from "../../components/Spinner";
import logo from "../../images/man.png";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import slide from "../../images/slide.jpg";
import { trending } from "../courses/CoursesHome";
import Path from "../path/Path";
import { StoreContext } from "../../store/StoreContext";
import { HashLink } from "react-router-hash-link";

const EnrolledCourse = ({ dragger }) => {
  const [drag, setDrag] = useState(false)
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const fetch = async (user) => {
    const q = query(
      collection(db, "courses"),
      where("enrolled_arr", "array-contains", user.uid)
    );
    const snaps = await getDocs(q)
    const lists = snaps.docs.map((list) => {
      return {
        ...list.data(),
        id: list.id
      }
    })
    setEnrolledCourses(lists)
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      fetch(user)
    })
  }, [])

  return <div onDragStart={dragger} draggable={drag} className="section">
    <h4 onMouseDownCapture={() => setDrag(true)} onMouseLeave={() => setDrag(false)}>Enrolled Courses</h4>
    <div className="enrolled-courses">
      {enrolledCourses.length !== 0 && enrolledCourses.map((item) => {
        return <div className="card">
          <h4>{item.name}</h4>

        </div>
      })}
    </div>
  </div>
}

const CourseCatalog = () => {
  const [drag, setDrag] = useState(false)

  const { courses } = useContext(StoreContext)

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 100) : text}
        <span style={{ color: 'blue', whiteSpace: 'nowrap' }} onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  return <div draggable={drag} className="section">
    <h4 onMouseDownCapture={() => setDrag(true)} onMouseLeave={() => setDrag(false)}>Courses Catalog</h4>
    <div className="courses">
      {courses.length !== 0 && courses.map((item) => {
        return <div className="card">
          <h4>{item.name}</h4>
          <div className="details">
            <div className="price">{"₹ "}{item.fee[0].price}</div>
            <ReadMore>{item.description_L[2]}</ReadMore>
          </div>
        </div>
      })}
    </div>
  </div>
}


const EventDetails = () => {
  const [drag, setDrag] = useState(false)

  return <div draggable={drag} className="section">
    <h4 onMouseDownCapture={() => setDrag(true)} onMouseLeave={() => setDrag(false)}>Event Details</h4>
  </div>
}

const QuickLinks = () => {
  const [drag, setDrag] = useState(false)

  const links = [
    {
      name: 'Courses',
      link: '/menu/courses'
    },
    {
      name: 'Recommended',
      link: '/menu/courses/#recommended',
      hash: true
    },
    {
      name: 'Trenidng',
      link: '/menu/courses/#trending',
      hash: true
    },
    {
      name: 'Team picks',
      link: '/menu/courses/#team',
      hash: true
    },
    {
      name: 'Events',
      link: '/menu/events'
    },
    {
      name: 'Gallery',
      link: '/menu/events/#gallery',
      hash: true
    },
    {
      name: 'Upcomming Events',
      link: '/menu/events/#upcoming',
      hash: true
    },
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Achievements',
      link: '/#achievements',
      hash: true
    },
    {
      name: 'Testimonials',
      link: '/#testimonials',
      hash: true
    },
    {
      name: 'Sponsors',
      link: '/#sponsors',
      hash: true
    },
    {
      name: 'FAQ',
      link: '/#faq',
      hash: true
    },
  ]

  return <div draggable={drag} className="section">
    <h4 onMouseDownCapture={() => setDrag(true)} onMouseLeave={() => setDrag(false)}>Quick Links</h4>
    <div className="links">

      {links.map((item, key) => {
        const content = <>
          <span class="material-symbols-outlined">
            link
          </span>{item.name}
        </>;
        if (item.hash) return <HashLink smooth to={item.link} className="card">{content}</HashLink>;
        return <Link className="card" to={item.link} >{content}</Link>
      })}
    </div>

  </div>
}

const Announcement = () => {
  const [drag, setDrag] = useState(false)

  return <div draggable={drag} className="section">
    <h4 onMouseDownCapture={() => setDrag(true)} onMouseLeave={() => setDrag(false)}>Announcements</h4>
    <div className="messages">
      <div className="message">
        <h5 style={{ fontSize: '16px' }}>Welcome</h5>
        <p style={{ fontSize: '14px' }}>Happy to see you</p>
        <span class="material-symbols-outlined">
          notifications
        </span>
      </div>
      <div className="message">
        <h5 style={{ fontSize: '16px' }}>Welcome</h5>
        <p style={{ fontSize: '14px' }}>Happy to see you</p>
        <span class="material-symbols-outlined">
          notifications
        </span>
      </div>
    </div>
  </div>
}

const LearningResources = () => {
  const [drag, setDrag] = useState(false)

  return <div draggable={drag} className="section">
    <h4 onMouseDownCapture={() => setDrag(true)} onMouseLeave={() => setDrag(false)}>Learning Recources</h4>
    <div className="links">
      <div className="card">Link #1</div>
      <div className="card">Link #2</div>
      <div className="card">Link #3</div>
    </div>
  </div>
}


function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [dp, setDp] = useState(logo);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [uid, setUid] = useState();
  const [email, setEmail] = useState("");
  const [events, setEvents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [enolledEvents, setEnrolledEvents] = useState([]);
  const [user, setUser] = useState(null)

  const [cover, setCover] = useState(localStorage.getItem('cover'))
  const navigate = useNavigate();
  console.log(cover);


  const getEventDetails = (index) => {
    navigate(`/menu/events/${events[index].id}`)
  };

  const doFetch = async (user) => {
    const q1 = query(
      collection(db, "events"),
      where("enrolled", "array-contains", user.uid)
    );
    const q2 = query(
      collection(db, "courses"),
      where("enrolled_arr", "array-contains", user.uid)
    );
    try {
      const snap1 = await getDocs(q1);
      const list1 = snap1.docs.map((list) => {
        return {
          ...list.data(),
          id: list.id,
        };
      });

      const snap2 = await getDocs(q2)
      const list2 = snap2.docs.map((list) => {
        return {
          ...list.data(),
          id: list.id
        }
      })
      console.log(list2);
      console.log(list1)
      console.log(list1.length === 0 && list2.length === 0);

      if (list1.length === 0 && list2.length === 0) {
        localStorage.setItem('cover', true)
        setCover(true)
      } else {
        localStorage.setItem('cover', false)
        setCover(false)
      }

      setEnrolledEvents(list1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };



  let dynamicStyles = null;
  function addAnimation(body) {
    if (!dynamicStyles) {
      dynamicStyles = document.createElement("style");
      dynamicStyles.type = "text/css";
      document.head.appendChild(dynamicStyles);
    }

    dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
  }

  const drag = (e) => {
    console.log(e);
    e.target.classList.add('dragging')
  }

  const containerDrag = (e) => {
    console.log('jii');
  }


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setLoggedIn(true);
        setUid(user.uid);
        setUsername(user.displayName);
        setEmail(user.email);
        if (user.photoURL) setDp(user.photoURL);
        doFetch(user);
      } else {
        setLoading(false);
      }
    });

    addAnimation(`
    @keyframes progress {
    to { --event-progress-value: 50;
        --course-progress-value: 30;    
    }
   }
    `);
  }, []);




  const [items, setItems] = useState([<EnrolledCourse user={user} dragger={drag} />, <CourseCatalog />, <QuickLinks />, <EventDetails />, <Announcement />, <LearningResources />])

  const skipCover = () => {
    localStorage.setItem('cover', true)
    setCover(true)
  }

  return (
    <div className="dashboard">
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          {loggedIn ? (
            <>

              {(cover === null || cover) ? <div className="cover">
                <Path setCover={setCover} skip={skipCover} />
              </div> :
                <>
                  <h2>Dashboard</h2>
                  <div className="main" onDragOver={containerDrag}>
                    {items.map(item => item)}
                  </div>
                </>
              }
            </>
          ) : (
            <div className="not-logged">
              <span class="material-symbols-outlined">report</span>
              <h3>Sign in for Dashboard</h3>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Dashboard;
