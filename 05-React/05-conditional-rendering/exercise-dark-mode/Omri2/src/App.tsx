import './view/styles/global.scss';
import {useState} from 'react';
import axios from 'axios';
import Header from './view/components/Header';
//https://opentdb.com/api.php?amount=10 - trivia API
//https://www.youtube.com/watch?v=AfDY1ue6YRI
function App() {

  
  return (
    <div className="App">
      <div className="App__header">
        <Header />
      </div>
    </div>
  );
}

export default App;
