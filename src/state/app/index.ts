import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../types";

const initialState: AppState = {
  alertHeader: null,
  alertBody: null,
  alertType: null,
  hasPasswordBypassed: false,
  loadingApp: true,
  shouldResetLB: false,
};

export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setPasswordBypass: (state, action) => {
      state.hasPasswordBypassed = action.payload.hasPasswordBypassed;
    },
    setAlert: (state, action) => {
      state.alertHeader = action.payload.alertHeader;
      state.alertBody = action.payload.alertBody;
      state.alertType = action.payload.alertType;
    },
    resetAlert: (state) => {
      state.alertType = null;
      state.alertHeader = null;
      state.alertBody = null;
    },
    setLoadingApp: (state, action) => {
      state.loadingApp = action.payload.loadingApp;
    },
    // this is used in current loanbuilder, don't remove
    resetLB: (state) => {
      // toggle this state, any component using this
      // will rerender/run its effects again
      state.shouldResetLB = !state.shouldResetLB;
    },
  },
});

// Actions
export const {
  setAlert,
  resetAlert,
  setPasswordBypass,
  setLoadingApp,
  resetLB,
} = appSlice.actions;

export default appSlice.reducer;
