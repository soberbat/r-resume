import { createSlice, current } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "textSlice",
  initialState: {
    values: {},
    countedWords: { textAreaEmploymentHistoryCount: 0 },
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
  },
});

export const { addToStore, countWords } = textSlice.actions;

export default textSlice.reducer;
