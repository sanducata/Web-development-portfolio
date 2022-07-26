import { useContext } from "react";
import ProjectPageContext from "../../context/ProjectPageContext";
import WindowWidthContext from "../../context/WindowWidthContext";

import classes from "./card.module.css";

function Card({
  title,
  description,
  extendedDescription,
  image,
  links,
  categories,
  comingSoon,
}) {
  const { windowWidth } = useContext(WindowWidthContext);
  const { setProjectDetails, setOpenProjectPage } =
    useContext(ProjectPageContext);

  return (
    <>
      <div
        className={classes.card}
        onClick={() => {
          setOpenProjectPage(true);
          document.body.classList.add("overflowHidden");
          setProjectDetails({
            title: title,
            description: description,
            extendedDescription: extendedDescription,
            image: image,
            links: links,
            categories: categories,
          });
        }}
      >
        <div className={classes.cardTitleDiv}>
          {comingSoon ? <h1>{title}</h1> : <h1>{title}</h1>}
        </div>

        <div className={classes.cardDescriptionDiv}>
          {comingSoon ? (
            <>
              <p className={classes.comingSoonTitle}>&#60;Coming soon&#62;</p>
              {windowWidth > 768 ? (
                <div className={classes.comingSoonDescription}></div>
              ) : null}
            </>
          ) : (
            <>
              {windowWidth > 768 ? (
                <p className={classes.descriptionP}>{description}</p>
              ) : null}
            </>
          )}
          {comingSoon ? (
            <div className={classes.comingSoonSeeMore}></div>
          ) : (
            <p className={classes.seeMoreP}>Click for more details.</p>
          )}
        </div>

        <div className={classes.cardButtonsDiv}>
          {comingSoon ? (
            <div className={classes.comingSoonButtons}>
              <div className={classes.comingSoonButton}></div>
              <div className={classes.comingSoonButton}></div>
            </div>
          ) : (
            <div className={classes.buttons}>
              {links.demo !== "" ? (
                <a href={links.demo} target="_blank" rel="noreferrer">
                  <div className={`${classes.button} ${classes.primary}`}>
                    Demo
                  </div>
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
        </div>

        <div className={classes.cardCategoriesDiv}>
          {comingSoon ? (
            <div className={classes.comingSoonCategories}>
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
      </div>
    </>
  );
}

export default Card;
