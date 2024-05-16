import { getLogoAndImageUrl } from "@/app/actions/restaurants/restaurants";
import RestaurantLogo from "@/components/Menu/RestaurantLogo";
import HeaderText from "@/components/ui/header-text";
import ContentWrapper from "@/Layouts/ContentWrapper";
import { createClient } from "@/utils/supabase/client";
import React from "react";

const MenuSection = async () => {
  let { restaurants, error } = await getLogoAndImageUrl();

  return (
    <div className="">
      <HeaderText text="Top brands for you" />
      <div className="flex overflow-x-auto scroll-smooth no-scrollbar gap-5 md:gap-14">
        {restaurants &&
          restaurants.map((restaurant) => (
            <RestaurantLogo
              key={restaurant.id}
              shopId={restaurant.id}
              shopName={restaurant.shop_name}
              shopImageUrl={restaurant.shop_logo_url}
            />
          ))}
      </div>
    </div>
  );
};

export default MenuSection;
