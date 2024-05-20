import { Tables } from "./supabase";

export interface IconType {
  height?: string;
  width?: string;
  fillColor?: string;
  className?: string;
}

export type FoodItemType = Tables<"food_items">;
export type RestaurantType = Tables<"restaurants">;
export type RestaurantFoodCategoryType = Tables<"restaurant_food_categories">;
export type FoodCategoryType = Tables<"food_categories">;
