import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./context/user.context";

import "./index.css";
import { SmileyProvider } from "./context/smiley.context";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SmileyProvider>
            <App />
        </SmileyProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);