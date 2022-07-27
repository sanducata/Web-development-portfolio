import classes from "./card.module.css";

function Card() {
  return (
    <div className={classes.card}>
      <h1>Social media app for designers</h1>
      <p>
        This was the final project for my bachelor's degree. I created it using
        the MERN stack and it was my first project built in React.
      </p>
      <p className={classes.seeMoreP}>Click to see more.</p>
      <div className={classes.buttons}>
        <div className={`${classes.button} ${classes.primary}`}>Demo</div>
        <div className={`${classes.button} ${classes.secondary}`}>Github</div>
      </div>
      <div className={classes.categories}>
        <div className={classes.category}>React</div>
        <div className={classes.category}>Express</div>
        <div className={classes.category}>NodeJS</div>
        <div className={classes.category}>MongoDB</div>
      </div>
    </div>
  );
}

export default Card;
