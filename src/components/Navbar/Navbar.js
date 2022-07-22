import { useEffect, useRef, useState } from "react";
import "./style.css";

function Navbar() {
  const navbar = useRef(null);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (
        currentScroll > lastScroll &&
        !navbar.current.classList.contains("navbarHidden")
      ) {
        navbar.current.classList.add("navbarHidden");
      } else if (
        currentScroll < lastScroll &&
        navbar.current.classList.contains("navbarHidden")
      ) {
        navbar.current.classList.remove("navbarHidden");
      }

      setLastScroll(currentScroll);
    });
  }, [lastScroll]);
  return (
    <>
      <div className="navbar" ref={navbar}>
        <div className="logoDiv">
          <div className="logo">CATALIN SANDU</div>
        </div>
        <div className="buttonsDiv">
          <div className="link">Home</div>
          <div className="link">Work</div>
          <div className="link">Contact</div>
        </div>
        <div className="cvDiv">
          <div className="downloadCvButton">Download CV</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
