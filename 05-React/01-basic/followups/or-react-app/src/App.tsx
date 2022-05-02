import React from 'react';
import logo from './logo.svg';
import './view/styles/global.scss';
import './view/components/OrWrapper'
import OrWrapper from './view/components/OrWrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OrWrapper />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
