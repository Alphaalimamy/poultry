import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  LogoTitle,
  LogoSubtitle,
  NavMenu,
  MobileIcon,
  NavLinks,
} from "./Header.elements";
import "./Header.css";
const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div>
      <header className="header">
        <LogoTitle>
          <LogoSubtitle>PP</LogoSubtitle>SL
        </LogoTitle>

        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="about">About</NavLinks>
          <NavLinks to="services">Services</NavLinks>
          <NavLinks to="blogs">Blogs</NavLinks>
          <NavLinks to="team">Team</NavLinks>
          <NavLinks to="contact">Contact</NavLinks>
        </NavMenu>
      </header>
    </div>
  );
};

export default Header;
