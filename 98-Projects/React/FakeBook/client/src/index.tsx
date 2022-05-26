import React from "react";
import ReactDOM from "react-dom/client";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faR } from '@fortawesome/free-solid-svg-icons'
import {faCaretDown ,faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import App from "./App";
import reportWebVitals from "./reportWebVitals";

library.add(fas,faR ,faCaretDown ,faCheckSquare, faCoffee)


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
