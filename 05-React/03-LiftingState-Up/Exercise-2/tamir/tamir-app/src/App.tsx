import { useId, useState } from "react";
import { idText } from "typescript";
import Ball from "./View/componante/Ball";
import Start from "./View/componante/Start";
import "./View/Style/Global.scss";
interface App {
  handleclick: Function;
  id: string;
}
interface newApp {
  id: string;
}
function App() {
  function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
  const [arr, setarr] = useState<Array<newApp>>([]);

  const [counter, setcounter] = useState(0);
  // function handledelete(id: string) {
  //   setarr(arr.filter((one) => one.id !== id));
  // }

 function handleclick(id: string) {
    setcounter(1);
    console.log(id,'click');
    
  }
  function addarr(id:string){
    const obj = { id: uid() };
    setarr([...arr, obj]);
    console.log(id,'arr');
    
    console.log(arr);
  }
  function handledelete(id: string) { 
    setarr(arr.filter((ta) => ta.id === id));
    console.log(id, 'delete');
  }
  


  return (
    <div className="App">
      {/* <div className="new">
        {arr.map((one, i) => {
          return (
            <Ball key={i} handleclick={() => handleclick(one.id)} id={uid()} />
          );
        })}
      </div> */}
      <button className="App__btn">{counter}</button>
      <Ball handleclick={() => handleclick(uid())} id={uid()} />
    </div>
  );
}

export default App;
