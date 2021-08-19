import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./social-medias.scss";

const SocialMedias = () => {
  return (
    <div className='social-medias-container'>
      <GitHubIcon className='social-media' />
      <LinkedInIcon className='social-media' />
    </div>
  );
};

export default SocialMedias;
