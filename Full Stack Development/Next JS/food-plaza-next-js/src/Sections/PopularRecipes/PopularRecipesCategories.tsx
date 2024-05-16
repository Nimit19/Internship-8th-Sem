"use client";
import { Button } from "@/components/ui/button";
import ContentWrapper from "@/Layouts/ContentWrapper";
import React, { useEffect, useState } from "react";

const dummyData = ["Pizza", "Sides", "Chicken", "Dessert", "Drinks"];

const PopularRecipesCategories = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const updateWindowWidth = () => {
    setWindowWidth(typeof window !== "undefined" ? window.innerWidth : 0);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateWindowWidth);
      return () => {
        window.removeEventListener("resize", updateWindowWidth);
      };
    }
  }, []);

  return (
    <ContentWrapper>
      <p className="font-bold text-center  w-full text-3xl md:text-5xl my-5 md:my-10 lg:my-10 ">
        Popular Recipes
      </p>
      <div className=" flex justify-center">
        <div className="flex justify-start gap-3 overflow-x-auto no-scrollbar ">
          {dummyData.map((data) => {
            return (
              <Button
                intent={"soft"}
                rounded={"full"}
                size={windowWidth < 768 ? "sm" : "md"}
                className="min-h-[35px] min-w-[100px] md:h-[55px] md:w-[150px]"
              >
                {data}
              </Button>
            );
          })}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default PopularRecipesCategories;
