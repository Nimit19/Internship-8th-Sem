import { getRestaurantFoodCategory } from "@/actions/restaurants/restaurants";
import HeaderText from "@/components/ui/header-text";
import ContentWrapper from "@/Layouts/ContentWrapper";
import RestaurantCategory from "@/Sections/RestaurantsFoodItem/RestaurantCategory";
import RestaurantFoodItems from "@/Sections/RestaurantsFoodItem/RestaurantFoodItems";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

type PropType = { params: { slug?: string } } | any;

const RestaurantFoodItemPage: React.FC<PropType> = async ({ params }) => {
  const slug = params.slug;
  const restaurantId = params.id;

  if (!slug) {
    notFound();
  }

  const { restaurantFoodCategories, error } = await getRestaurantFoodCategory(
    restaurantId
  );

  if (!restaurantFoodCategories) {
    notFound();
  }

  const selectedFoodCategory = restaurantFoodCategories.find(
    (category) => category.slug === slug[0]
  );

  if (!selectedFoodCategory) {
    notFound();
  }

  return (
    <ContentWrapper className="lg:w-[65vw] m-auto">
      <div className="mt-10 mb-3">
        <HeaderText text="Order Online " />

        <div className=" w-full lg:flex lg:justify-start">
          <RestaurantCategory
            restaurantFoodCategories={restaurantFoodCategories}
            selectedFoodCategory={selectedFoodCategory.category_name}
          />

          <Suspense fallback={<p>Loading...</p>}>
            <RestaurantFoodItems selectedFoodCategory={selectedFoodCategory} />
          </Suspense>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default RestaurantFoodItemPage;
