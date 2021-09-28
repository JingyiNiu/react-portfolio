import React, { useEffect, useState } from "react";

import { BackToTopContainer } from "./back-to-top.styles";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  });

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <BackToTopContainer onClick={backToTop}>TOP</BackToTopContainer>
      )}
    </>
  );
};

export default BackToTop;
