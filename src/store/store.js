import { configureStore } from "@reduxjs/toolkit";
import textSlice from "./textSlice";
import AccordionSlice from "./AccordionSlice";

export default configureStore({
  reducer: {
    forms: textSlice,
    Accordions: AccordionSlice,
  },
});
