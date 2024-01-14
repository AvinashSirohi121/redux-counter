import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value = state.value + 1;
    },
    decrease: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { increase, decrease } = CounterSlice.actions;
export default CounterSlice.reducer;
