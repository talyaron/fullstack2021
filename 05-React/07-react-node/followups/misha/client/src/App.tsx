import React, { useEffect,useContext } from 'react';
import './App.css';
import axios from 'axios';

function App(props:any) {

  const {test} = props;
 
  useEffect(()=>{
    (async () => {
      const { data } = await axios.get('/api/getUsers')
      console.log(data);
    })();
  },[test])

  return (
    <div className="App">

    </div>
  );
}

export default App;
