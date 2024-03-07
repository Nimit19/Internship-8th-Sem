import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  isChanged: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replicateCart: (state, action) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.isChanged = false;
    },
    addItemToCart: (state, action) => {
      state.isChanged = true;

      const { id, title, price } = action.payload;
      state.totalQuantity += 1;

      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) {
        state.items.push({
          id: id,
          title: title,
          price: price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }

      //   state.items = state.items.reduce(
      //     (newItems, item) => {
      //       if (item.id === action.payload.id) {

      //         // 1]
      //         const updatedItem = {...item, quantity: item.quantity + 1}

      //         // 2]
      //         // newItems[0].quantity += item.quantity;
      //         return {...newItems, updatedItem};
      //       }
      //       return [...newItems, item];
      //     },
      //     [{...action.payload, quantity}]
      //   );
    },

    removeItemFromCart: (state, action) => {
      state.isChanged = true;

      const id = action.payload;
      state.totalQuantity -= 1;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
