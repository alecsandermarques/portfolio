import React from 'react';
import { FaFreeCodeCamp, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';
import profile from '../../assets/profile.jpeg';

export default function Home() {
  // import logo from '../../assets/logo.png';
  // <img src={logo} alt="logo" />

  return (
    <div className="container">
      <div className="element">
        <div className="box">
          <img src={profile} alt="profile" />
          <h1>Alecsander Marques</h1>
          <div className="description">
            <h3>Software Developer</h3>
            <div className="icons">
              <FaGithub size={32} />
              <FaFreeCodeCamp size={32} />
              <FaLinkedin size={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
