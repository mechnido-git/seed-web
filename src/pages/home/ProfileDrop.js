import React, { useEffect, useRef } from "react";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ProfileDrop({ userName, onClickOutside, show, setLoading }) {
  const ref = useRef();
  const navigate = useNavigate()

  const logout = () => {
    console.log('ho');
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
        localStorage.removeItem('cover')
        setLoading(false)
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
        setLoading(false);
      });
  };

  const getMyAccount = () =>{
    navigate("/menu/account")
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClickOutside]);

  if (!show) return null;
  return (
    <div className="options" ref={ref}>
      <h3>{userName}</h3>
      <ul>
        <li onClick={getMyAccount}>My Account</li>
        <li>My Courses</li>
        <li>My Events</li>
        <li onClick={logout}>Sign Out</li>
      </ul>
    </div>
  );
}

export default ProfileDrop;
