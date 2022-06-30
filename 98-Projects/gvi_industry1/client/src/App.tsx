import React from 'react';
import './App.css';
import axios from 'axios';
import Profile from './view/pages/mentee/Profile';
import Card from './view/pages/mentee/Card';

function App() {

  

  return (
    <>
    <Card/>

      {/* <Profile /> */}

      <Profile _id={"1234"} />

    </>
  )
}

export default App;
