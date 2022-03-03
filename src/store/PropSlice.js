import { createSlice, current } from "@reduxjs/toolkit";

export const PropsSlice = createSlice({
  name: "PropSlice",
  initialState: {
    EmploymentHistory: {
      SectionHeader: "Employment History",
      SectionDescription: `Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.`,
    },
  },
  reducers: {},
});

export default PropsSlice.reducer;
