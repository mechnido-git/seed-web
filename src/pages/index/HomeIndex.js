import React, { useContext, useEffect, useState } from "react";
import SignIn from "../signin/SignIn";
import { Outlet, useOutletContext } from "react-router-dom";
import SideMenu from "../../components/sideMenu/SideMenu";
import { StoreContext } from "../../store/StoreContext";
import { auth, db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function HomeIndex() {
  const [register, setRegister] = useState(false);
  const { event, signIn, setSignIn } = useOutletContext();

  const { setCourses, courses, setUserName } = useContext(StoreContext);

  useEffect(() => {
    window.addEventListener("popstate", () => window.location.reload());

    onAuthStateChanged(auth, (user)=>{
      if (user) setUserName(user.displayName)
    })

    const doFetch = async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const temp = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        console.log(doc.data());
        temp.push({...doc.data(), id: doc.id })
      });
      console.log(temp);
      setCourses(temp)
    };
    doFetch();
    console.log('hello');
    return () => {
      window.removeEventListener("popstate", () => window.location.reload());
    };
  }, []);

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
