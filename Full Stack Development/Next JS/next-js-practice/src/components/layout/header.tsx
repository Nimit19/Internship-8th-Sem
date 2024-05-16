"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const isActive = usePathname();
  return (
    <nav className="text-3xl">
      Header Of Next JS:
      <div></div>
      <Link href={"/product"}>Products</Link>:&nbsp;
      {isActive.startsWith("/product") ? "Active" : "UnActive"}&nbsp;
      <Link href={"/blog"}>blog</Link>:&nbsp;
      {isActive.startsWith("/blog") ? "Active" : "UnActive"}&nbsp;
      <Link href={"/docs"}>docs</Link>:&nbsp;
      {isActive.startsWith("/docs") ? "Active" : "UnActive"}&nbsp;
      <div></div>
      Active Link:{isActive}
    </nav>
  );
};

export default Header;
