import classes from "./navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.logoDiv}>
          <div className={classes.logo}>CATALIN SANDU</div>
        </div>
        <div className={classes.buttonsDiv}>
          <div className={classes.link}>Home</div>
          <div className={classes.link}>Work</div>
          <div className={classes.link}>Contact</div>
        </div>
        <div className={classes.cvDiv}>
          <div className={classes.downloadCvButton}>Download CV</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
