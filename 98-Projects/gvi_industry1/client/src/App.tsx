import Profile from './view/pages/mentee/Profile';
import Card from './view/pages/mentee/Card';
import SearchMentor from './view/components/SearchMentor';
import React from "react";
import "./view/Styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './view/Components/HomePage'
import Matching from './view/pages/matching/Matching';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [mentorsList, setMentorsList] = useState([])
  const [selectedUser, setSelectedUser] = useState({})

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/get-user')
      const { user } = data
      setSelectedUser(user)
      console.log(user)
    })();
  }, [])

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path="/matching" element={<Matching mentorsList={mentorsList} setMentorsList={setMentorsList} selectedUser={selectedUser}/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
