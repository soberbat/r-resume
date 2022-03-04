import { createSlice, current } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "textSlice",
  initialState: {
    values: {
      EmploymentHistory: {},
      School: {},
      İnternShips: {},
    },
    countedWords: {},
  },
  reducers: {
    addToStore: (state, action) => {
      state.values = { ...state.values, ...action.payload };
    },
    countWords: (state, action) => {
      state.countedWords = {
        ...state.countedWords,
        ...action.payload,
      };
    },
    deleteFromStore: (state, action) => {},

    AddToStoreEmploymentHistory: (state, action) => {
      state.values.EmploymentHistory = {
        ...state.values.EmploymentHistory,
        ...action.payload,
      };
    },
  },
});

export const { addToStore, countWords, AddToStoreEmploymentHistory } =
  textSlice.actions;

export default textSlice.reducer;
