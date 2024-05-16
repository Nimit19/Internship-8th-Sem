"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text: any) {
  return !text || text.trim() === "";
}
type FormState = {
  message: string;
};

// here prevState not required but it the necessary to add because the first argument it take prevState when we use the useForm hook
export const shareMeal = async (prevState: FormState, formData: FormData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image") as File,
    creator: formData.get("name"),
    creator_email: formData.get("email") as string,
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email!.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("Invalid meal input!");
    return {
      message: "Invalid meal input",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  // revalidatePath("/meals", "page"); // For the perticular Page
  // revalidatePath("/meals", "layout"); // For all child of this routes
  // revalidatePath("/", "layout"); // For the website
  redirect("/meals");
};
