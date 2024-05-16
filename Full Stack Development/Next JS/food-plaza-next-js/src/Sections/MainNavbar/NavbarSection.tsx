"use client";
import ContentWrapper from "@/Layouts/ContentWrapper";
import { AppRoute } from "@/routes/routes";
import Link from "next/link";
import React, { useState } from "react";

const NavbarSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <ContentWrapper>
        <div className="flex flex-wrap items-center justify-between mx-auto py-4">
          <Link
            href={AppRoute.HOME_PAGE}
            className="flex items-center space-x-3 "
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Food Plaza
            </span>
          </Link>

          <div className="hidden md:flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <ul className="flex flex-row font-medium space-x-4">
              <li>
                <Link
                  href={AppRoute.HOME_PAGE}
                  className="block py-2 px-3 rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={AppRoute.MENU_PAGE}
                  className="block py-2 px-3 rounded"
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  href={AppRoute.CART_PAGE}
                  className="block py-2 px-3 rounded"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  href={AppRoute.ORDER_PAGE}
                  className="block py-2 px-3 rounded"
                >
                  Orders
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <p className="hidden md:block pr-4">Account</p>
            <img
              className="w-8 h-8 rounded-full"
              src="https://avatars.githubusercontent.com/u/84677205?v=4"
              alt="user photo"
            />

            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-500 rounded-lg md:hidden hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 dark:text-yellow-400 "
              aria-controls="navbar-user"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-5 h-5 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:hidden w-full`}
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 mt-4 border-2 border-yellow-200 rounded-lg bg-yellow-100 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3  rounded">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded ">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </nav>
  );
};

export default NavbarSection;
