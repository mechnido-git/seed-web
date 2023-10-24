import React, { useContext, useEffect, useRef, useState } from "react";
import axios from 'axios';
import "./signin.css";
import icon from "../../images/cancel_icon.png";
import google from "./pngwing.com.png";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../../firebase/config";
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { HashLink } from "react-router-hash-link";

export const displayError = (inputField, errorField, msg) => {
  errorField.style.display = "block";
  errorField.innerText = msg;
  inputField.classList.add("inp-error")
}

export const validateEmail = (email) => {
  var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  if(email.length === 0){
    return {error: true, msg: "Email cannot be empty"}
  }else if(!email.match(pattern)){
    return {error: true, msg: "Please include an '@' symbol and a valid domain extension such as .com or .net."}
  }
  return {error: false}
}

export const validatePassword = (password)  => {
  var validRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  if(password.length === 0){
    return {error: true, msg: "Password cannot be empty"}
  }else if (!password.match(validRegex)){
    return {error: true, msg: "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"}
  }
  return {error: false}
}

export const validateName = (name) => {
  var letters = /^[a-zA-Z ]*$/
  if (name.length < 3) {
    return {error: true, msg: "Name Must be more than 3 characters"}
  } else if (!name.match(letters)) {
    return {error: true, msg: "Name Must be in Alphabetics"}
  }
  return {error: false}
}

export const validatePhone = (phone) => {
  if (phone.length === 0) {
    return {error: true, msg: "Phone cannot be empty"}
  } else if (phone.length < 10) {
    return {error: true, msg: "Phone must be 10 numbers"}
  } else if (!(!isNaN(phone) && !isNaN(parseFloat(phone)))) {
    return {error: true, msg: "Phone must be numeric"}
  } else if(phone.length > 10){
    return {error: true, msg: "phone must be 10 numbers"}
  }
  return {error: false}
}

export const onChangeInput = (e, setValue, errorId) => {
  setValue(e.target.value)
  const error = document.getElementById(errorId)
  e.target.classList.remove("inp-error")
  error.innerHTML = ""
  error.style.display = "none"
  const type = e.target.dataset.type
  if(type === "email"){
    const emailResult = validateEmail(e.target.value)
    if(emailResult.error) displayError(e.target, error, emailResult.msg)
  }else if(type === "password"){
    const passResult = validatePassword(e.target.value)
    if(passResult.error) displayError(e.target, error, passResult.msg)
  }else if(type === "name"){
    setValue(e.target.value.toUpperCase())
    const nameResult = validateName(e.target.value)
    if(nameResult.error) displayError(e.target, error, nameResult.msg)
  }else if(type === "phone"){
    const phoneResult = validatePhone(e.target.value)
    if(phoneResult.error) displayError(e.target, error, phoneResult.msg)
  }
}


