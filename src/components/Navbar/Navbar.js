import { Link } from "react-scroll";
import { navLinks } from "../NavbarLinks";

import classes from "./navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.logoDiv}>
          <div className={classes.logo}>
            <img
              className={classes.logoImg}
              src="http://localhost:3000/Images/CatalinSanduLogo.svg"
              alt="logo"
            />
          </div>
        </div>
        <div className={classes.buttonsDiv}>
          {navLinks.map((link) => {
            return (
              <Link to={link.title} key={link.id} smooth={true} duration={800}>
                <div className={classes.link}>{link.title}</div>
              </Link>
            );
          })}
        </div>
        <div className={classes.cvDiv}>
          <div className={classes.downloadCvButton}>Download CV</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
