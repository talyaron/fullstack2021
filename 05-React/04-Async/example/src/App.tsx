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
  if(boo){
    return <button onClick={()=>setBoo(!boo)}>SET BOO</button>
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{joke}</p>
          <p>BOOOO!!!!!!</p>
          <button onClick={handleGetJoke}>GET JOKE</button>
          <button onClick={()=>setBoo(!boo)}>SET BOO</button>
        </header>
      </div>
    );
  }
  
 
}

export default App;
