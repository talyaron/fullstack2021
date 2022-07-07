import { socket } from "./index";
import Profile from "./view/pages/mentee/Profile";
// import Card from "./view/pages/mentee/Card"//
import React from "react";
import "./view/Styles/global.scss";
import HomePage from "./view/components/HomePage";
import Matching from "./view/pages/matching/Matching";
import Chat from "./view/pages/Chat/Chat";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./view/components/Btn";
import SelectedMentor from "./view/pages/mentee/SelectedMentor";
import SelectedMentors from "./view/pages/mentee/SelctedMentors";


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
        <Route path="/Profile" element={<Profile id="1234"/>} />
        <Route path='/' element={<HomePage />}/>
        <Route path="/chat" element={<Chat />} />
        <Route path="/matching" element={<Matching mentorsList={mentorsList} setMentorsList={setMentorsList} currentUser={currentUser} />} />
                {/* <Route path="/selected-mentors" element={<SelectedMentors />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
