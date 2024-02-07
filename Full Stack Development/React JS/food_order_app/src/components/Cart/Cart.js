import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";

const Cart = ({ onCloseCart }) => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItemFromCartHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const hasItems = cartCtx.items.length > 0;

  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addItemToCartHandler.bind(null, item)}
            onRemove={removeItemFromCartHandler.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onCloseCart={onCloseCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹ {cartCtx.totalAmount} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
