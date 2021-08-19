import React from "react";
import ProjectPreview from "../../components/project-preview/project-preview";

import "./projects.scss";

const Projects = () => {
  return (
    <div className='main-container'>
      <div className='page-title'>My Projects</div>
      <div className='project-grid'>
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
        <ProjectPreview />
      </div>
    </div>
  );
};

export default Projects;
