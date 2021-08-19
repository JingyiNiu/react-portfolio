import React from "react";

import "./project-preview.scss";

const ProjectPreview = () => {
  return (
    <div className='project-preview'>
      <div className='pp-image'>
        <img
          src='https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          alt='preview'
        />
      </div>
      <div className='pp-title'>Project Name</div>
      <div className='pp-details'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab repellat
        voluptates, consequatur voluptatum provident debitis harum, iste quam
        rem delectus voluptatibus neque, nobis sapiente velit impedit
        cupiditate. Facilis consequuntur magnam rem commodi aliquid est ex esse,
        olorem quasi ducimus provident possimus nemo molestias quia commodi,
        labore blanditiis. Voluptatem, quam corporis!
      </div>
      <button className='button'>View Project</button>
    </div>
  );
};

export default ProjectPreview;
