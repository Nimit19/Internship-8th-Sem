import { Assets } from "@/assets";
import ContentWrapper from "@/Layouts/ContentWrapper";
import Image from "next/image";
import React from "react";
import RestaurantDetailsSection from "./RestaurantDetailsSection";
import RestaurantMenuSection from "./RestaurantMenuSection";
import { notFound } from "next/navigation";
import { getRestaurant } from "@/app/actions/restaurants/restaurants";
import RestaurantCategorySection from "../RestaurantsFoodItem/RestaurantsCategory/RestaurantCategorySection";

type PropsType = {
  id: number;
};
const Restaurant: React.FC<PropsType> = async ({ id }) => {
  const { restaurant, error } = await getRestaurant(id);

  if (!restaurant) {
    notFound();
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-x-[0.50vh]  ">
        <Image
          className="h-[25vh] sm:h-[35vh] lg:h-[41vh] xl:h-[50vh] w-full row-start-1 row-end-3 object-cover"
          src={Assets.images.LEFT_BG}
          alt="no image"
        />
        <Image
          className="h-[12.25vh] sm:h-[17vh] lg:h-[20.75vh] xl:h-[24.75vh] w-full col-start-2 col-end-3 row-start-1 row-end-2 object-cover"
          src={Assets.images.RIGHT_BG_1}
          alt="no image"
        />
        <Image
          className="h-[12.25vh] sm:h-[17vh] lg:h-[20.75vh] xl:h-[24.75vh] w-full col-start-2 col-end-3 row-start-2 row-end-3 object-cover  self-end"
          src={Assets.images.RIGHT_BG_2}
          alt="no image"
        />
      </div>
      <ContentWrapper className="lg:w-[65vw] m-auto">
        <RestaurantDetailsSection restaurant={restaurant} />
        <RestaurantMenuSection />
      </ContentWrapper>
    </>
  );
};

export default Restaurant;
