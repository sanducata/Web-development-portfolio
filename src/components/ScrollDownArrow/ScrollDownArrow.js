import classes from "./scrollDownArrow.module.css";

function ScrollDownArrow() {
  return (
    <>
      <div className={classes.scrollDownArrow}>
        <img
          className={classes.scrollDownArrowImage}
          src="http://localhost:3000/Images/scrollArrow.svg"
          alt="profileImage"
        />
      </div>
    </>
  );
}

export default ScrollDownArrow;
