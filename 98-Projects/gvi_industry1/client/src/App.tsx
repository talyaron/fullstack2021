import { socket } from "./index";
import Profile from "./view/pages/mentee/Profile";
// import Card from "./view/pages/mentee/Card"//
import SearchMentor from "./view/components/SearchMentor";
import React from "react";
import "./view/styles/global.scss";
import HomePage from "./view/components/HomePage";
import Matching from "./view/pages/matching/Matching";
import Chat from "./view/pages/Chat/Chat";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./view/components/Button";
import MatchingMentor from "./view/pages/matching/components/MatchingMentor";

function App() {
  const [mentorsList, setMentorsList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});



  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/users/get-user')
      const {user} = data
      setCurrentUser(user)
      console.log(user)
    })();
  }, [])

  return (
    <Router>
      <Routes>

        <Route path='/' element={<HomePage />}/>
        <Route path="/chat" element={<Chat />} />
        <Route path="/matching" element={<Matching mentorsList={mentorsList} setMentorsList={setMentorsList} currentUser={currentUser} />} />
        <Route path="/" element={<Profile _id={'1234'} />} />
      </Routes>
    </Router>
  );
}

export default App;
