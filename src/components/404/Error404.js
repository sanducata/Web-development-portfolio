import { Link as RouterLink } from "react-router-dom";
import Error404Image from "../../assets/Images/404.svg";

import classes from "./error404.module.css";

function Error404() {
  return (
    <div className={classes.error404}>
      <div className={classes.error404Card}>
        <div className={classes.errorImageDiv}>
          <img
            className={classes.errorImage}
            src={Error404Image}
            alt="Error404Image"
          />
        </div>
        <h1>Oops!</h1>
        <p>Looks like you got lost. Let's take you back to the main page.</p>
        <RouterLink to="/" className={classes.routerLink}>
          <div className={classes.goBackButton}>Go back</div>
        </RouterLink>
      </div>
    </div>
  );
}

export default Error404;
