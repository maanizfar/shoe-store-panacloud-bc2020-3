import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

import GlobalDataProvider from "./state/GlobalDataProvider";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <GlobalDataProvider>
        <App />
      </GlobalDataProvider>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
