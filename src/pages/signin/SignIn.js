import React, { useEffect, useState } from "react";
import "./signin.css";
import google from "./pngwing.com.png";

function SignIn() {
  const [signin, setSigin] = useState(true);
  const starter = () => {
    const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

    pwShowHide.forEach((eyeIcon) => {
      eyeIcon.addEventListener("click", () => {
        let pwFields =
          eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        console.log(pwFields[0]);
        pwFields.forEach((password) => {
          if (password.type === "password") {
            password.type = "text";
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return;
          }
          password.type = "password";
          eyeIcon.classList.replace("bx-show", "bx-hide");
        });
      });
    });

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
      });
    });
  };

  const stop = () => {
    const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

    pwShowHide.forEach((eyeIcon) => {
      eyeIcon.removeEventListener("click", () => {
        let pwFields =
          eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach((password) => {
          if (password.type === "password") {
            password.type = "text";
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return;
          }
          password.type = "password";
          eyeIcon.classList.replace("bx-show", "bx-hide");
        });
      });
    });

    links.forEach((link) => {
      link.removeEventListener("click", (e) => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
      });
    });
    console.log("removed");
  };

  useEffect(() => {
    starter();
    return () => stop();
  }, []);

  return (
    <div className="signin-div form login">
      {signin ? (
        <>
          <div className="form-content">
            <header>Sign in to your account</header>
            <form action="#">
              <div className="field input-field">
                <input
                  type="email"
                  placeholder="Email or Phone"
                  className="input"
                />
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>

              <div className="field button-field">
                <button>Sign in</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <a onClick={() => setSigin(false)} className="link signup-link">
                  Sign up
                </a>
              </span>
            </div>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <a href="#" className="field facebook">
              <i className="bx bxl-facebook facebook-icon"></i>
              <span>Login with Facebook</span>
            </a>
          </div>
          <div className="media-options">
            <a href="#" className="field google">
              <img src={google} alt="" className="google-img" />
              <span>Login with Google</span>
            </a>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="form-content">
            <header>Create your account</header>
            <form action="#">
              <div className="field input-field">
                <input type="text" placeholder="Fullname" className="input" />
              </div>
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>
              <div className="field input-field">
                <input type="phone" placeholder="Phone" className="input" />
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="form-link">
                <i className="bx bx-info-circle"></i>
                <label className="info">
                  Your password should contain at least 8 characters, including
                  one uppercase letter (A-Z), one lowercase letter (a-z), one
                  number (0-9), and one special character.
                </label>
              </div>

              <div className="field button-field">
                <button>Sign up</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Already have an account?{" "}
                <a onClick={()=>setSigin(true)} className="link signup-link">
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
              <a href="#" className="field facebook">
                <i className="bx bxl-facebook facebook-icon"></i>
                <span>Login with Facebook</span>
              </a>
            </div>

            <div className="media-options">
              <a href="#" className="field google">
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
