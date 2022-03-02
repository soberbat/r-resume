import { createSlice } from "@reduxjs/toolkit";

export const AccordionSlice = createSlice({
  name: "AccordionSlice",
  initialState: {
    numberOfAccordions: 0,
  },
  reducers: {
    AddAccordion: (state) => {
      console.log(state.numberOfAccordions);
      state.numberOfAccordions += 1;
    },
    RemoveAccordion: (state) => {
      console.log(state.numberOfAccordions);
      state.numberOfAccordions -= 1;
    },
  },
});

export const { AddAccordion, RemoveAccordion } = AccordionSlice.actions;

export default AccordionSlice.reducer;
