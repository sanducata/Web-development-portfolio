import Carousel from "../Carousel/Carousel";

import classes from "./work.module.css";

function Work() {
  return (
    <div className={classes.workContainer} id="Work">
      <div className={classes.workWrapper}>
        <h1 className={classes.workTitle}>Projects</h1>
        <p className={classes.workSubtitle}>
          Here you can see the projects I've worked on.
        </p>
        <Carousel />
      </div>
    </div>
  );
}

export default Work;
