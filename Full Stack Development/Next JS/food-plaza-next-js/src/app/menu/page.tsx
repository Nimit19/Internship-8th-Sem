import ContentWrapper from "@/Layouts/ContentWrapper";
import FoodItemByWeatherSection from "@/Sections/FoodItemByWeather/FoodItemByWeatherSection";
import MenuSection from "@/Sections/Menu";
import React from "react";

const MenuPage = () => {
  return (
    <ContentWrapper>
      <MenuSection />
      <FoodItemByWeatherSection />
    </ContentWrapper>
  );
};

export default MenuPage;
