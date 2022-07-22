import "./style.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function SocialLinks() {
  return (
    <div className="socialBorders">
      <div className="rightDiv"></div>
      <div className="leftDiv"></div>
      <div>
        <a
          className="socialLinksA"
          href="https://www.linkedin.com/in/catalin-sandu-15076b138/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a
          className="socialLinksA"
          href="https://github.com/sanducata"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className="icon" />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
