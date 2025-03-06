import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoName = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: 0.5px;
  overflow: hidden;
  white-space: nowrap;
  font-family: 'Fira Code', monospace;
  position: relative;

  .component {
    color: transparent;
    -webkit-text-stroke: 2px var(--accent);
  }

  .bracket {
    color: var(--accent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 4px;
    background: var(--accent);
    transform-origin: left;
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 8px var(--accent);
  }

  &:hover::after {
    width: 100%;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(motion.li)`
  cursor: pointer;
`;

const NavLink = styled.a`
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    color: var(--text-primary);
  }
`;

const Navigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Nav>
      <NavContainer>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
        >
          <LogoName
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="bracket">&lt;</span>
            <span className="component">BB</span>
            <span className="bracket">/&gt;</span>
          </LogoName>
        </Logo>
        
        <NavList>
          <NavItem
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink onClick={() => scrollToSection('home')}>Home</NavLink>
          </NavItem>
          <NavItem
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink onClick={() => scrollToSection('skills')}>Umiejętności</NavLink>
          </NavItem>
          <NavItem
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink onClick={() => scrollToSection('experience')}>Doświadczenie</NavLink>
          </NavItem>
          <NavItem
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink onClick={() => scrollToSection('projects')}>Projekty</NavLink>
          </NavItem>
          <NavItem
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink onClick={() => scrollToSection('contact')}>Kontakt</NavLink>
          </NavItem>
        </NavList>
      </NavContainer>
    </Nav>
  );
};

export default Navigation; 