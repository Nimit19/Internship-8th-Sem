import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotifications({
        status: "pending",
        title: "Pending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-7a524-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
          headers: { "content-type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Sending Cart Data failed");
      }
    };

    try {
      await sendRequest(cart);
      dispatch(
        uiActions.showNotifications({
          status: "success",
          title: "Success!",
          message: "Send data successfully...",
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNotifications({
          status: "error",
          title: "Error!",
          message: "Error occurs to send data...",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch(
        "https://react-http-7a524-default-rtdb.firebaseio.com/cart.json"
      );

      const cartData = await response.json();

      dispatch(
        cartActions.replicateCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );

      if (!response.ok) {
        throw new Error("Sending Cart Data failed");
      }
    };

    try {
      await fetchRequest();
    } catch (e) {
      dispatch(
        uiActions.showNotifications({
          status: "error",
          title: "Error!",
          message: "Error occurs to Fetch data...",
        })
      );
    }
  };
};

export default sendCartData;
