import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <img
        src={`${process.env.PUBLIC_URL}/images/landing.gif`}
        alt="landing background"
        className="landing-bg"
      />
      <div className="landing-content">
        <h1>Welcome to The Club of Arts</h1>
        <div className="landing-links">
          <Link to="/home" className="landing-link">Home</Link>
          <Link to="/officials" className="landing-link">Officials</Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;