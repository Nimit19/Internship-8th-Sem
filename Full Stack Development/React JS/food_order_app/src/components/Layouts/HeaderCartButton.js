import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClickCartButton }) => {
  const cartCtx = useContext(CartContext);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartItemQuantity = cartCtx.items.reduce((totalItem, item) => {
    return totalItem + item.amount;
  }, 0);

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  const btnClass = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

  return (
    <button className={btnClass} onClick={onClickCartButton}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes}>Your Cart</span>
      <span className={classes.badge}>{cartItemQuantity}</span>
    </button>
  );
};

export default HeaderCartButton;
