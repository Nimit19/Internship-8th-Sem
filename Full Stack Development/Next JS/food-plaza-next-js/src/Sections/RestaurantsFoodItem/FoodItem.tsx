import { Button } from "@/components/ui/button";
import React from "react";
import { Tables } from "@/types/supabase";

type PropType = {
  foodItem: Tables<"food_items">;
};

const FoodItem: React.FC<PropType> = ({ foodItem }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-44 w-44">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={foodItem.image_url || ""}
          alt={foodItem.food_name || "Not Found Image"}
        />
      </div>
      <div className="flex flex-col gap-1 text-sm ">
        <p className="font-semibold">{foodItem.food_name}</p>
        <p>{foodItem.description}</p>
        <p className="font-semibold">₹140</p>
        <Button intent={"primary"} size={"md"} className="w-40">
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default FoodItem;