function SignIn({ index, redirect, setRedirect,setSignIn, close }) {
  const [signin, setSigin] = useState(!index ? true : false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  //sign up
  const [fullName, setFullName] = useState("");
  const [upEmail, setUpEmail] = useState("");
  const [upPassword, setUpPassword] = useState("");
  const [phone, setPhone] = useState("");

  //sign in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //forgot passs
  const [forgotPass, setForgotPass] = useState(false);
  const [forgEmail, setForgEmail] = useState("");
  const [sent, setSent] = useState(false);

  const click = useRef();

  const handleclose=()=>{
    
    if(close){
      // setSignIn(false);
      document.body.classList.remove("disable-scroll");
     return navigate("/");
    }
    else{
      document.body.classList.remove("disable-scroll");
      setRedirect(null)
      setSignIn(false);
    }
   

  }

  const showPassword = (e) => {
    let pwFields =
      e.target.parentElement.parentElement.querySelectorAll(".password");
    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        e.target.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      e.target.classList.replace("bx-show", "bx-hide");
    });
  };

  const open = async (user) => {
    const docRef = doc(db, "users", user.uid);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
       } else {
         // docSnap.data() will be undefined in this case
         await setDoc(doc(db, "users", user.uid), {
           name: user.displayName,
           email: user.email,
           cover: true
         });

         await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/send-register-email`,
          {email: user.email}
         )

       }
       if (redirect) {
         navigate(redirect);
         setRedirect(null);
       } else {
         window.location.reload();
       }
      
    } catch (error) {
      alert(error)
    }
  };


  const handleSignUp = (e) => {
    setLoading(true);
    e.preventDefault();

    const nameField = document.getElementById('up-name')
    const phoneField = document.getElementById('up-phone')
    const emailField = document.getElementById('up-email')
    const passField = document.getElementById('up-pass')


    const nameError = document.getElementById('up-name-error')
    const phoneError = document.getElementById('up-phone-error')
    const emailError = document.getElementById('up-email-error')
    const passError = document.getElementById('up-pass-error')

    const nameResult = validateName(fullName)
    const emailResult = validateEmail(upEmail)
    const phoneResult = validatePhone(phone)
    const passResult = validatePassword(upPassword)

    let flag = false

    if(nameResult.error){
      displayError(nameField, nameError, nameResult.msg)
      flag = true
    }
    if(emailResult.error){
      displayError(emailField, emailError, emailResult.msg)
      flag = true
    }
    if(phoneResult.error){
      displayError(phoneField, phoneError, phoneResult.msg)
      flag = true
    }
    if(passResult.error){
      displayError(passField, passError, passResult.msg)
      flag = true
    }

    if(!flag){
      createUserWithEmailAndPassword(auth, upEmail, upPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: fullName,
        })
          .then(() => {
            console.log("updated");
            open(user)
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
        // ..
        setLoading(false);
      });
    }else{
      setLoading(false)
    }

  };

  const handleSignIn = (e) => {
    setLoading(true);
    e.preventDefault();

    const error = document.querySelectorAll('.error')
    error.forEach(item=>item.style.display = "none")
    error.forEach(item => item.innerHTML = "")

    const emailError = document.getElementById('in-email-error')
    const emailInput = document.getElementById('in-email')

    const passError = document.getElementById('in-pass-error')
    const passInput = document.getElementById('in-pass')
    
    let flag = false;
    const emailResult = validateEmail(email)
    const passResult = validatePassword(password)
    if(emailResult.error){
      displayError(emailInput, emailError, emailResult.msg)
      flag = true
    }
    if(passResult.error){
      displayError(passInput, passError, passResult.msg)
      flag = true
    }

    if(!flag){
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

       open(user)

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
        setLoading(false);
      });
    }else{
      setLoading(false);
    }
  };

  const signInGoogle = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    if (redirect) {
      localStorage.setItem('redirect', redirect)
    }
    signInWithRedirect(auth, provider)
  };

  const signInFB = (e) => {
    e.preventDefault();
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log("success");

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        redirect ? navigate("/menu/dashboard") : window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        // console.log(errorMessage);

        // ...
      });
  };

  const handleForgetPass = (e) => {
    e.preventDefault();
    setLoading(true);
    sendPasswordResetEmail(auth, forgEmail)
      .then(() => {
        // Password reset email sent!
        setSent(true);
        window.location.reload();
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorCode);
        setLoading(false);
        // ..
      });
  };

  return (
    <div className="signin-div form login">
      {loading && <Spinner loading={loading} normal={true} />}
      <span class="material-symbols-outlined"  alt="closeImage" onClick={handleclose}>close</span>
      {/* <img  className="closebtn" src={icon} alt="closeImage" onClick={handleclose}/> */}
   
      {signin ? (
        <>
          {forgotPass ? (
            <>
              {!sent ? (
                <>
                  <div className="form-content">
                    <header>Password Reset</header>
                    <form onSubmit={handleForgetPass}>
                      <div className="field input-field">
                        <input
                          type="email"
                          placeholder="Email"
                          className="input"
                          value={forgEmail}
                          onChange={(e) => setForgEmail(e.target.value)}
                          required
                          pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        />
                      </div>
                      <span className="error"></span>

                      <div className="field button-field">
                        <input type="submit" value="Sent Reset Email" />
                      </div>
                    </form>

                    <div className="form-link">
                      <span>
                        Don't have an account?{" "}
                        <a
                          onClick={() => {
                            setSigin(false);
                            setForgotPass(false);
                          }}
                          className="link signup-link"
                        >
                          Sign up
                        </a>
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="success">
                    <span class="material-symbols-outlined">check_circle</span>
                    Email Sent
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className="form-content">
                <header>Sign in</header>
                <form >
                  <div className="field input-field">
                    <input
                    data-type="email"
                      id="in-email"
                      type="email"
                      placeholder="Email"
                      className="input"
                      value={email}
                      onChange={(e)=>onChangeInput(e, setEmail, "in-email-error")}
                      required
                      pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    />
                  </div>
                  <span className="error" id="in-email-error"></span>

                  <div className="field input-field">
                    <input
                    data-type="password"
                      id="in-pass"
                      required
                      value={password}
                      onChange={(e) => onChangeInput(e, setPassword, "in-pass-error")}
                      type="password"
                      placeholder="Password"
                      className="password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    />
                    <i
                      onClick={showPassword}
                      className="bx bx-hide eye-icon"
                    ></i>
                  </div>
                  <div className="error" id="in-pass-error"></div>

                  <div className="form-link">
                    <a
                      onClick={() => setForgotPass(true)}
                      className="forgot-pass"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <div className="field button-field">
                    <input type="button" className="submit-btn" onClick={handleSignIn} value="Sign in" />
                  </div>
                </form>

                <div className="form-link">
                  <span>
                    Don't have an account?{" "}
                    <a
                      onClick={() => setSigin(false)}
                      className="link signup-link"
                    >
                      Sign up
                    </a>
                  </span>
                </div>
              </div>
              <div className="line"></div>
              <div className="media-options">
                <a href="#" className="field facebook" onClick={signInFB}>
                  <i className="bx bxl-facebook facebook-icon"></i>
                  <span>Login with Facebook</span>
                </a>
              </div>
              <div className="media-options">
                <a href="" className="field google" onClick={signInGoogle}>
                  <img src={google} alt="" className="google-img" />
                  <span>Login with Google</span>
                </a>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="form-content">
            <header>Create account</header>
            <form >
              <div className="field input-field">
                <input
                  id="up-name"
                  required
                  data-type="name"
                  type="text"
                  minLength={3}
                  value={fullName}
                  onChange={(e) => onChangeInput(e, setFullName, "up-name-error")}
                  placeholder="Full Name"
                  className="input"
                />
              </div>
              <div className="error" id="up-name-error"></div>
              <div className="field input-field">
                <input
                  id="up-phone"
                  required
                  data-type="phone"
                  type="phone"
                  value={phone}
                  onChange={(e) => onChangeInput(e, setPhone, "up-phone-error")}
                  placeholder="Phone"
                  className="input"
                  pattern=  "^[0-9]{10}$"
                />
              </div>
              <div className="error" id="up-phone-error"></div>
              <div className="field input-field">
                <input
                  required
                  id="up-email"
                  data-type="email"
                  type="email"
                  value={upEmail}
                  onChange={(e) => onChangeInput(e, setUpEmail, "up-email-error")}
                  placeholder="Email"
                  className="input"
                  pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
                  // pattern=" /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  // pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  ///^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.
                />
              </div>
              <div className="error" id="up-email-error"></div>
              <div className="field input-field">
                <input
                  id="up-pass"
                  data-type="password"
                  required
                  type="password"
                  placeholder="Password"
                  className="password"
                  value={upPassword}
                  onChange={(e) => onChangeInput(e, setUpPassword, "up-pass-error")}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
                <i onClick={showPassword} className="bx bx-hide eye-icon"></i>
              </div>
              <div className="error" id="up-pass-error"></div>
              <div className="field button-field">
                <input onClick={handleSignUp} className="submit-btn" type="button" name="" id="" value="Sign up" />
              </div>
            </form>

            <div className="form-link">
              <span>
                Already have an account?{" "}
                <a onClick={() => setSigin(true)} className="link signup-link">
                  Sign in
                </a>
              </span>
            </div>
            <div className="form-link">
              <span>
                By clicking "Sign up," you agree to our
                <br />
                <b>
                  <HashLink smooth to="/terms/#terms" target="_blank">
                  Terms of Use
                  </HashLink>
                </b>{" "}
                and our{" "}
                <b>
                  <HashLink smooth to="/privacy-policy/#privacy" target="_blank">
                  Privacy Policy
                  </HashLink>
                </b>
                .{" "}
              </span>
            </div>

            <div className="line"></div>

            <div className="media-options">
              <a href="#" className="field facebook" onClick={signInFB}>
                <i className="bx bxl-facebook facebook-icon"></i>
                <span>Login with Facebook</span>
              </a>
            </div>

            <div className="media-options">
              <a href="" className="field google" onClick={signInGoogle}>
                <img src={google} alt="" className="google-img" />
                <span>Login with Google</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SignIn;
