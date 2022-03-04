import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const AccordionSlice = createSlice({
  name: "AccordionSlice",
  initialState: {
    Accordions: {
      EmploymentHistory: {},
      Education: {},
      İnternShips: {},
    },
  },
  reducers: {
    AddAccordion: (state, action) => {
      console.log(action.payload.type);
      if (action.payload.type === "EmploymentHistory") {
        state.Accordions.EmploymentHistory = {
          ...state.Accordions.EmploymentHistory,
          ...{ [action.payload.id]: "Accordion" },
        };
      }
      if (action.payload.type === "Education") {
        console.log(current(state));
        state.Accordions.Education = {
          ...state.Accordions.Education,
          ...{ [action.payload.id]: "Accordion" },
        };
      }
      if (action.payload.type === "İnternShips") {
        state.Accordions.İnternShips = {
          ...state.Accordions.İnternShips,
          ...{ [action.payload.id]: "Accordion" },
        };
      }
    },
    RemoveAccordion: (state, action) => {
      console.log(action.payload);
      const arr = Object.entries(state.Accordions);
      const filtered = arr.filter(([key, value]) => key !== action.payload);
      const newState = Object.fromEntries(filtered);
      state.Accordions = {
        ...newState,
      };
    },
  },
});

export const { AddAccordion, RemoveAccordion } = AccordionSlice.actions;

export default AccordionSlice.reducer;
