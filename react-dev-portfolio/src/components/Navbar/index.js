import React, { useState } from 'react';
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../utils/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer'}}>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={toggleMobileMenu} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">GitHub Profile</GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={toggleMobileMenu}>About</MobileLink>
            <MobileLink href='#skills' onClick={toggleMobileMenu}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={toggleMobileMenu}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={toggleMobileMenu}>Projects</MobileLink>
            <MobileLink href='#education' onClick={toggleMobileMenu}>Education</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">GitHub Profile</GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
