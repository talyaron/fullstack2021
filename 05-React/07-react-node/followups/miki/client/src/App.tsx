import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './Main';
import IceCream from './Views/Components/IceCream';
import Home from './Views/Pages/Home';
import Login from './Views/Pages/Login';
import Vanilla from './Views/Components/Vanilla';
import Chokate from './Views/Components/Chokate';

export interface IceCreamFlavourArray {
  taste: string;
  subTaste: string;
}

function App() {

  const [vanilla, setVanilla] = useState("")
  const [chokate, setChokate] = useState("")
  const [chokateArray, setChokatArray] = useState<Array<IceCreamFlavourArray>>([])
  // const [login, setLogin] = useState()


  async function handleLogin(e: any) {

    e.preventDefault()

    const name = e.target.name.value;
    const password = e.target.password.value;
    const payload:any = { name, password }

    const { data } = await axios.post('/icecream/users', payload)
    console.log(data);


    e.target.reset()

  }



  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login handleLogin={handleLogin} />}></Route>


            <Route path="/home" element={<Main chokateArray={chokateArray} setChokatArray={setChokatArray}
              vanilla={vanilla} setVanilla={setVanilla} chokate={chokate} setChokate={setChokate} />}>

              <Route path='chokate' element={<Home />}>
                <Route path=":chokate" element={<Chokate />}></Route>
              </Route>

              <Route path="vanilla" element={<IceCream />}>
                <Route path=":vanilla" element={<Vanilla />}></Route>
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
