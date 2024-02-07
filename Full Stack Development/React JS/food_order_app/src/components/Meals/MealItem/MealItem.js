import React, { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

import classes from "./MealItem.module.css";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const amount = `₹ ${price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{amount}</div>
      </div>
      <MealItemForm id={id} onAddItem={addItemToCartHandler} />
    </li>
  );
};

export default MealItem;
