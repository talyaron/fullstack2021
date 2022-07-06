import { socket } from "./index";
import Profile from "./view/pages/mentee/Profile";
<<<<<<< Updated upstream
// import Card from "./view/pages/mentee/Card"//
import React from "react";
import "./view/Styles/global.scss";
import HomePage from "./view/components/HomePage";
=======
// import Card from "./view/pages/mentee/Card"
import SearchMentor from "./view/Components/SearchMentor";
import React from "react";
import "./view/styles/global.scss";
import HomePage from "./view/Components/HomePage";
>>>>>>> Stashed changes
import Matching from "./view/pages/matching/Matching";
import Chat from "./view/pages/Chat/Chat";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< Updated upstream
import Button from "./view/components/Button";
import SelectedMentor from "./view/pages/mentee/SelectedMentor";
=======
import Button from "./view/Components/Button";
>>>>>>> Stashed changes

function App() {

  const [mentorsList, setMentorsList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get('/api/users/get-user')
  //     const {user} = data
  //     setCurrentUser(user)
  //     console.log(user)
  //   })();
  // }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile id="1234"/>} />
         {/* <Route path='/' element={<HomePage />}/>
        <Route path="/chat" element={<Chat />} />
        <Route path="/matching" element={<Matching mentorsList={mentorsList} setMentorsList={setMentorsList} currentUser={currentUser} />} /> */}
<<<<<<< Updated upstream
=======
        
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default App;
