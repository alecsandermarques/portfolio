import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="header">
      <a href="/#" className="logo">
        <img src={logo} alt="imagem" />
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon" />
      </label>
      <ul className="menu">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about-me">ABOUT ME</a>
        </li>
      </ul>
    </header>
  );
}
