import { FiltersState } from "@/types/filters";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: FiltersState = {
  location: "",
  form: null,
  AC: false,
  transmission: null,
  bathroom: false,
  kitchen: false,
  TV: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setAllFilters(_, action: PayloadAction<FiltersState>) {
      return action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setAllFilters, resetFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
