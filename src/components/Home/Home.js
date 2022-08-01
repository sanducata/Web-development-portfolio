import { Link } from "react-scroll";
import { useContext } from "react";
import WindowWidthContext from "../../context/WindowWidthContext";
import ScrollDownArrow from "../ScrollDownArrow/ScrollDownArrow";
import ProfileImage from "../../assets/Images/IMG_3318.jfif";

import classes from "./home.module.css";

function Home() {
  const { windowWidth } = useContext(WindowWidthContext);

  return (
    <div className={classes.homeContainer} id="Home">
      <div className={classes.homeWrapper}>
        <div className={classes.heroSectionDetails}>
          <p className={classes.myNameIsP}>Hi, my name is</p>
          <h1 className={classes.nameH1}>Catalin Sandu</h1>
          <p className={classes.subtitleP}>
            I'm a <span className={classes.colorSpan}>web developer</span> based
            in Sibiu and I like to build unique user interfaces.
          </p>
          <Link to="Work" smooth={true} duration={800}>
            <div className={classes.workButton}>Work</div>
          </Link>
        </div>
        <div className={classes.profileImageDiv}>
          <img
            className={classes.profileImage}
            src={ProfileImage}
            alt="profileImage"
          />
          <div className={classes.profileImageDiv1}></div>
        </div>
        {windowWidth > 768 ? <ScrollDownArrow /> : null}
      </div>
    </div>
  );
}

export default Home;
