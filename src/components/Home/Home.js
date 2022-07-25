import ScrollDownArrow from "../ScrollDownArrow/ScrollDownArrow";

import classes from "./home.module.css";

function Home() {
  return (
    <div className={classes.homeContainer} id="Home">
      <div className={classes.profileImageDiv}>
        <img
          className={classes.profileImage}
          src="http://localhost:3000/Images/IMG_3318.JPG"
          alt="profileImage"
        />
      </div>
      <div className={classes.profileImageDiv1}></div>
      <div className={classes.heroSectionDetails}>
        <p className={classes.myNameIsP}>Hi, my name is</p>
        <h1 className={classes.nameH1}>Catalin Sandu</h1>
        <p className={classes.subtitleP}>
          I'm a <span className={classes.colorSpan}>web developer</span> based
          in Sibiu and I like to build unique user interfaces.
        </p>
        <div className={classes.workButton}>Work</div>
      </div>
      <ScrollDownArrow />
    </div>
  );
}

export default Home;
