import { useState } from "react";
import Box from "./View/Components/Box";
import Lobi from "./View/Components/Lobi";
import "./View/styles/Global.scss";

interface manoi {
  name: string;
  fhone: number;
  id: string;
}

function App() {
  const [arr, setarr] = useState<Array<manoi>>([]);
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  function handleaddone(ev: any) {
    ev.preventDefault();
    const name = ev.target.name.value;
    const fhone = ev.target.fhone.value;
    const obj = { name, fhone, id: uid() };
    setarr([...arr, obj])
    console.log(arr, name, fhone);
    console.log('hey');

  }

  return (
    <div className="App">
      <div className="App__header">
        <button className="App__log">היכנס</button>
        <div className="App__img">
          <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" />
        </div>

        <div className="App__card">
          {arr.map((one, i) => {
            return (
              <div className="App__manoi" key={i}>
                <p>{one.name}</p>
                <p>{one.fhone}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Box handleaddone={handleaddone} id={uid()} />

      {/* <Lobi /> */}
    </div>
  );
}

export default App;
