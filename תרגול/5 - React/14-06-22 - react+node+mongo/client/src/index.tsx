import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoutesPage from "./RoutesPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoutesPage />
  </React.StrictMode>
);
