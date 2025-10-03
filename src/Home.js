import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaEnvelope, FaLinkedin, FaPalette } from "react-icons/fa";
import "./App.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
        <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/officials">Officials</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="header">
        <div className="hero-background">
          <div className="scrolling-images">
            <img src={`${process.env.PUBLIC_URL}/images/pic1.jpg`} alt="club" />
            <img src={`${process.env.PUBLIC_URL}/images/pic2.jpg`} alt="club" />
            <img src={`${process.env.PUBLIC_URL}/images/pic3.jpg`} alt="club" />
            <img src={`${process.env.PUBLIC_URL}/images/pic4.jpg`} alt="club" />
            <img src={`${process.env.PUBLIC_URL}/images/pic5.jpg`} alt="club" />
          </div>
        </div>
        <div className="hero-content">
          <h1>Welcome to The Club</h1>
          <p>Create without limits!</p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About Our Club</h2>
            <p>
              The Club of Arts is a vibrant community of students dedicated to creating without permission, exploring without limits, 
              and expressing without apology. 
              From visual art and digital media to writing, performance, and collaborative projects, we provide a space where ideas can 
              flourish and boundaries can be pushed. Through workshops, showcases, and ongoing creative projects, we aim to inspire, challenge, 
              and support one another while building a lasting culture of innovation and expression on campus. Whether you’re looking to develop 
              your skills, share your work, or simply be part of a community that celebrates imagination in all its forms, The Club of Arts is your 
              canvas, and we can’t wait to see what you’ll create.
            </p>
          </div>
          <div className="about-icon">
            <FaPalette size={400} color="#000000ff" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <div className="contact-icons">
          <a href="mailto:thisisdefinitelynotaclub@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={40} />
          </a>
          <a href="https://www.instagram.com/narrativevoid" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} />
          </a>
          <a href="https://www.linkedin.com/company/clubofarts/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;