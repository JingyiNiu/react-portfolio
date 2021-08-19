import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <div className='footer-container'>
      Copyright &copy; {new Date().getFullYear()} Zoey
    </div>
  );
};

export default Footer;
