"use client";
import { Button } from "@/components/ui/button";
import useWindowWidth from "@/hooks/useWindowWith";
import ContentWrapper from "@/Layouts/ContentWrapper";
import React, { useState } from "react";

type PropType = {
  popularFoodCategory: { food_category_name: string | null; id: number }[];

  onChangeCategory: (categoryId: number) => void;
};

const PopularRecipesCategories: React.FC<PropType> = ({
  popularFoodCategory,
  onChangeCategory,
}) => {
  const windowWidth = useWindowWidth();
  const [selectedCategory, setSelectedCategory] = useState<number>(
    popularFoodCategory[0].id
  );

  return (
    <ContentWrapper>
      <p className="font-bold text-center  w-full text-3xl md:text-5xl my-5 md:my-10 lg:my-10 ">
        Popular Recipes
      </p>
      <div className=" flex justify-center">
        <div className="flex justify-start gap-3 overflow-x-auto no-scrollbar ">
          {popularFoodCategory &&
            popularFoodCategory.map((data) => {
              return (
                <Button
                  key={data.id}
                  intent={"soft"}
                  rounded={"full"}
                  size={windowWidth < 768 ? "sm" : "md"}
                  className={`min-h-[35px] min-w-[100px] md:h-[55px] md:w-[150px] ${
                    selectedCategory === data.id
                      ? "bg-secondary text-white"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(data.id);
                    onChangeCategory(data.id);
                  }}
                >
                  {data.food_category_name}
                </Button>
              );
            })}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default PopularRecipesCategories;
