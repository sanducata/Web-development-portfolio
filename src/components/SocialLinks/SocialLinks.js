import classes from "./socialLinks.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function SocialLinks() {
  return (
    <>
      <hr className={classes.bottomLineLeft} />
      <hr className={classes.bottomLineRight} />
      <hr className={classes.rightLine} />
      <div className={classes.socialDiv}>
        <a
          className={classes.socialLinksA}
          href="https://www.linkedin.com/in/catalin-sandu-15076b138/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className={classes.icon} />
        </a>
        <a
          className={classes.socialLinksA}
          href="https://github.com/sanducata"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className={classes.icon} />
        </a>
      </div>
    </>
  );
}

export default SocialLinks;
