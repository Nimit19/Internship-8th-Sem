"use client";
import React, { useState } from "react";
import PopularRecipesCategories from "./PopularRecipesCategories";
import FoodItemsByCategory from "./FoodItemsByCategory";

type PropType = {
  popularFoodCategory: { food_category_name: string; id: number }[];
};

const PopularRecipesSection: React.FC<PropType> = ({ popularFoodCategory }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(
    popularFoodCategory[0].id
  );

  const changeCategoryHandler = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };
  return (
    <>
      <PopularRecipesCategories
        popularFoodCategory={popularFoodCategory}
        onChangeCategory={changeCategoryHandler}
      />
      <FoodItemsByCategory categoryId={selectedCategoryId} />
    </>
  );
};

export default PopularRecipesSection;
