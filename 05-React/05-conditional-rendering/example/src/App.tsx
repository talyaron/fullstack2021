import axios from "axios";
import { useState, useEffect } from "react";
import logo from './logo.svg';
import "./App.css";

let counter = 0

function App() {
  const [joke, setJoke] = useState("A joke");
  const [boo, setBoo] = useState(true);

  counter++;
  console.log(counter)

  useEffect(()=>{
    handleGetJoke();
    
  },[])

  //handleGetJoke();

  async function handleGetJoke() {
    try {
      const { data } = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      const { value } = data;
      if (!value) throw new Error("No value in response");
      setJoke(value);
    } catch (error) {
      console.error(error);
    }
  }
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{joke}</p>
          {boo && true ?<p>BOOOO!!!!!!</p>:<p>BEEEE!!!!!</p>}
          {boo && <p>BOOOO55066!!!!!!</p>}
          <p className={boo?"transition green":'transition red'}>I changed my color</p>
          <button onClick={handleGetJoke}>GET JOKE</button>
          <button onClick={()=>setBoo(!boo)}>SET BOO</button>
        </header>
      </div>
    );
  
  
 
}

export default App;
