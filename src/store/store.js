import { configureStore } from "@reduxjs/toolkit";
import deneme from "./deneme";

export default configureStore({
  reducer: {
    forms: deneme,
  },
});
