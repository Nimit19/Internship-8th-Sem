import React from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Alu Puri",
    description: "Fresh and delicious...",
    price: 30,
  },
  {
    id: "m2",
    name: "Burger",
    description: "A german specialty!",
    price: 149,
  },
  {
    id: "m3",
    name: "Pizza",
    description: "American, raw, meaty",
    price: 749,
  },
  {
    id: "m4",
    name: "Veg Frankie",
    description: "Healthy...and green...",
    price: 50,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
