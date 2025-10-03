import React from "react";
import { useParams } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaInstagram, FaCamera, FaBehance } from "react-icons/fa";
import OfficialList from "./OfficialList"; // import data
import "./Official.css";
import { officials } from "./OfficialList";

function Official() {
  const { id } = useParams();
  const official = OfficialList.find(o => o.id === parseInt(id));

  if (!official) return <p>Official not found</p>;

  return (
    <div className="official-page">
      <div className="official-hero">
        <img src={official.image} alt={official.name} className="official-photo"/>
        <h1>{official.name}</h1>
        <h3>{official.role}</h3>
      </div>

      <div className="official-bio">
        <h2>Fun Fact</h2>
        <p>{official.funFact || "No fun fact yet, stay tuned!"}</p>
      </div>

      <div className="official-links">
        {official.links.linkedin && (
          <a href={official.links.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        )}
        {official.links.email && (
          <a href={`mailto:${official.links.email}`}>
            <FaEnvelope size={30} />
          </a>
        )}
        {official.links.instagram && (
          <a href={official.links.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        )}
        {official.links.camera && (
          <a href={official.links.camera} target="_blank" rel="noopener noreferrer">
            <FaCamera size={30} />
          </a>
        )}
        {official.links.behance && (
          <a href={official.links.behance} target="_blank" rel="noopener noreferrer">
            <FaBehance size={30} />
          </a>
        )}
      </div>
    </div>
  );
}

export default Official;