import { useId, useState } from "react";
import Ball from "./View/componante/Ball";
import Start from "./View/componante/Start";
import "./View/Style/Global.scss";
interface App {
  handleclick: Function;
  id: string;
}

function App() {
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  const [arr, setarr] = useState<Array<App>>([]);
  const [counter, setcounter] = useState(0);

  function handleclick(id: any) {
    const newcounter = counter + 1;
    setcounter(newcounter);
      let obj = id;
      setarr([...arr, obj]);
      handledelete(id);
  
  }

  function handledelete(id: string) {
    setarr(arr.filter((ta) => ta.id === id));

  }

  return (
    <div className="App">
      <div className="new">
        <button className="App__btn">{counter}</button>
        <Ball key={uid()} handleclick={() => handleclick(uid())} id={uid()} />
      </div>

      {arr.map((one, i) => {
        return (
          <div className="App__card">
            <Ball key={i} handleclick={() => handledelete(one.id)} id={uid()} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
