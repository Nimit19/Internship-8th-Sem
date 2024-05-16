import React from "react";
import RestaurantCategory from "./RestaurantsCategory/RestaurantCategory";
import HeaderText from "@/components/ui/header-text";
import { Button } from "@/components/ui/button";
import ContentWrapper from "@/Layouts/ContentWrapper";
import RestaurantFoodItem from "./RestaurantsCategory/RestaurantFoodItem";

const RestaurantFoodItemSection = ({
  restaurantFoodCategories,
  selectedFoodCategory,
}: any) => {
  return (
    <ContentWrapper className="lg:w-[65vw] m-auto">
      <div className="mt-10 mb-3">
        <HeaderText text="Order Online " />
        <div className=" w-full lg:flex lg:justify-start">
          <div className="relative pb-4 ">
            <RestaurantCategory
              restaurantFoodCategories={restaurantFoodCategories}
            />
          </div>
          <div className=" lg:border-l-2 lg:border-primary lg:pl-6">
            <div className="hidden lg:block">
              <HeaderText text={"okay"} />
            </div>
            <div className="flex flex-col gap-5 h-[75vh] lg:h-[60vh]   overflow-y-auto ">
              <RestaurantFoodItem />
              <RestaurantFoodItem />
              <RestaurantFoodItem />
              <RestaurantFoodItem />
              <RestaurantFoodItem />
              <RestaurantFoodItem />
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default RestaurantFoodItemSection;
