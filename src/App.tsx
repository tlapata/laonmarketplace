import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/fonts/Geist/style.css";
import GlobalStyle from "./style/Global";
import SuspenseWithChunkError from "./components/SuspenseWithChunkError";
import PageLoader from "./components/PageLoader";
import DashboardLanding from "views";
import MainWrapper from "components/MainWrapper";

const App: React.FC = () => {
  return (
    <Router>
      <MainWrapper>
        <GlobalStyle />
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <DashboardLanding />
        </SuspenseWithChunkError>
      </MainWrapper>
    </Router>
  );
};

export default App;