import { onAuthStateChanged } from "firebase/auth";
import "./dashboard.css";
import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase/config";
import Spinner from "../../components/Spinner";
import logo from "../../images/man.png";
import { useNavigate, useOutletContext } from "react-router-dom";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";
import slide from "../../images/slide.jpg";
import { trending } from "../courses/CoursesHome";
import Path from "../path/Path";
import { StoreContext } from "../../store/StoreContext";
import { HashLink } from "react-router-hash-link";
import { toggle } from "../../components/sideMenu/SideMenu";

const EnrolledCourse = ({ dragger }) => {
  //const [drag, setDrag] = useState(false)
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [enrolledEvents, setEnrolledEvents] = useState([]);
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()



  const fetch = async (user) => {

  try {
    const eventQ = query(
      collection(db, "events"),
      where("enrolled_arr", "array-contains", user.uid)
    );

    const snap2 = await getDocs(eventQ)
    const list2 = snap2.docs.map((list) => {
      return {
        ...list.data(),
        id: list.id
      }
    })
    setEnrolledEvents(list2)

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
    console.log(lists.length + "=>l");
    setEnrolledCourses(lists)
    setLoading(false)
  } catch (error) {
    console.log(error);
  }
  }

  const getInvoice = (course) => {
    let invoice = null;
    course.enrolled.forEach(item=>{
      if(item.userId === user.uid){
        invoice = item.invoice
      }
    })
    return invoice
  }

  const getCours = (index) => {
    console.log('hi');
    navigate(`/menu/courses/details/${index}`)
  }

  const getEvent = (index) => {
    console.log('hi');
    navigate(`/menu/events/details/${index}`)
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
      fetch(user)
    })
  }, [])

  return <div className="section">
    <h4 >My Enrollment</h4>
    <div className="enrolled-courses">
      {loading ? <Spinner other={'height'} normal={true} loading={loading} /> : <>
        {enrolledCourses.length !== 0 || enrolledEvents.length !== 0 ? <>
          {enrolledEvents.length !== 0 && enrolledEvents.map((item, key) => {
            return <div style={{ cursor: 'pointer' }} onClick={() => getEvent(item.order)} className="card" key={key} >
              <h4>{item.name}</h4>
              {getInvoice(item) && 
              <div className="invoice">
                <a onClick={(e)=>e.stopPropagation()} href={getInvoice(item)} rel="noreferrer" target="_blank">
                  <div className="hm">
                  <span class="material-symbols-outlined">download</span>
                  <span>Invoice</span> 
                  
                   
                  </div>
                  
                </a>
                
              </div>
              }
            </div>
          })}
          {enrolledCourses.length !== 0 && enrolledCourses.map((item) => {
            return <div className="card" style={{ cursor: 'pointer' }} onClick={() => getCours(item.order)}>
              <h4>{item.name}</h4>
              {getInvoice(item) && <div className="invoice">
                <a onClick={(e)=>e.stopPropagation()} href={getInvoice(item)} rel="noreferrer" target="_blank">
                  <div className="hm">
                  <span class="material-symbols-outlined">download</span>
                    <span>Invoice</span>
                     
                </div></a>
                
              </div>}
            </div>
          })}
        </> : <>
          <p>You are not enrolled to any courses or events, Please Enroll</p>
          <div className="btns">
            <button onClick={() => { navigate("/menu/courses"); window.location.reload() }} >Courses</button><button onClick={() => { navigate("/menu/events"); window.location.reload() }}>Events</button>
          </div>
        </>}
      </>}

    </div>
  </div>
}

const CourseCatalog = () => {
  // const [drag, setDrag] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const { courses, user, setSection } = useContext(StoreContext)
  setSection(null)
  const navigate = useNavigate()

  useEffect(() => {
    let temp = []
    if (user) {

      courses?.forEach(course => {
        let flag = false
        console.log(course)
        course.enrolled_arr?.forEach(item => {
          if (item === user.uid) flag = true
        })

        if (!flag) temp.push({ ...course })
        if (flag) console.log(course)

      });
      setData(temp)
      if (courses) setLoading(false)
    }
  }, [user, courses])

  const getCours = (index) => {
    navigate(`/menu/courses/details/${index}`)
  }

  return <div className="section">
    <h4>Courses Catalog</h4>
    <div className="courses" >
      {loading ? <Spinner other={'height'} normal={true} loading={loading} /> : <>
        {data?.length !== 0 && data?.map((item) => {
          return <div className="card" onClick={() => getCours(item.order)}>
            <div className="title">
              <h4>{item.name}</h4>
              <div className="price">{"₹ "}{item.fee[0].price}</div>

            </div>
            <div className="details">
              <p>{item.description[0].slice(0, 50)}...</p>
            </div>
          </div>
        })}
      </>}

    </div>
  </div>
}


const EventDetails = () => {
  // const [drag, setDrag] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const { events, user, setSection } = useContext(StoreContext)
  setSection(null)
  const navigate = useNavigate()

  useEffect(() => {
    let temp = []
    if (user) {

      events?.forEach(event => {
        let flag = false
        event.enrolled_arr?.forEach(item => {
          if (item === user.uid) flag = true
        })

        if (!flag) temp.push({ ...event })
        if (flag) console.log(event)

      });
      setData(temp)
      if (events) setLoading(false)
    }
  }, [user, events])

  const getEvent = (index) => {
    navigate(`/menu/events/details/${index}`)
  }

  return <div className="section">
    <h4 >Event Catalog</h4>
    <div className="courses" >
      {loading ? <Spinner other={'height'} normal={true} loading={loading} /> : <>
        {data?.length !== 0 && data?.map((item, i) => {
          return <div className="card" onClick={() => getEvent(i)}>
            <div className="title">
              <h4>{item.name}</h4>
            </div>
          </div>
        })}
      </>}

    </div>
  </div>
}

