import React, { useContext, useEffect, useState } from "react";
import SignIn from "../signin/SignIn";
import { Outlet, redirect, useOutletContext } from "react-router-dom";
import SideMenu from "../../components/sideMenu/SideMenu";
import { StoreContext } from "../../store/StoreContext";
import { auth, db } from "../../firebase/config";
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import Spinner from "../../components/Spinner";

function HomeIndex() {
  const [register, setRegister] = useState(false);
  const { event, signIn, setSignIn } = useOutletContext();
  const [loading, setLoading] = useState(true)

  const { setCourses, courses, setUpcomingEvents, setGallery, setEvents, setUserName } = useContext(StoreContext);

  useEffect(() => {
    const doFetch = async () => {
      const q = query(collection(db, "courses"), orderBy("order", "asc"));
      const querySnapshot = await getDocs(q);
      const temp = [];
      querySnapshot?.forEach((doc) => {

        temp.push({ ...doc.data(), id: doc.id });
      });

      const e = query(collection(db, "events"));
      const snapshot = await getDocs(e);
      const tmp = [];
      snapshot?.forEach((doc) => {

        tmp.push({ ...doc.data(), id: doc.id });
      });

      const f = query(collection(db, "upcoming_events"));
      const snap = await getDocs(f);
      const ftmp = [];
      snap?.forEach((doc) => {

        ftmp.push({ ...doc.data(), id: doc.id });
      });

      const g = query(collection(db, "gallery"));
      const s = await getDocs(g);
      const gtmp = [];
      s?.forEach((doc) => {

        gtmp.push({ ...doc.data(), id: doc.id });
      });
      
      setUpcomingEvents(ftmp)
      setGallery(gtmp)
      setCourses(temp);
      setEvents(tmp)
      setLoading(false)

      // const washingtonRef = doc(db, "events", "hUaPM58nSpDcAbUNXSf7");

      // // Set the "capital" field of the city 'DC'
      // await updateDoc(washingtonRef, {
        
      // });
      
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
        doFetch();
      } else {
        setSignIn(true);
      }
    });
  }, []);

  useEffect(() => {
    if (!signIn) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
        } else {
          setSignIn(true);
        }
      });
    }
  }, [signIn]);

  if(loading) return <Spinner loading={true}  />

  return (
    <>
      <SideMenu event={event} signIn={setSignIn} />
      <Outlet context={{ register, setRegister, setSignIn }} />
      {signIn && (
        <div className="wrapper">
          <div className="blocker" onClick={() => setSignIn(false)}></div>
          <SignIn close={true}/>
        </div>
      )}
    </>
  );
}

export default HomeIndex;
