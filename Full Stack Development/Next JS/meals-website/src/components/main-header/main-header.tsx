import Link from "next/link";
import logoImage from "@/assets/logo.png";

import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImage} alt="A plate with food on it..." priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
