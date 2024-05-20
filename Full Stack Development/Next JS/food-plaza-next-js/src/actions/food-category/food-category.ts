"use server";
import { createClient } from "@/utils/supabase/client";

export const getPopularFoodCategory = async () => {
  const supabase = createClient();

  let { data: foodCategories, error } = await supabase
    .from("food_categories")
    .select("id, food_category_name")
    .eq("is_popular_category", true);

  return { foodCategories, error };
};

export const getFoodItemByPopularFoodCategory = async (categoryId: number) => {
  const supabase = createClient();

  const { data: restaurantFoodCategoryIds, error: categoryError } =
    await supabase
      .from("restaurant_food_categories")
      .select("id")
      .eq("food_category_id", categoryId);

  if (categoryError) {
    console.error(
      "Error fetching restaurant food category IDs:",
      categoryError.message
    );
    return { foodItems: null, error: categoryError };
  }

  const restaurantFoodCategoryIdsArray = restaurantFoodCategoryIds.map(
    (category) => category.id
  );

  const { data: foodItems, error: itemError } = await supabase
    .from("food_items")
    .select("*")
    .in("restaurant_food_category_id", restaurantFoodCategoryIdsArray);

  if (itemError) {
    console.error("Error fetching food items:", itemError.message);
    return { foodItems: null, error: itemError };
  }

  return { foodItems };
};
