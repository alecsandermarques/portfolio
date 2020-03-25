import bodyScroll from 'body-scroll-toggle';
import React, { useEffect } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import colors from '../../colors';
import useComponentVisible from '../../hooks/useComponentVisible';
import { Container } from './MenuStyle';

export default function Menu() {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  useEffect(() => {
    if (isComponentVisible) {
      bodyScroll.disable();
    } else {
      bodyScroll.enable();
    }
  }, [isComponentVisible]);

  return (
    <Container visible={isComponentVisible}>
      <button type="button" onClick={setIsComponentVisible}>
        {isComponentVisible ? (
          <MdClose size={26} color="#fff" />
        ) : (
          <MdMenu size={26} color="#fff" />
        )}
      </button>

      {isComponentVisible ? (
        <>
          <div ref={ref}>
            <NavLink activeStyle={{ color: `${colors.primary}` }} to="/home">
              HOME
            </NavLink>
            <NavLink activeStyle={{ color: `${colors.primary}` }} to="/about">
              ABOUT ME
            </NavLink>
            <NavLink activeStyle={{ color: `${colors.primary}` }} to="/skills">
              SKILLS
            </NavLink>
          </div>
          <div />
        </>
      ) : null}
    </Container>
  );
}
