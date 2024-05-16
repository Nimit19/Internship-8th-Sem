"use client";
import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="border border-primary text-primary rounded-full bottom-12  h-12 w-12 fixed right-12 shadow-md transition-all duration-500  flex items-center text-center justify-center hover:bg-primary hover:text-white opacity-75"
          style={{ cursor: "pointer" }}
          onClick={scrollToTop}
        >
          <KeyboardArrowUpIcon fontSize="medium" />
        </div>
      )}
    </>
  );
}
