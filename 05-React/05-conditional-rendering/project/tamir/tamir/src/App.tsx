
import { useState } from "react";
import Box from "./View/Components/Box";
import "./View/styles/Global.scss";

function App() {

  // useEffect(() => {}, []);
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
         <Box />
    </div>
  );
}

export default App;
