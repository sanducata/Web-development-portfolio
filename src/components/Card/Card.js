import classes from "./card.module.css";

function Card({ title, description, links, categories }) {
  return (
    <div className={classes.card}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p className={classes.seeMoreP}>Click to see more.</p>
      <div className={classes.buttons}>
        {links.demo !== "" ? (
          <a href={links.demo} target="_blank" rel="noreferrer">
            <div className={`${classes.button} ${classes.primary}`}>Demo</div>
          </a>
        ) : null}
        {links.github !== "" ? (
          <a href={links.github} target="_blank" rel="noreferrer">
            <div className={`${classes.button} ${classes.secondary}`}>
              Github
            </div>
          </a>
        ) : null}
      </div>
      <div className={classes.categories}>
        {categories.map((category, key) => {
          return (
            <div key={key} className={classes.category}>
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
