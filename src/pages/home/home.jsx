import React from "react";
import About from "../../components/about/about"
import Projects from "../../components/projects/projects";

const Home = () => {
  return (
    <div className='main-container'>
      <About/>
      <Projects/>
    </div>
  );
};

export default Home;
