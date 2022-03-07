import React from "react";
import "./footer.scss"

import SocialMedias from "../social-medias/social-medias";

const Footer = () => {
  return (
    <footer>
      <div className="container d-flex">
        madeby jingyi copyright
        <SocialMedias />
      </div>
    </footer>
  );
};

export default Footer;
