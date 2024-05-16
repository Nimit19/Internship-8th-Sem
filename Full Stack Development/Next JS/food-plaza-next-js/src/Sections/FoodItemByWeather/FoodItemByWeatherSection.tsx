import FoodItemByWeather from "@/components/FoodItemByWeather/FoodItemByWeather";
import HeaderText from "@/components/ui/header-text";
import React from "react";

const FoodItemByWeatherSection = () => {
  return (
    <div>
      <HeaderText text="Food according to weather" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        <FoodItemByWeather />
        <FoodItemByWeather />
        <FoodItemByWeather />
        <FoodItemByWeather />
        <FoodItemByWeather />
        <FoodItemByWeather />
      </div>
    </div>
  );
};

export default FoodItemByWeatherSection;
