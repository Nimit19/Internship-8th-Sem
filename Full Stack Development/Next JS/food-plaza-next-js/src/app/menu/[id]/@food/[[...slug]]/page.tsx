import { getRestaurantFoodCategory } from "@/app/actions/restaurants/restaurants";
import HeaderText from "@/components/ui/header-text";
import ContentWrapper from "@/Layouts/ContentWrapper";
import RestaurantCategory from "@/Sections/RestaurantsFoodItem/RestaurantsCategory/RestaurantCategory";
import RestaurantFoodItem from "@/Sections/RestaurantsFoodItem/RestaurantsCategory/RestaurantFoodItem";
import { notFound } from "next/navigation";
import React from "react";

type PropType = { params: { slug?: string } } | any;

const RestaurantFoodItemPage: React.FC<PropType> = async ({ params }) => {
  const slug = params.slug;
  const restaurantId = params.id;

  const { restaurantFoodCategories, error } = await getRestaurantFoodCategory(
    restaurantId
  );

  if (!restaurantFoodCategories) {
    notFound();
  }

  const selectedFoodCategory = slug
    ? slug[0]
    : restaurantFoodCategories[0]?.slug;

  return (
    <ContentWrapper className="lg:w-[65vw] m-auto">
      <div className="mt-10 mb-3">
        <HeaderText text="Order Online " />
        <div className=" w-full lg:flex lg:justify-start">
          <div className="relative pb-4 ">
            <RestaurantCategory
              restaurantFoodCategories={restaurantFoodCategories}
              selectedFoodCategory={selectedFoodCategory}
            />
          </div>
          <div className=" lg:border-l-2 lg:border-primary lg:pl-6">
            <div className="hidden lg:block">
              <HeaderText text={"okay"} />
            </div>
            <div className="flex flex-col gap-5 h-[75vh] lg:h-[60vh]   overflow-y-auto ">
              <RestaurantFoodItem />
              <RestaurantFoodItem />
              <RestaurantFoodItem />
              <RestaurantFoodItem />
              <RestaurantFoodItem />
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default RestaurantFoodItemPage;
