import { Button } from "@/components/ui/button";
import { Json } from "@/types/supabase";
import React from "react";

type PropsType =
  | {
      restaurant: {
        address: Json;
        average_cost: string;
        closing_time: string;
        is_open: boolean;
        latitude: number;
        longitude: number;
        opening_time: string;
        ratings: number;
        shop_bg: Json;
        shop_description: string;
        shop_logo_url: string;
        shop_name: string;
      };
    }
  | any;

const RestaurantDetailsSection: React.FC<PropsType> = async ({
  restaurant,
}) => {
  const {
    shop_name,
    shop_description,
    shop_logo_url,
    shop_bg,
    is_open,
    average_cost,
    ratings,
    address,
    opening_time,
    closing_time,
    latitude,
    longitude,
  } = restaurant;
  return (
    <div className="my-4 flex flex-col items-center lg:flex-row lg:gap-10 lg:items-start lg:mt-16 lg:mb-10 ">
      <img
        className="w-44 h-44 lg:w-56 lg:h-56 rounded-full"
        src={shop_logo_url}
        alt={shop_name}
      />
      <div className="pt-5 flex items-center flex-col text-sm lg:col-span-2 lg:items-start lg:pt-5 lg:justify-start lg:gap-3">
        <p className="text-lg font-bold lg:text-4xl"> {shop_name}</p>
        <p className="flex flex-col items-center text-[#999999] lg:items-start lg:flex-row lg:gap-14 lg:text-md">
          <span>{shop_description}</span>
          <span>{average_cost}</span>
        </p>
        <p className="text-[#999999] lg:text-md">
          {address.city}, {address.state}
        </p>
        <p className="flex items-center flex-col text-[#999999] lg:flex-row-reverse lg:gap-3 lg:text-md">
          <span>
            {" "}
            {opening_time} – {closing_time} (Today)
          </span>
          <span>{is_open ? "Open now" : "Close"}</span>
        </p>
        <div className="flex gap-2 py-2 lg:w-[500px]">
          <Button
            intent="secondary"
            className="text-xs sm:text-sm lg:text-md lg:w-full"
          >
            Order Online
          </Button>
          <Button
            intent="secondary"
            className="text-xs sm:text-sm lg:text-md lg:w-full"
          >
            Directions
          </Button>
          <Button
            intent="secondary"
            className="text-xs sm:text-sm lg:text-md lg:w-full"
          >
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailsSection;
