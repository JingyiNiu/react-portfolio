import React from "react";
import { useState } from "react";
import {
  HeaderContainer,
  LogoLink,
  HeaderRightContainer,
  HeaderLink,
} from "./header.styles";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <HeaderContainer>
      <LogoLink to='/'>Jingyi's Portfolio</LogoLink>

      <HeaderRightContainer>
        <HeaderLink to='#'>Home</HeaderLink>
        <HeaderLink to='#about'>About</HeaderLink>
        <HeaderLink to='#projects'>Projects</HeaderLink>
        <HeaderLink to='#contact'>Contact</HeaderLink>
      </HeaderRightContainer>
    </HeaderContainer>
  );
};

export default Header;
