import React from "react";
import { useState } from "react";
import "./nav.scss";

const NavComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav>
      <div className="container">nav</div>
    </nav>
  );
};

export default NavComponent;
