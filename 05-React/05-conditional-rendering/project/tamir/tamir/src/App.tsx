import { useState, useEffect } from "react";
import axios from "axios";
import Box from "./View/Components/Box";
import "./View/styles/Global.scss";
import User from "./View/Components/User";
import { on } from "events";

interface App {
  name: String;
  id: String;
}

function App() {
  const [arr, setarr] = useState<Array<App>>([]);
  const [name, setname] = useState("");
  const [login, setlogin] = useState(true);

  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  function handladd() {
    const obj = { name, id: uid() };
    setarr([...arr, obj]);
    console.log(arr);
  }
  // useEffect(()=>{
  //   handladd()

  // },[])

  function handledelete(id: any) {
    setarr(arr.filter((one) => one.id !== id));
  }
  if (login) {
    return (
      <div className="App">
        <div className="App__header">
          <button className="App__log">
            היכנס
          </button>
          <div className="App__img">
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" />
          </div>
        </div>

        <Box handleaddone={handladd} setname={setname} />
        <div className="user">
          {arr.map((one, i) => {
            return (
              <div
                key={i}
                className="user__card"
                onClick={() => setlogin(!login)}
              >
                <div className="user__img">
                  <img src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png" />
                </div>
                <h3 className="user__h3">{one.name}</h3>
                <button
                  className="user__delete"
                  onClick={() => handledelete(one.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="App2">
        <div className="App__header">
          <button className="App__log" onClick={() => setlogin(!login)}>
            יציאה
          </button>
          <div className="App__img">
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" />
          </div>
        </div>
        <User />
      </div>
    );
  }
}

export default App;
