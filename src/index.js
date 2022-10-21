import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/jetbrains-mono";
import {Provider} from "react-redux";
import store from "./store";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./theme";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App/>
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);