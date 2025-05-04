import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import wallet from "./wallet";
import app from "./app";
import loanBuilder from "./loanBuilder";
import { combineReducers } from "redux";
import filters from "views/Marketplace/filtersSlice";
import loans from "views/Marketplace/loansSlice";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const reducers = combineReducers({
  wallet,
  app,
  loanBuilder,
  filters,
  loans,
});

const rootReducer = (state, actions) => {
  if (
    actions.type === "Wallet/setIsWalletConnected" &&
    actions.payload === false
  ) {
    state = undefined;
  }
  return reducers(state, actions);
};

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  reducer: rootReducer,

});

export type RootState = ReturnType<typeof store.getState>;
/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
