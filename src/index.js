import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { theme } from "./Style/theme";
import Router from "./Router";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store()}>
      <RouterProvider router={Router} />
    </Provider>
  </ThemeProvider>
);