const QuickLinks = () => {
  // const [drag, setDrag] = useState(false)

  const links = [
    {
      name: 'Courses',
      link: '/menu/courses',
      index: 1,
    },
    {
      name: 'Recommended',
      link: '/menu/courses/#recommended',
      hash: true,
      index: 1,
    },
    {
      name: 'Trending',
      link: '/menu/courses/#trending',
      hash: true,
      index: 1,
    },
    {
      name: 'Team picks',
      link: '/menu/courses/#team',
      hash: true,
      index: 1,
    },
    {
      name: 'Events',
      link: '/menu/events',
      index: 2,
    },
    {
      name: 'Gallery',
      link: '/menu/events/#gallery',
      hash: true,
      index: 2,
    },
    {
      name: 'Upcoming Events',
      link: '/menu/events/#upcoming',
      hash: true,
      index: 2,
    },
    {
      name: 'Home',
      link: '/',
      new: true,
    },
    {
      name: 'Achievements',
      link: '/#achievements',
      hash: true,
      new: true,
    },
    {
      name: 'Testimonials',
      link: '/#testimonials',
      hash: true,
      new: true
    },
    {
      name: 'Sponsors',
      link: '/#sponsors',
      hash: true,
      new: true,
    },
    {
      name: 'FAQ',
      link: '/#faq',
      hash: true,
      new: true
    },
  ]

  const { section, setSection } = useContext(StoreContext)

  function click(index) {
    const links = document.querySelectorAll(".link");
    const minLinks = document.querySelectorAll(".min-link");
    links.forEach((link) => {
      link.classList.remove("clicked");
    });
    minLinks.forEach((link) => {
      link.classList.remove("clicked");
    });
    // const index = e.target.closest("[data-index]").dataset.index;
    // console.log(index + "jiii");
    if (index == 0) {
      console.log(links[0], "k");
      links[0].classList.add("clicked");
      minLinks[0].classList.add("clicked");
      setSection(0);
    } else if (index == 1) {
      links[1].classList.add("clicked");
      minLinks[1].classList.add("clicked");
      setSection(1);
    } else if (index == 2) {
      links[2].classList.add("clicked");
      minLinks[2].classList.add("clicked");
      setSection(2);
    }
  }


  return <div className="section">
    <h4 >Quick Links</h4>
    <div className="links">

      {links.map((item, key) => {
        const content = <>
          <span class="material-symbols-outlined">
            link
          </span><h4>{item.name}</h4>
        </>;
        if (item.hash) return <HashLink target={item.new ? "_blank" : null} onClick={() => { if (item.index) click(item.index) }} smooth to={item.link} className="card">{content}</HashLink>;
        return <Link className="card" target={item.new ? "_blank" : null} onClick={() => { if (item.index) click(item.index) }} to={item.link} >{content}</Link>
      })}
    </div>

  </div>
}

const Announcement = () => {
  // const [drag, setDrag] = useState(false)

  return <div className="section">
    <h4 >Announcements</h4>
    <div className="messages card">
      <div className="message">
        <h4 >Welcome</h4>
        <p >Happy to see you, let's Revolutionize Possibilities</p>
        <span class="material-symbols-outlined">
          notifications
        </span>
      </div>
    </div>
  </div>
}

const LearningResources = () => {
  // const [drag, setDrag] = useState(false)

  const LearingResources = [
    {
      title: "IS PERSISTENCE REALLY MATTER TO SUCCESS?",
      link: "https://guhublog5103.blogspot.com/2023/08/is-persistence-really-matter-to-success.html?m=1",
    },
    {
      title: "7 BENEFITS OF OVERTHINKING",
      link: "https://guhublog5103.blogspot.com/2023/07/7-proven-benefits-of-overthinking.html?m=1",
    }
  ]

  return <div className="section">
    <h4>Learning Recources</h4>
    <div className="links">
      {LearingResources.map(item=><div className="card"><Link target="_blank" to={item.link} >{item.title}</Link></div>)}
    </div>
  </div>
}


function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [dp, setDp] = useState(logo);
  const [loggedIn, setLoggedIn] = useState(false);
  const [events, setEvents] = useState([]);
  const [loadingTwo, setLoadingTwo] = useState(true)
  const { setSignIn } = useOutletContext()

  const [cover, setCover] = useState(true)
  const navigate = useNavigate();
  console.log(cover);


  const getEventDetails = (index) => {
    navigate(`/menu/events/${events[index].id}`)
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

  const { setUser } = useContext(StoreContext)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setLoggedIn(true);
        const doFetch = async (user) => {
          const docRef = doc(db, "users", user.uid);
          try {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
              setCover(docSnap.data().cover)
            } else {
              // docSnap.data() will be undefined in this case
              console.log("No such document!");
            }
          } catch (error) {
            console.log(error);
          }
          setLoading(false)
        }
        doFetch(user)

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

  useEffect(() => { console.log(cover + " yess"); }, [cover])

  const { courses, user } = useContext(StoreContext)


  const [items, setItems] = useState([<EnrolledCourse dragger={drag} />, <CourseCatalog />, <EventDetails />, <QuickLinks />, <Announcement />, <LearningResources />])

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

              {cover ? <div className="cover">
                <Path setCover={setCover} user={user} skip={skipCover} />
              </div> :
                <>
                  <h1>Dashboard</h1>
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
