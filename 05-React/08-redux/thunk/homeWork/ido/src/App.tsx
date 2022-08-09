import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Text from './features/text/Text'
import './App.css';
import Imgs from './features/image/Imgs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Imgs />
        {/* <Text /> */}
        
        {/* <Counter /> */}
          
      </header>
    </div>
  );
}

export default App;
