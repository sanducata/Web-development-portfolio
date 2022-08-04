import classes from "./projectPage.module.css";

function ProjectPage({
  openProjectPage,
  closeProjectPage,
  title,
  description,
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
        <h1 className={classes.projectTitle}>{title}</h1>

        <p>{description}</p>
        <p>{links.github}</p>
        <p>{categories}</p>
      </div>
    </div>
  );
}

export default ProjectPage;
