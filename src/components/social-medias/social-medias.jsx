import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { SocialMediaContainer, IconLink } from "./social-medias.styles";

const SocialMedias = () => {
  return (
    <SocialMediaContainer>
      <IconLink href='https://github.com/JingyiNiu'>
        <GitHubIcon />
      </IconLink>

      <IconLink href='https://www.linkedin.com/in/jingyi-niu-5b81b720a/'>
        <LinkedInIcon />
      </IconLink>
    </SocialMediaContainer>
  );
};

export default SocialMedias;
