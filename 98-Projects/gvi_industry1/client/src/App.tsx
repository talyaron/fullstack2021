import logo from './logo.svg';
import './App.css';
import Matching from './view/pages/matching/Matching';
import { useState } from 'react';


function App() {
  
  const [mentorsList,setMentorsList] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <Matching mentorsList={mentorsList} setMentorsList={setMentorsList} />
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
