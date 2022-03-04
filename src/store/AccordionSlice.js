import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const AccordionSlice = createSlice({
  name: "AccordionSlice",
  initialState: {
    Accordions: {
      EmploymentHistoryAccordions: {},
      SchoolsAccordions: {},
      İnternShipsAccordions: {},
    },
  },
  reducers: {
    AddAccordion: (state, action) => {
      state.Accordions = {
        ...state.Accordions,
        ...{ [action.payload]: "Accordion" },
      };
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
