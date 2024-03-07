import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Nimit Patel" },
  { id: "1", name: "Vaibhav Master " },
  { id: "2", name: "Ruchir Parekh" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const { selectAllUsers } = (state) => state.users;

export const {} = usersSlice.actions;
export default usersSlice;
