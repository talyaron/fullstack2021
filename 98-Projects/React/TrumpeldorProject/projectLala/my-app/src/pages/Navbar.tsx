import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <div className="Navbar">
      <Button
        variant="outlined"
        className="Navbar-Order"
        style={{
          borderRadius: 35,
          backgroundColor: "yellow",
          padding: "18px 36px",
          fontSize: "18px",
        }}
      >
        להזמנה
      </Button>

      <Button
        variant="outlined"
        className="Navbar-StayConnect"
        style={{
          borderRadius: 35,
          padding: "18px 36px",
          fontSize: "18px",
        }}
      >
        צור קשר
      </Button>
      <Button
        variant="outlined"
        className="Navbar-Manu"
        style={{
          borderRadius: 35,
          padding: "18px 36px",
          fontSize: "18px",
        }}
      >
        תפריט
      </Button>
      <Button
        variant="outlined"
        className="Navbar-Main"
        style={{
          borderRadius: 35,
          padding: "18px 36px",
          fontSize: "18px",
        }}
      >
        לדף הבית
      </Button>
      <div className="Navbar-Silmbol"></div>
    </div>
  );
}

export default Navbar;
