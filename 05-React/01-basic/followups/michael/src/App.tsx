import React from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Box from './Boxx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Michael Frankel   
        </p>
        <Box text="hi" />
        <Box text="Bi" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
