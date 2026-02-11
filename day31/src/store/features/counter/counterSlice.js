import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    changeByValue: (state, action) => {
      state.count += Number(action.payload);
    },
  },
});
export const { increment, decrement, changeByValue } = counterSlice.actions;
export default counterSlice.reducer;
