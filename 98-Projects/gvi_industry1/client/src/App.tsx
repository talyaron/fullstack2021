import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './view/pages/mentee/Card';
// import Card from './view/pages/mentee/Card';
import Profile from './view/pages/mentee/Profile';

function App() {

  

  return (
    <>

    
      <Card />
      {/* <Profile /> */}

      {/* <Card/> */}
      <Profile _id={"1234"} />

    </>
  )
}

export default App;
