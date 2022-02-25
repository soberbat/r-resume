import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "textSlice",
  initialState: {
    values: { ara: "" },
  },
  reducers: {
    addToStore: (state, action) => {
      console.log(action.payload);
      state.values = { ...state.values, ...action.payload };
    },
  },
});

export const { addToStore } = textSlice.actions;

export default textSlice.reducer;
