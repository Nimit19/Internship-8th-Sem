import { Assets } from "@/assets";
import { Tables } from "@/types/supabase";
import Image from "next/image";
import React from "react";

type PropType = {
  foodItem: Tables<"food_items">;
};

const PopularFoodItemCard: React.FC<PropType> = ({ foodItem }) => {
  return (
    <div className="border-2 border-[#ECEEF6] flex flex-col items-center relative rounded-md md:rounded-xl min-w-48 h-[285px] md:min-w-80 md:h-[475px] p-2 md:p-6">
      <img
        className="w-32 h-32 md:w-56 md:h-56 rounded-full"
        src={foodItem.image_url || ""}
        alt={foodItem.food_name || "Not Found Image"}
      />
      <p className="flex justify-between items-center w-full pt-4 md:pt-8">
        <span className="text-sm font-semibold md:text-lg">
          {foodItem.food_name}
        </span>
        <span className="text-xs font-semibold md:text-sm">{"15 min"}</span>
      </p>
      <div className="w-full">
        <p className="text-xs md:text-sm text-gray-400">
          {foodItem.description}
        </p>
      </div>
      <p className="text-md md:text-xl font-normal  absolute bottom-9 md:bottom-16">
        {foodItem.price} ₹
      </p>
      <div className="absolute  bg-white border-[#ECEEF6] border-r-2 border-b-2 h-14 w-14 md:h-20 md:w-20 transform rotate-45  rounded-br-[20px] md:rounded-br-[28px] bottom-[-29px] md:bottom-[-41px] z-2"></div>
      <div className="absolute  flex justify-center items-center border-[#ECEEF6] border-2 h-10 w-10 md:w-14 md:h-14 rounded-full bottom-[-25px] md:bottom-[-30px]  z-5  ">
        <Image
          className="w-3 h-3 md:w-4 md:h-4"
          src={Assets.pngs.CART_LOGO}
          alt="cart"
        />
      </div>
    </div>
  );
};

export default PopularFoodItemCard;
