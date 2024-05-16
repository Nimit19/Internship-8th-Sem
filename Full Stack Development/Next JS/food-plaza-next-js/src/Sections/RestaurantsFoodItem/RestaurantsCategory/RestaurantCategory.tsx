"use client";
import React, { useState } from "react";
import { Assets } from "@/assets";

const RestaurantCategory = ({
  restaurantFoodCategories,
  selectedFoodCategory,
}: any) => {
  const [isActive, setIsActive] = useState(false);

  const [selectedOption, setSelectedOption] = useState(selectedFoodCategory);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  const handleOptionClick = (optionText: any) => {
    setSelectedOption(optionText);
    setIsActive(false);
  };
  return (
    <>
      <div
        className="select-btn font-bold flex h-14 text-sm bg-white px-2 py-4  rounded-lg items-center cursor-pointer justify-between shadow-slate-400 border-2 lg:hidden"
        onClick={toggleMenu}
      >
        <p>{selectedOption}</p>
        <Assets.svgs.DROP_DOWN />
      </div>

      {isActive && (
        <div className="absolute top-full left-0 w-full  rounded-lg bg-white shadow-lg overflow-hidden">
          {restaurantFoodCategories &&
            restaurantFoodCategories.map((category: any) => {
              return (
                <p
                  className="flex cursor-pointer font-medium items-center text-sm px-5 py-4 bg-white hover:bg-gray-50 hover:text-primary border-b-2"
                  onClick={() => handleOptionClick(category.category_name)}
                >
                  {category.category_name}
                </p>
              );
            })}
        </div>
      )}

      <div className="hidden pt-8 lg:block ">
        {restaurantFoodCategories &&
          restaurantFoodCategories?.map((category: any) => {
            return (
              <p
                className={`${
                  selectedOption === category.slug ? "bg-primary" : null
                } flex cursor-pointer font-medium items-center text-md xl:text-lg bg-primary pl-2 pr-2 xl:pr-10 w-[25vw] xl:w-[20vw] py-4 bg-white hover:bg-primary hover:text-white mr-1`}
                onClick={() => handleOptionClick(category.category_name)}
                key={category.id}
              >
                {category.category_name}
              </p>
            );
          })}
      </div>
    </>
  );
};

export default RestaurantCategory;
