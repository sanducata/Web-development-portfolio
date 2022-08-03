import { useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { navLinks } from "../NavbarLinks";
import WindowWidthContext from "../../context/WindowWidthContext";
import Logo from "../../assets/Images/CatalinSanduLogo.svg";
import CV from "../../assets/CV/CV.pdf";

import classes from "./navbar.module.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Navbar() {
  const { windowWidth } = useContext(WindowWidthContext);

  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.logoDiv}>
          <ScrollLink
            to="Home"
            smooth={true}
            duration={800}
            className={classes.logoLink}
          >
            <div className={classes.logo}>
              <img className={classes.logoImg} src={Logo} alt="logo" />
            </div>
          </ScrollLink>
        </div>

        {windowWidth > 768 ? (
          <>
            <div className={classes.buttonsDiv}>
              {navLinks.map((link) => {
                return (
                  <ScrollLink
                    to={link.title}
                    key={link.id}
                    smooth={true}
                    duration={800}
                  >
                    <div className={classes.link}>{link.title}</div>
                  </ScrollLink>
                );
              })}
            </div>
            <div className={classes.cvDiv}>
              <a href={CV} download="CV Catalin Sandu">
                <div className={classes.downloadCvButton}>Download CV</div>
              </a>
            </div>
          </>
        ) : (
          <HamburgerMenu />
        )}
      </div>
    </>
  );
}

export default Navbar;
