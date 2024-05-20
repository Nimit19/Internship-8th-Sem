import { getPopularFoodCategory } from "@/actions/food-category/food-category";
import HeroSection from "@/Sections/Home/Hero/HeroSection";
import PopularRecipesSection from "@/Sections/PopularRecipes";
import { notFound } from "next/navigation";

export default async function HomePage() {
  const popularFoodCategory = await getPopularFoodCategory();

  if (!popularFoodCategory || !popularFoodCategory.foodCategories) {
    return notFound();
  }

  return (
    <div className="">
      <HeroSection />
      <PopularRecipesSection
        popularFoodCategory={popularFoodCategory.foodCategories}
      />
    </div>
  );
}
