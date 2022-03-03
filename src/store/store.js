import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./textSlice";
import AccordionSlice from "./AccordionSlice";
import PropSlice from "./PropSlice";

export default configureStore({
  reducer: {
    forms: textSlice,
    Accordions: AccordionSlice,
    Properties: PropSlice,
  },
});
