import React, { useLayoutEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import colors from '../../colors';
import Menu from '../Menu';
import { Container, Content } from './HeaderStyle';

export default function Header() {
  const [width, setWidth] = useState([0]);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth([window.innerWidth]);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <Container>
      <Content>
        {width < 769 ? (
          <nav>
            <Menu />
            <img src={logo} alt="logo" />
          </nav>
        ) : (
          <nav>
            <img src={logo} alt="logo" />
            <NavLink activeStyle={{ color: `${colors.primary}` }} to="/home">
              HOME
            </NavLink>
            <NavLink activeStyle={{ color: `${colors.primary}` }} to="/about">
              ABOUT ME
            </NavLink>
            <NavLink activeStyle={{ color: `${colors.primary}` }} to="/skills">
              SKILLS
            </NavLink>
          </nav>
        )}
      </Content>
    </Container>
  );
}
