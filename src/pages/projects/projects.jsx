import React from "react";
import ProjectPreview from "../../components/project-preview/project-preview";

import "./projects.scss";

const Projects = () => {
  return (
    <div className='main-container'>
      <h1>My Projects</h1>
      <ProjectPreview />
    </div>
  );
};

export default Projects;
