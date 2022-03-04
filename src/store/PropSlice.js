import { createSlice, current } from "@reduxjs/toolkit";

export const PropsSlice = createSlice({
  name: "PropSlice",
  initialState: {
    EmploymentHistory: {
      header: "Employment History",
      description: `Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).`,
    },
  },
  reducers: {},
});

export default PropsSlice.reducer;
