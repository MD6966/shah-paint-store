import { useState } from "react";
import Router from "./routes";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Views/Landing/components/Header";
import Footer from "./Views/Landing/components/Footer";
import Estimate from "./Views/Estimate/Estimate";
import ScrollReset from "./components/ScrollReset/ScrollReset";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <ErrorBoundary>
          <Header />
          <Router />
          <Estimate type="estimate" />
          <Footer />
          <Estimate type="bottom" />
          <ScrollReset />
        </ErrorBoundary>
        <ToastContainer />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
