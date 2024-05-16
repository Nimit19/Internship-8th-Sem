"use client";
import React from "react";
import Link from "next/link";

import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";

type NavLinkProp = {
  href: string;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProp> = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? ` ${classes.active}` : `${classes.link}`
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
