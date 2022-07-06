import React from "react";
import ReactDOM from "react-dom/client";
import { io } from "socket.io-client";
import "./index.css";
import Router from "./View/Router";
export const socket = io();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
