/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WalletState } from "../types";
import { Network } from "config/constants/types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState: WalletState = {
  isWalletConnected: false,
  network: null,
};

export const walletSlice = createSlice({
  name: "Wallet",
  initialState,
  reducers: {
    setNetwork: (state, action: PayloadAction<Network>) => {
      state.network = action.payload;
    },
    setIsWalletConnected: (state, action: PayloadAction<boolean>) => {
      state.isWalletConnected = action.payload;
    },
    resetWallet: (state) => {
      state.isWalletConnected = false;
      state.network = null;
    },
  },
});

// Actions
export const {
  setIsWalletConnected,
  setNetwork,
  resetWallet,
} = walletSlice.actions;

const persistConfig = {
  key: "wallet",
  storage,
};

export default persistReducer(persistConfig, walletSlice.reducer);
