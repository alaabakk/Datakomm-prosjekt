import { useContext } from "react";
import { AuthContext } from "../store/auth-context";

import classes from "./MainNavigation.module.css";

function PatientNavigation() {
  const { logout } = useContext(AuthContext);

  function logoutHandler() {
    logout("patient");
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Gruppe 4 Helsetjeneste</div>
      <nav>
        <ul>
          <li className={classes.actions}>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default PatientNavigation;
