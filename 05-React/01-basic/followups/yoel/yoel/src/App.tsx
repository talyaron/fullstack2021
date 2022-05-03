import React from 'react';
import logo from './logo.svg';
import './App.scss';

//components 
import Box from './Box'
import Example from './Example'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          yoel
        </p>
        <Box text = 'hii'/>
        <Example text = 'texxt' />
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
