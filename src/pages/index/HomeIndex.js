import React, { useContext, useEffect, useState } from "react";
import SignIn from "../signin/SignIn";
import { Outlet, useOutletContext } from "react-router-dom";
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

  const { setCourses, courses, setUserName } = useContext(StoreContext);

  useEffect(() => {
    window.addEventListener("popstate", () => window.location.reload());

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setSignIn(true);
      }
    });

    const doFetch = async () => {
      const q = query(collection(db, "courses"), orderBy("order", "asc"));
      const querySnapshot = await getDocs(q);
      const temp = [];
      querySnapshot?.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        console.log(doc.data());
        temp.push({ ...doc.data(), id: doc.id });
      });
      console.log(temp);
      setCourses(temp);
      setLoading(false)
      // const washingtonRef = doc(db, "courses", "sE2QV4XJjyCVPWjA8XNs");

      // // Set the "capital" field of the city 'DC'
      // await updateDoc(washingtonRef, {
        
      // });
      
    };
    doFetch();
    console.log("hello");
    return () => {
      window.removeEventListener("popstate", () => window.location.reload());
    };
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

  if(loading) return <Spinner loading={true} />

  return (
    <>
      <SideMenu event={event} signIn={setSignIn} />
      <Outlet context={{ register, setRegister, setSignIn }} />
      {signIn && (
        <div className="wrapper">
          <div className="blocker" onClick={() => setSignIn(false)}></div>
          <SignIn />
        </div>
      )}
    </>
  );
}

export default HomeIndex;
