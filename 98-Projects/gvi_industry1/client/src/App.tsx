import logo from './logo.svg';
import './App.css';
import Matching from './view/pages/matching/Matching';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [mentorsList, setMentorsList] = useState([])
  const [selectedUser , setSelectedUser] = useState({})

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/get-user')
      const {user} = data
      setSelectedUser(user)
      console.log(user)
    })();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Matching mentorsList={mentorsList} setMentorsList={setMentorsList} selectedUser={selectedUser} />
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
