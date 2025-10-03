import React from "react";
import { FaLinkedin, FaEnvelope, FaCamera, FaInstagram, FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import images from src/images
import presidentImg from "./images/president.jpg";
import visualLeadImg from "./images/visuallead.jpg";
import archivistImg from "./images/archivist.jpg";
import projectLeadImg from "./images/projectlead.jpg";
import commsLeadImg from "./images/commslead.jpg";
import treasurerImg from "./images/treasurer.jpg";

// Sample data for officials

const officials = [
  {
    id: 1,
    name: "David Semga",
    role: "President",
    image: presidentImg,
    links: {
      linkedin: "https://www.linkedin.com/in/davidsemga",
      email: "dsemga@udallas.edu",
      behance: "https://www.behance.net/davidsemga"
    }
  },
  {
    id: 2,
    name: "Alfredo Powers",
    role: "Visual Lead",
    image: visualLeadImg,
    links: {
      linkedin: "https://www.linkedin.com/in/alfredo-powers-8b9092370/",
      email: "apowers@udallas.edu",
      camera: "https://www.flickr.com/people/201998100@N08/"
    }
  },
  {
    id: 3,
    name: "Elizabeth Tran",
    role: "Archivist",
    image: archivistImg,
    links: {
      linkedin: "https://www.linkedin.com/in/elizabeth-tran-3b88142b9",
      instagram: "https://www.instagram.com/elli.tra",
      email: "ntran5@udallas.edu"
    }
  },
  {
    id: 4,
    name: "Samantha Saenz",
    role: "Project Lead",
    image: projectLeadImg,
    links: {
      linkedin: "https://www.linkedin.com/in/samantha-saenz/",
      email: "ssaenz@udallas.edu"
    }
  },
  {
    id: 5,
    name: "Vidhi Dasani",
    role: "Communications Lead",
    image: commsLeadImg,
    links: {
      linkedin: "https://www.linkedin.com/in/vidhi-dasani-1a05512b6/",
      email: "vdasani@udallas.edu",
      camera: "https://vidhidasani.blogspot.com/"
    }
  },
   {
    id: 6,
    name: "Joseph Sebastian",
    role: "Treasurer",
    image: treasurerImg,
    links: {
      email: "jsebastian@udallas.edu"
    }
  }

];

function OfficialList() {
  return (
    // add navigation bar here
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/officials">Officials</Link></li>
        </ul>
      </nav>

    <section className="section officials-section">
      <h2>Meet Our Officials</h2>
      <div className="officials-grid">
        {officials.map((official) => (
            <div className="official-card" key={official.id}>
              <img src={official.image} alt={official.name} />
              <h3>{official.name}</h3>
              <p>{official.role}</p>
              <div className="official-links">
                {official.links.linkedin && (
                  <a href={official.links.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {official.links.email && (
                  <a href={`mailto:${official.links.email}`}>
                    <FaEnvelope />
                  </a>
                )}
                {official.links.camera && (
                  <a href={official.links.camera} target="_blank" rel="noopener noreferrer">
                    <FaCamera />
                  </a>
                )}
                {official.links.instagram && (
                  <a href={official.links.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                )}
                {official.links.behance && (
                  <a href={official.links.behance} target="_blank" rel="noopener noreferrer">
                    <FaBehance />
                  </a>
                )}
              </div>
            </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default OfficialList;