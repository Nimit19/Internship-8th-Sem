import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItems.map(({id, title, quantity, price}) =>{
            return  <CartItem
            key={id}
            item={{
              id: id,
              title: title,
              quantity: quantity,
              total: price * quantity,
              price: price,
            }}
          />
          })
        }
      </ul>
    </Card>
  );
};

export default Cart;
