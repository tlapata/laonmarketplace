import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { LoanOffer } from "./api/getLoanOffers";

export type LoansState = {
  selectedLoans: { [key: number]: LoanOffer };
  activateLoan: boolean;
  isActive: boolean;
  activateLoader: boolean;
  currentTab: string;
};

const initialState: LoansState = {
  selectedLoans: {},
  activateLoan: false,
  isActive: false,
  activateLoader: false,
  currentTab: "offers",
};

const loansSlice = createSlice({
  name: "loans",
  initialState,
  reducers: {
    setSelectedLoans: (
      state,
      action: PayloadAction<{ id: number; data: LoanOffer }>
    ) => {
      const { id, data } = action.payload;
      // delete the key, value pair if already exists
      if (state.selectedLoans.hasOwnProperty(id)) {
        delete state.selectedLoans[id];
      } else {
        state.selectedLoans = {};
        state.selectedLoans[id] = data;
      }
    },
    setActiveLoan: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
    setCurrentTab: (state, action: PayloadAction<string>) => {
      state.currentTab = action.payload;
    },
    setActivateLoader: (state, action: PayloadAction<boolean>) => {
      state.activateLoader = action.payload;
    },
    setAutoSell: (
      state,
      action: PayloadAction<{ id: number; autoSell: boolean }>
    ) => {
      const { id, autoSell } = action.payload;
      if (state.selectedLoans.hasOwnProperty(id)) {
        state.selectedLoans[id].autoSell = autoSell;
      }
    },
    resetLoans: (state) => {
      state.selectedLoans = {};
      state.isActive = false;
      state.activateLoan = false;
    },
    setActivatLoans: (state, action: PayloadAction<{ isactive: boolean }>) => {
      const { isactive } = action.payload;
      state.activateLoan = isactive;
    },
  },
});

export const {
  setCurrentTab,
  setActivateLoader,
  setActiveLoan,
  setActivatLoans,
  resetLoans,
  setSelectedLoans,
  setAutoSell,
} = loansSlice.actions;

export default loansSlice.reducer;
