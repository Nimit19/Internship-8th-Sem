import React from "react";
import FoodItem from "./FoodItem";
import { getRestaurantFoodItemsByCategory } from "@/actions/restaurants/restaurants";
import { notFound } from "next/navigation";

const RestaurantFoodItems = async ({ selectedFoodCategory }: any) => {
  const { foodItems, error } = await getRestaurantFoodItemsByCategory(
    selectedFoodCategory.id
  );

  if (!foodItems) {
    notFound();
  }
  return (
    <div className=" lg:border-l-2 lg:border-primary lg:pl-6">
      <div className="hidden lg:block">
        <p className="text-xl font-semibold">
          {selectedFoodCategory.category_name}
        </p>
      </div>

      <div className="pt-10 flex flex-col gap-5 h-[75vh] lg:h-[60vh] overflow-y-auto no-scrollbar">
        {foodItems.map((foodItem) => {
          return <FoodItem key={foodItem.id} foodItem={foodItem} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantFoodItems;
