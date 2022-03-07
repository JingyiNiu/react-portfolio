import React from "react";
import About from "../../components/home/about/about"
import Skills from "../../components/home/skills/skills"
import Projects from "../../components/home/projects/projects";
import Contact from "../../components/home/contact/contact"
import Testimonials from "../../components/home/testimonials/testimonials"

const HomePage = () => {
  return (
    <div className='container'>
      <About/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <Contact />
    </div>
  );
};

export default HomePage;
