import classes from "./card.module.css";

function Card({ title, description, links, categories, comingSoon }) {
  return (
    <div className={classes.card}>
      {comingSoon ? (
        <h1>
          {title}
          <span className={classes.comingSoonTitle}>
            {" "}
            &#60;Coming soon&#62;
          </span>
        </h1>
      ) : (
        <h1>{title}</h1>
      )}

      {comingSoon ? (
        <>
          <div className={classes.comingSoonDescription}></div>
          <div className={classes.comingSoonDescription2}></div>
        </>
      ) : (
        <p>{description}</p>
      )}
      {comingSoon ? (
        <div className={classes.comingSoonSeeMore}></div>
      ) : (
        <p className={classes.seeMoreP}>Click to see more.</p>
      )}
      {comingSoon ? (
        <div className={classes.comingSoonButtons}>
          <div className={classes.comingSoonButton}></div>
          <div className={classes.comingSoonButton}></div>
        </div>
      ) : (
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
      )}
      {comingSoon ? (
        <div className={classes.comingSoonCategories}>
          <div className={classes.comingSoonCategory}></div>
          <div className={classes.comingSoonCategory}></div>
          <div className={classes.comingSoonCategory}></div>
          <div className={classes.comingSoonCategory}></div>
        </div>
      ) : (
        <div className={classes.categories}>
          {categories.map((category, key) => {
            return (
              <div key={key} className={classes.category}>
                {category}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Card;
