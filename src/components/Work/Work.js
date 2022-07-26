import Carousel from "../Carousel/Carousel";

import classes from "./work.module.css";

function Work() {
  return (
    <div className={classes.workContainer} id="Work">
      <Carousel />
    </div>
  );
}

export default Work;
