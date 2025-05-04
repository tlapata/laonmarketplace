import Providers from "Providers";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import GraphqlClient from "utils/graphQLClient";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "main.css";
import "react-toastify/dist/ReactToastify.css";

import initTranslation from "internationalization";
import { ToastContainer } from "react-toastify";

initTranslation("en");

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <ApolloProvider client={GraphqlClient}>
        <ToastContainer autoClose={1500} style={{ zIndex: "10000000000" }} />
        <App />
      </ApolloProvider>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
