import { createSlice, current } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "textSlice",
  initialState: {
    values: {
      EmploymentHistory: {},
      School: {},
      İnternShips: {},
      Skills: {},
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
    AddToStoreSkills: (state, action) => {
      state.values.Skills = {
        ...state.values.Skills,
        ...{ [action.payload.skill]: [action.payload.level] },
      };
    },
    // AddToSkills: (state, action) => {
    //   console.log(current(state.values.Skills));
    //   state.values.Skills = {
    //     ...state.values.Skills,
    //     [action.payload]: "Skill",
    //   };
    // },
  },
});

export const {
  addToStore,
  countWords,
  AddToStoreEmploymentHistory,
  AddToStoreSkills,
} = textSlice.actions;

export default textSlice.reducer;
