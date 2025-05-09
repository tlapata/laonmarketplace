import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { getLibrary } from "utils/web3React";
import { ThemeContextProvider } from "contexts/ThemeContext";
import { RefreshContextProvider } from "contexts/RefreshContext";
import store from "state";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider>
            <ThemeContextProvider>
              <RefreshContextProvider>{children}</RefreshContextProvider>
            </ThemeContextProvider>
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
