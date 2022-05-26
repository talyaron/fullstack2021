import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [showOne, setShowOne] = useState(true);

  if (showOne) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => setShowOne(!showOne)}>Change</button>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  } else {
    return (
      <div>
        <h1>KABOM</h1>
        <button onClick={() => setShowOne(!showOne)}>Change</button>
      </div>
    );
  }
}

export default App;
