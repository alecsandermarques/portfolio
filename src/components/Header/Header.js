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
          <a href="#work">Our Work</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}
