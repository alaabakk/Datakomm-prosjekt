import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/auth-context";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const { logout } = useContext(AuthContext);

  function logoutHandler() {
    logout("nurse");
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Gruppe 4 Helsetjeneste</div>
      <nav>
        <ul>
          <li><Link to="/">All Patients</Link></li>
          <li>
            <Link to="/favorites">
              Your Patients
              <span className={classes.badge}> {favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
          <li><Link to="/new-meetups">Add New Patient</Link></li>
          <li className={classes.actions}><button onClick={logoutHandler}>Logout</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
