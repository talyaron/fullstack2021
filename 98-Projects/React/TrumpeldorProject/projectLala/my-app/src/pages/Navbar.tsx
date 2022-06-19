import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-navList">
        <li className="navbar-navList-link" style={{display:'block'}}>
        <Link to="/Orders">להזמדנות</Link>
        </li>
        <li>
          <div>2</div>
        </li>
        <li>
        <div>3</div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;