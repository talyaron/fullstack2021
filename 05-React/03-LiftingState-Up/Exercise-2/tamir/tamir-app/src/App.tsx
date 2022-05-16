import { useState } from "react";
import Ball from "./View/componante/Ball";
import Start from "./View/componante/Start";
import "./View/Style/Global.scss";
interface App {
  handleclick: Function;
  id: string;
  handleclick2:Function
}
// interface newApp {
//   id: string;
// }

function App() {
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
  const [arr, setarr] = useState<Array<App>>([]);
  const [counter, setcounter] = useState(0);

  function handleclick(id: any) {
    setcounter(1);
    if (id) {
      let obj = id;
      setarr([...arr, obj]);
      // addarr(id)
      // handledelete(id)
      console.log(id, arr, "click");
    }
  }
  function handleclick2(id:any) {
    handledelete(id)
  }
  // function addarr(id:any){
  //   let obj = id;
  //   setarr([...arr, obj]);
  //   console.log(id,arr);
  //   handledelete(id)
  // }
  function handledelete(id: any) {
    setarr(arr.filter((ta) => ta.id === id));
    console.log(id, "delete");
  }

  return (
    <div className="App">
      <div className="new">
        {arr.map((one, i) => {
          return (
            <div className="App__card">
              <Ball
                key={i}
                handleclick={() => handleclick2(one.id)}
                id={uid()}
              />
            </div>
          );
        })}
      </div>
      <button className="App__btn">{counter}</button>
      <Ball key={uid()} handleclick={() => handleclick(uid())} id={uid()} />
    </div>
  );
}

export default App;
