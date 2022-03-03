import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const AccordionSlice = createSlice({
  name: "AccordionSlice",
  initialState: {
    Accordions: {},
    ExpandCollapse: {
      0: true,
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
      const asArray = Object.entries(state.Accordions);

      const filtered = asArray.filter(([key, value]) => key !== action.payload);
      const justStrings = Object.fromEntries(filtered);

      state.Accordions = {
        ...justStrings,
      };
    },
  },
});

export const { AddAccordion, RemoveAccordion } = AccordionSlice.actions;

export default AccordionSlice.reducer;
