import axios from 'axios';
import {useState , useEffect} from 'react';
import './App.css';
import Form from './view/pages/mentee/Profile/Form';

import Cards from './view/pages/mentee/Profile/Cards';

function App() {

  const [cards , setMentees] = useState([])

//   async function getMentees() {
      
//     const { data } = await axios.get("/get-mentees");
//     console.log(data.data)
// }

// useEffect(() => {
//   getMentees()
// }, []);


  return (
    <div className="App">
      <Form setMentees={setMentees}></Form>

      </div>
  );
}

export default App;
