import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import "./App.css";
import { FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Club of Arts</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="header">
        <div className="hero-background">
          <img src="/images/pic1.jpg" alt="club" />
          <img src="/images/pic2.jpg" alt="club" />
          <img src="/images/pic3.jpg" alt="club" />
          <img src="/images/pic4.jpg" alt="club" />
          <img src="/images/pic5.jpg" alt="club" />
          {/* repeat for smooth scroll */}
          <img src="/images/pic1.jpg" alt="club" />
          <img src="/images/pic2.jpg" alt="club" />
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
        The Club of Arts is a vibrant community of students dedicated to creating without permission, 
        exploring without limits, and expressing without apology. Our members come from all backgrounds and skill levels, 
        united by curiosity
         and a passion for creativity. 
        From visual art and digital media to writing, performance, and collaborative projects, we provide a space where
         ideas can flourish and boundaries can be pushed. Through workshops, showcases, and ongoing creative projects, 
         we aim to inspire, challenge, and support one another while building a lasting culture of innovation and expression on campus. 
         Whether you’re looking to develop your skills, share your work, or simply be part of a community that celebrates imagination in all its forms, 
        The Club of Arts is your canvas,and we can’t wait to see what you’ll create.
      </p>
    </div>
    <div className="about-image">
      <img src="/images/club-photo.jpg" alt="Club Activities" />
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

export default App;