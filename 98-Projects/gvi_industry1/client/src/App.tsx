import { socket } from './index'
import React from "react";
import "./view/Styles/global.scss";
import HomePage from './view/Components/HomePage'
import Matching from './view/pages/matching/Matching';
import Chat from './view/pages/Chat/Chat'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {

  const [mentorsList, setMentorsList] = useState([])
  const [selectedUser , setSelectedUser] = useState({})

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get('/api/get-user')
  //     const {user} = data
  //     setSelectedUser(user)
  //     console.log(user)
  //   })();
  // }, [])

  return (
          <Router>
      <Routes>
      
          <Route path='/' element={<HomePage />} />
      <Route path="/chat" element={<Chat/>}/>
          
          <Route/>
       
      </Routes>
       </Router>
  );
}

export default App;
