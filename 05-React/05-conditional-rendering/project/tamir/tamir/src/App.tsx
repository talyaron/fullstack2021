import { useState } from "react";
import Box from "./View/Components/Box";
import "./View/styles/Global.scss";

interface App {
  img: string;
  name: String;
  id: String;
}

function App() {
  const [arr, setarr] = useState<Array<App>>([]);
  const [img, setimg] = useState("");
  const [name, setname] = useState("");
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  function handladd(ev: any) {
    const obj = { img, name, id: uid() };
    setarr([...arr, obj]);
    console.log(arr);
  }
  return (
    <div className="App">
      <div className="App__header">
        <button className="App__log">היכנס</button>
        <div className="App__img">
          <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" />
        </div>
      </div>
      <Box handleaddone={handladd} setname={setname} setimg={setimg} />
      <div className="user">
        {arr.map((one, i) => {
          return (
            <div key={i} className="user__card">
              <div className="user__img">
                <img src={one.img} alt="" />
              </div>
              <div className="user__name">
                <h3>{one.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
