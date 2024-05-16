import Restaurant from "@/Sections/Restaurants";
import React from "react";

type PropsType = {
  params: {
    id: number;
  };
};
const RestaurantPage = ({ params }: PropsType) => {
  return <Restaurant id={params.id} />;
};

export default RestaurantPage;
