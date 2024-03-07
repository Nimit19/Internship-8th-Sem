import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? classes.active : "";
            }}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? classes.active : "undefined"
            }
          >
            Product
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
