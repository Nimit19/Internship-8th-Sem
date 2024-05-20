import { getRestaurantFoodCategory } from "@/actions/restaurants/restaurants";
import { AppRoute } from "@/routes/routes";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
type PropsType = {
  shopId: number;
  shopName: string;
  shopImageUrl: string;
};

function capitalizeEachWord(text: string) {
  return text.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

const RestaurantLogo: React.FC<PropsType> = async ({
  shopId,
  shopName,
  shopImageUrl,
}) => {
  const { restaurantFoodCategories } = await getRestaurantFoodCategory(shopId);

  if (!restaurantFoodCategories) {
    notFound();
  }

  const category = restaurantFoodCategories[0]?.slug;

  return (
    <Link
      href={`${AppRoute.MENU_PAGE}/${shopId}/${category}`}
      className="flex flex-col gap-4 md:gap-10 "
    >
      <div className="min-w-24 min-h-24  rounded-full md:min-w-48 md:min-h-48 overflow-hidden border">
        <img className="w-full h-full" src={shopImageUrl} alt={shopName} />
      </div>
      <p className="text-sm font-semibold text-center md:text-xl ">
        {capitalizeEachWord(shopName)}
      </p>
    </Link>
  );
};

export default RestaurantLogo;
