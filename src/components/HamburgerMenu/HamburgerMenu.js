import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../NavbarLinks";
import CV from "../../assets/CV/CV.pdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import classes from "./hamburgerMenu.module.css";

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add("overflowHidden")
      : document.body.classList.remove("overflowHidden");
  }, [isMenuOpen]);

  return (
    <div className={classes.hamburgerMenuContainer}>
      <div
        className={
          !isMenuOpen
            ? classes.overlay
            : `${classes.overlay} ${classes.overlayShow}`
        }
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div
        className={classes.hamburgerMenuDiv}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={
            !isMenuOpen
              ? classes.hamburgerMenuLine
              : `${classes.hamburgerMenuLine} ${classes.clicked}`
          }
        ></div>
        <div
          className={
            !isMenuOpen
              ? classes.hamburgerMenuLine
              : `${classes.hamburgerMenuLine} ${classes.clicked}`
          }
        ></div>
      </div>
      <ul
        className={
          !isMenuOpen
            ? classes.hamburgerMenuContent
            : `${classes.hamburgerMenuContent} ${classes.hamburgerMenuContentOpen}`
        }
      >
        {navLinks.map((link) => {
          return (
            <Link to={link.title} key={link.id} smooth={true} duration={800}>
              <li onClick={() => setIsMenuOpen(false)}>{link.title}</li>
            </Link>
          );
        })}
        <div className={classes.cvDiv}>
          <a href={CV} download="CV Catalin Sandu">
            <div className={classes.downloadCvButton}>Download CV</div>
          </a>
        </div>
        <div className={classes.findMeOnDiv}>
          <p>Find me on</p>
          <div className={classes.socialDiv}>
            <a
              className={classes.socialLinksA}
              href="https://www.linkedin.com/in/catalin-sandu-15076b138/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className={classes.icon} />
            </a>
            <a
              className={classes.socialLinksA}
              href="https://github.com/sanducata"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className={classes.icon} />
            </a>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
