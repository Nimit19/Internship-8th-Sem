import { createClient } from "@/utils/supabase/client";

export const getLogoAndImageUrl = async () => {
  const supabase = createClient();

  let { data: restaurants, error } = await supabase
    .from("restaurants")
    .select("id, shop_name, shop_logo_url");

  return { restaurants, error };
};

export const getRestaurant = async (id: number) => {
  const supabase = createClient();

  let { data: restaurant, error } = await supabase
    .from("restaurants")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  return { restaurant, error };
};

export const getRestaurantFoodCategory = async (restaurantId: number) => {
  const supabase = createClient();

  let { data: restaurantFoodCategories, error } = await supabase
    .from("restaurant_food_categories")
    .select("id, category_name, slug")
    .eq("restaurant_id", restaurantId);

  return { restaurantFoodCategories, error };
};

export const getRestaurantFoodItemsByCategory = async (categoryId: number) => {
  const supabase = createClient();

  let { data: foodItems, error } = await supabase
    .from("food_items")
    .select("*")
    .eq("restaurant_food_category_id", categoryId);

  return { foodItems, error };
};
