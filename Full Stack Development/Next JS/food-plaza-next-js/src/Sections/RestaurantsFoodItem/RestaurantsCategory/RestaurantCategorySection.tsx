"use server";
import { getRestaurantFoodCategory } from "@/app/actions/restaurants/restaurants";
import { Button } from "@/components/ui/button";
import HeaderText from "@/components/ui/header-text";
import RestaurantCategory from "./RestaurantCategory";

type PropType = {
  restaurantId: number;
};
const RestaurantCategorySection: React.FC<PropType> = async ({
  restaurantId,
}) => {
  const { restaurantFoodCategories, error } = await getRestaurantFoodCategory(
    restaurantId
  );

  return (
    <div className="mt-10 mb-3">
      <HeaderText text="Order Online " />
      <div className=" w-full lg:flex lg:justify-start">
        <div className="relative pb-4 ">
          <RestaurantCategory
            restaurantFoodCategories={restaurantFoodCategories}
          />
        </div>
        <div className=" lg:border-l-2 lg:border-primary lg:pl-6">
          <div className="hidden lg:block">
            <HeaderText text={"okay"} />
          </div>
          <div className="flex flex-col gap-5 h-[78vh]  overflow-y-auto lg:h-full">
            <div className="flex flex-col gap-3 ">
              <div className="h-44 w-44">
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src="https://s3-alpha-sig.figma.com/img/d21e/81ad/a17c970a446f7d9b8806f0af09d91142?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aABnpr3TTRsSsV5pBeTD~Fy6L62CzV2WFzoziLqVN8zpvbgn3TMzm7r5-e8p~Dch~EesRlJ2vRsxXEaxO1m0uU6NSBoM3yF2Lip~XOoQBPJbbteaCgyA66xf6BiwFtIOOSS9aBsbOxDT4WEsgdJq2YcaXOSNYaR5GPnByJnmKMl2LLOtbY~yR2gi5mX~GM5k7awLxI5huvwjYAMMoh7pVc4zrhKv2c8DVuUwAplEcT~DGlq23kRhqDGWduLOouRIt7T1825G7XvZlVIoZs65Z2vHlwFV1llty0SZawgRqWOJ-LaKHIRn3GrUe-~eb0b-ndsaA2qSpSLw7jcSmTqUuA__"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-1 text-sm ">
                <p className="font-semibold">Margherita Pizza</p>
                <p>A Classic Cheesy Margharita. Can't Go Wrong.</p>
                <p className="font-semibold">₹140</p>
                <Button intent={"primary"} size={"md"} className="w-40">
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategorySection;
