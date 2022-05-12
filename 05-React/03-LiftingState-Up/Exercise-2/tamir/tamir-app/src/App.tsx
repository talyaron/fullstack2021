import { useState } from 'react';
import Ball from './View/componante/Ball';
import './View/Style/Global.scss';
interface app {
  handleclick:Function;
}
function App() {

const [counter, setcounter] = useState(0)

function handleclick(ev:any){
  const newcounter = counter+1
  setcounter(newcounter)
  console.log(newcounter);
  
}

  return (
    <div className="App" >
      <button className='App__btn' onClick={handleclick}>{counter}</button>
      <Ball handleclick={handleclick}/>
    </div>
  );
}

export default App;
