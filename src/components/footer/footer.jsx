import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-top'></div>
      <div className='footer-bottom'>
        Copyright &copy; {new Date().getFullYear()} Zoey
      </div>
    </div>
  );
};

export default Footer;
