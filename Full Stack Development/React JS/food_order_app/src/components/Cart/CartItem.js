import classes from "./CartItem.module.css";

const CartItem = ({ name, price, amount, onAdd, onRemove }) => {
  const priceStr = `₹ ${price}`;
  const subTotal = `₹ ${price * amount}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceStr}</span>
          <span className={classes.amount}>x {amount}</span>
          <span> = </span>
          <span className={classes.price}> {subTotal}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
