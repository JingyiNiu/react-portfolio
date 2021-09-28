import React from "react";

import { FooterContainer } from "./footer.styles";
import SocialMedias from "../social-medias/social-medias";

const Footer = () => {
  return (
    <FooterContainer>
      <div>Made By Jingyi</div>
      <div>Copyright &copy; {new Date().getFullYear()}</div>
      <SocialMedias />
    </FooterContainer>
  );
};

export default Footer;
