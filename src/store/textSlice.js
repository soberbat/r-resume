import { createSlice, current } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "textSlice",
  initialState: {
    values: {
      EmploymentHistory: {},
      Education: {},
      İnternShips: {},
      Skills: {},
      Hobbies: {},
      Languages: {},
      References: {},
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
    // deleteFromStore: (state, action) => {},
    AddToStoreEmploymentHistory: (state, action) => {
      state.values.EmploymentHistory = {
        ...state.values.EmploymentHistory,
        ...action.payload,
      };
    },
    AddToStoreSkills: (state, action) => {
      state.values.Skills = {
        ...state.values.Skills,
        ...{ [action.payload.skill]: action.payload.level },
      };
    },
    AddAccordionValuesToStore: (state, action) => {
      if (action.payload.AccordionType === "EmploymentHistory") {
        state.values.EmploymentHistory = {
          ...state.values.EmploymentHistory,
          [action.payload.id]: {
            ...state.values.EmploymentHistory[action.payload.id],
            ...action.payload.values,
          },
        };
      }
      if (action.payload.AccordionType === "Education") {
        state.values.Education = {
          [action.payload.id]: {
            ...state.values.Education[action.payload.id],
            ...action.payload.values,
          },
        };
      }
      if (action.payload.AccordionType === "İnternShips") {
        state.values.İnternShips = {
          [action.payload.id]: {
            ...state.values.İnternShips[action.payload.id],
            ...action.payload.values,
          },
        };
      }
      if (action.payload.AccordionType === "Hobbies") {
        state.values.Hobbies = {
          [action.payload.id]: {
            ...state.values.Hobbies[action.payload.id],
            ...action.payload.values,
          },
        };
      }
      if (action.payload.AccordionType === "References") {
        state.values.References = {
          [action.payload.id]: {
            ...state.values.References[action.payload.id],
            ...action.payload.values,
          },
        };
      }
      if (action.payload.AccordionType === "Languages") {
        state.values.Languages = {
          [action.payload.id]: {
            ...state.values.Languages[action.payload.id],
            ...action.payload.values,
          },
        };
      }
    },
  },
});

export const {
  addToStore,
  countWords,
  AddToStoreEmploymentHistory,
  AddToStoreSkills,
  AddAccordionValuesToStore,
} = textSlice.actions;

export default textSlice.reducer;
