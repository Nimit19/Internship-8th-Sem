import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  cartIsVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialUiState,
  reducers: {
    toggleCart: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },

    showNotifications: (state, action) => {
      const { status, title, message } = action.payload;

      state.notification = {
        status: status,
        title: title,
        message: message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
