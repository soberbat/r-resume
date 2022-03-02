import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const AccordionSlice = createSlice({
  name: "AccordionSlice",
  initialState: {
    numberOfAccordions: 0,
    ExpandCollapse: {
      0: true,
    },
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
    SetExpandCollapse: (state, action) => {
      //A Function that only allows one accordion to be open
      let newOne = Object.entries(state.ExpandCollapse).map(([key, value]) => {
        value = value ? false : value;
        return [key, value];
      });
      const newObj = Object.fromEntries(newOne);

      state.ExpandCollapse = {
        ...newObj,
        [action.payload]: !state.ExpandCollapse[action.payload],
      };
    },
  },
});

export const { AddAccordion, RemoveAccordion, SetExpandCollapse } =
  AccordionSlice.actions;

export default AccordionSlice.reducer;
