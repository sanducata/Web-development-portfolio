import classes from "./projectPage.module.css";

function ProjectPage({
  openProjectPage,
  closeProjectPage,
  title,
  extendedDescription,
  image,
  links,
  categories,
}) {
  return (
    <div
      className={
        !openProjectPage
          ? classes.overlay
          : `${classes.overlay} ${classes.overlayShow}`
      }
      onClick={closeProjectPage}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={
          !openProjectPage
            ? classes.projectPageContainer
            : `${classes.projectPageContainer} ${classes.projectPageContainerShow}`
        }
      >
        <div className={classes.closeButton} onClick={() => closeProjectPage()}>
          <div className={classes.xLine}></div>
          <div className={classes.xLine}></div>
        </div>

        <div className={classes.wrapper}>
          <h1 className={classes.projectTitle}>{title}</h1>

          <div className={classes.detailsAndPhotoDiv}>
            <div className={classes.side}>
              <img src={image} alt={image} />
            </div>
            <div className={classes.side}>
              <div className={classes.paragraphDiv}>
                <p className={classes.paragraphTitle}>Description</p>
                <p>{extendedDescription}</p>
              </div>

              <div className={classes.paragraphDiv}>
                <p className={classes.paragraphTitle}>Technologies used</p>
                <div className={classes.categories}>
                  {Array.isArray(categories) &&
                    categories.map((category, key) => {
                      return (
                        <div key={key} className={classes.category}>
                          {category}
                        </div>
                      );
                    })}
                </div>
              </div>

              {links.demo || links.github !== "" ? (
                <div className={classes.paragraphDiv}>
                  <p className={classes.paragraphTitle}>
                    {links.demo !== "" && links.github !== ""
                      ? "Application demo and source code"
                      : links.demo !== ""
                      ? "Application demo"
                      : "Source code"}
                  </p>
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
                        <div
                          className={`${classes.button} ${classes.secondary}`}
                        >
                          Github
                        </div>
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
