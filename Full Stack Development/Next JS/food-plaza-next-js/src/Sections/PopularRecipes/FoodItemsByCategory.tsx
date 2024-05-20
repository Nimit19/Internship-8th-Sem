import { getFoodItemByPopularFoodCategory } from "@/actions/food-category/food-category";
import PopularFoodItemCard from "@/components/PopularRecipes/PopularFoodItemCard";
import PopularFoodItemCardSkeleton from "@/skeletons/PopularFoodItemCard";
import { FoodItemType } from "@/types/global.type";
import { Tables } from "@/types/supabase";
import React, { useEffect, useState } from "react";

type PropType = {
  categoryId: number;
};

const FoodItemsByCategory: React.FC<PropType> = ({ categoryId }) => {
  const [foodItems, setFoodItems] = useState<Tables<"food_items">[] | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (categoryId !== null) {
      setLoading(true);
      getFoodItemByPopularFoodCategory(categoryId)
        .then(({ foodItems, error }) => {
          if (!error) {
            setFoodItems(foodItems as any);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  return (
    <div className="pt-8 pb-12 md:pt-10  md:pb-14 flex overflow-x-auto scroll-smooth no-scrollbar gap-3 md:gap-6">
      {loading && (
        <>
          <PopularFoodItemCardSkeleton />
          <PopularFoodItemCardSkeleton />
          <PopularFoodItemCardSkeleton />
          <PopularFoodItemCardSkeleton />
          <PopularFoodItemCardSkeleton />
          <PopularFoodItemCardSkeleton />
          <PopularFoodItemCardSkeleton />
        </>
      )}
      {!loading &&
        foodItems?.map((foodItem) => {
          return <PopularFoodItemCard foodItem={foodItem} />;
        })}
    </div>
  );
};

export default FoodItemsByCategory;
