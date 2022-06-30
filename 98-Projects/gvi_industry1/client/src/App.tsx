import React from 'react';
import axios from 'axios';
import Profile from './view/pages/mentee/Profile';
import Card from './view/pages/mentee/Card';
import SearchMentor from './view/components/SearchMentor';

function App() {

  

  return (
    <>
      <SearchMentor/>
    <Card/>

      {/* <Profile /> */}

      <Profile _id={"1234"} />
    
      
</>
  
  )
}

export default App;
