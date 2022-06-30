import React from "react";
import "./view/Styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './view/Components/HomePage'
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
    <BrowserRouter>
      <Routes>
      
          <Route path='/' element={<HomePage />} />
          
          <Route/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
