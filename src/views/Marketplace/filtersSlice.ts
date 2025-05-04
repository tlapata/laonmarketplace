import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { FilterKeys } from "./types";

export type FitlersState = {
  filterOptions: { [key: string]: string | string[] };
  searchTerm: string;
  checks: { [key: string]: string };
};

const initialState: FitlersState = {
  filterOptions: {},
  searchTerm: "",
  checks: {},
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilterOption: (
      state,
      action: PayloadAction<{ key: FilterKeys; value: string | string[] }>
    ) => {
      
      // if key exists with same value, remove it else add it
      const { key, value } = action.payload;
      
      if (state.filterOptions[key] === value) {
        delete state.filterOptions[key];
      } else {
        state.filterOptions[key] = value;
      }
    },
    removeFilterOption: (state, action: PayloadAction<FilterKeys>) => {
      // deleting a non-existent key doesn't throw an error
      delete state.filterOptions[action.payload];
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setFilterOption, removeFilterOption, setSearchTerm } =
  filtersSlice.actions;

export default filtersSlice.reducer;
