import ScrollDownArrowImg from "../../assets/Images/scrollArrow.svg";

import classes from "./scrollDownArrow.module.css";

function ScrollDownArrow() {
  return (
    <>
      <div className={classes.scrollDownArrow}>
        <img
          className={classes.scrollDownArrowImage}
          src={ScrollDownArrowImg}
          alt="scrollDownArrow"
        />
      </div>
    </>
  );
}

export default ScrollDownArrow;
