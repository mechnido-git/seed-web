import React, { useContext, useEffect, useRef, useState } from "react";
import "./signin.css";
import google from "./pngwing.com.png";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignIn({index, redirect, setRedirect}) {
  const [signin, setSigin] = useState(!index? true : false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate()

  //sign up
  const [fullName, setFullName] = useState("");
  const [upEmail, setUpEmail] = useState("");
  const [upPassword, setUpPassword] = useState("");
  const [phone, setPhone] = useState("");

  //sign in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  //forgot passs
  const [forgotPass, setForgotPass] = useState(false);
  const [forgEmail, setForgEmail] = useState("");
  const [sent, setSent] = useState(false);

  const click = useRef()

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
  }


  const handleSignUp = (e) => {
    setLoading(true);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, upEmail, upPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: fullName,
        })
          .then(() => {
            console.log("updated");
            redirect? navigate("/menu/dashboard") : window.location.reload();
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
        alert(errorMessage)
        // ..
        setLoading(false);
      });
  };

  const handleSignIn = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(email);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //console.log(user);
        // ...
       // navigate("/menu/dashboard");
       if(redirect){
        window.location.reload()
        window.open(redirect,'_blank')
        setRedirect(null)
        }else{
        window.location.reload()
        window.open('/menu/dashboard','_blank')
        }
      //  const evt = new Event('click', {bubbles: true})
      //  document.getElementById('red').dispatchEvent(evt)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
        setLoading(false);
      });
  };

  const signInGoogle = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        //navigate("/menu/dashboard");
        if(redirect){
        window.location.reload()
        window.open(redirect,'_blank')
        setRedirect(null)
        }else{
        window.location.reload()
        window.open('/menu/dashboard','_blank')
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
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
        redirect? navigate("/menu/dashboard") : window.location.reload();
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
        console.log(errorMessage);

        // ...
      });
  };

  const checkEmail = (e, setter) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!e.target.value.match(validRegex)) {
      setter("Invalid Email");
    }
  };

  const checkPassword = (e, setter) => {
    var validRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (!e.target.value.match(validRegex)) {
      setter(
        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
      );
    }
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
      {loading && <Spinner loading={loading} />}
      <Link id="red" to="/menu/dashboard" target="_blank" ref={click} />
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
                      <span className="error">{emailError}</span>

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
                <form onSubmit={handleSignIn}>
                  <div className="field input-field">
                    <input
                      type="email"
                      placeholder="Email"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    />
                  </div>
                  <span className="error">{emailError}</span>

                  <div className="field input-field">
                    <input
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      className="password"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    />
                    <i onClick={showPassword} className="bx bx-hide eye-icon"></i>
                  </div>
                  <div className="error">{passError}</div>

                  <div className="form-link">
                    <a
                      onClick={() => setForgotPass(true)}
                      className="forgot-pass"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <div className="field button-field">
                    <input type="submit" value="Sign in" />
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
            <form onSubmit={handleSignUp}>
              <div className="field input-field">
                <input
                  required
                  type="text"
                  minLength={3}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  className="input"
                  onFocus={(e) => {
                    e.target.classList.remove("error-inp");
                  }}
                />
              </div>
              <div className="field input-field">
                <input
                  required
                  type="email"
                  value={upEmail}
                  onChange={(e) => setUpEmail(e.target.value)}
                  placeholder="Email"
                  className="input"
                  pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
              </div>
              <div className="field input-field">
                <input
                  required
                  type="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className="input"
                />
              </div>

              <div className="field input-field">
                <input
                  required
                  type="password"
                  placeholder="Password"
                  className="password"
                  value={upPassword}
                  onChange={(e) => setUpPassword(e.target.value)}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
                <i onClick={showPassword} className="bx bx-hide eye-icon"></i>
              </div>

              <div className="form-link">
                <i className="bx bx-info-circle"></i>{" "}
                <label className="info">
                  Your password should contain at least 8 characters, including
                  one uppercase letter (A-Z), one lowercase letter (a-z), one
                  number (0-9), and one special character.
                </label>
              </div>

              <div className="field button-field">
                <input type="submit" name="" id="" value="Sign up" />
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
                  <a href="#">Terms of Use</a>
                </b>{" "}
                and our{" "}
                <b>
                  <a href="#">Privacy Policy</a>
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
