import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sss: "1313",
};

export const deneme = createSlice({
  name: "deneme",
  initialState,
  reducers: {
    addToStore: (state, action) => {
      console.log(action.payload);
      return { ...state };
    },
  },
});

export const { addToStore } = deneme.actions;

export default deneme.reducer;
