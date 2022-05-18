import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {

  const [joke,setJoke] = useState('')
  const [mode, setMode] = useState(true)
  async function handleGetJoke() {
    try {
      const {data} = await axios.get("https://api.chucknorris.io/jokes/random");
      const {value} = data;
      setJoke(value);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <button onClick={handleGetJoke}>Get A Joke</button>
      <button onClick={() => setMode(!mode)}>MODE</button>
      {mode?backG.style.backgrounColor ='black':backG.style.backgrounColor = 'blue'}
      <h2>{joke}</h2>

    </div>
  );
}

export default App;
