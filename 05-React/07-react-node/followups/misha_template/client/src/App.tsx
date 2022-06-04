import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(()=>{
    (async () => {
      const { data } = await axios.get('/api')
      console.log(data);
    })();
  },[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
