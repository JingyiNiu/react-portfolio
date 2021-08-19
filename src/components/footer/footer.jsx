import React from "react";

import SocialMedias from "../social-medias/social-medias";

import "./footer.scss";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-top'></div>
      <div className='footer-bottom'>
        <div>Made By Zoey</div>
        <div>Copyright &copy; {new Date().getFullYear()}</div>
        <SocialMedias />
      </div>
    </div>
  );
};

export default Footer;
