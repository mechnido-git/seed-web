import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import ClipLoader from "react-spinners/ClipLoader";
import Quote from "../components/Quote";
import logo from "../images/seed_logo/Seed Joined.svg";
import logowhite from "../images/seed_white.png";
import { useContext } from "react";
import "./quote.css";
import { StoreContext } from "../store/StoreContext";


function Spinner({ loading, other, normal }) {
  const {check}= useContext(StoreContext);
  return (
    <div className={`spinner ${other}`}>
      <div className="loading-container">
        {!normal && (
          <>
            <img src={check ? logowhite: logo} alt=" company logo" />
            <Quote />
          </>
        )}
        <ScaleLoader
          className="loader"
          color={"#00B17B"}
          loading={loading}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Spinner;
