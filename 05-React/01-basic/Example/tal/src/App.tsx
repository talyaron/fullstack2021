import React from 'react';
import logo from './logo.svg';
import './App.scss';

//components
import Box from './Box';
import Stam from './Stam';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tal 2
        </p>
        <Box text="hi"/>
        <Box text="hi"/>
        <Box text="hi"/>
        <Box text="boo"/>
        <Box text="hi"/>
        <Box text="kabom by"/>
        <Box text="hi"/>
        <Box text="hi"/>
        <Box text="hi"/>
        <Stam />
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
