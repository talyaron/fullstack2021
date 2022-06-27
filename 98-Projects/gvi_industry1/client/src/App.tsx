import logo from './logo.svg';
import Navbar from './view/pages/matching/NavBar';
import './App.css';
import Matching from './view/pages/matching/Matching';
import { useState } from 'react';


function App() {
  
  const [mentorsList,setMentorsList] = useState([])

  return (
    <div className="App">
      
        <Matching mentorsList={mentorsList} setMentorsList={setMentorsList} />
        
    </div>
  );
}

export default App;
