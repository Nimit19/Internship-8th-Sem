import React from "react";
import PopularRecipesCategories from "./PopularRecipesCategories";
import FoodItemsByCategory from "./FoodItemsByCategory";

const PopularRecipesSection = () => {
  return (
    <>
      <PopularRecipesCategories />
      <FoodItemsByCategory />
    </>
  );
};

export default PopularRecipesSection;
