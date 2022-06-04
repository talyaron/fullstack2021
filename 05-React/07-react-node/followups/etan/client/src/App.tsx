import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./views/styles/global.scss";
import Combination from "./views/Pages/Combination";
import HomePage from "./views/Pages/HomePage";
import MainIceCream from "./views/Pages/MainIceCream";

interface Types {
  name: string;
  combinationIds: Array<string>;
  __v: number;
  _id: string;
}

function App() {
  const [iceCreamTypes, setIceCreamTypes] = useState<Array<Types>>([]);

  async function handleGetIceCreamTypes() {
    try {
      const { data } = await axios.post(`/types/get-ice-cream-types`);
      console.log(data.iceCreamTypes);
      if(!data.iceCreamTypes) throw new Error(`no icecream types found`)
      if(data.iceCreamTypes){
        setIceCreamTypes(data.iceCreamTypes);
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    if (iceCreamTypes.length === 0) {
      handleGetIceCreamTypes();
      iceCreamTypes.length = 1;
    }
  }, [iceCreamTypes.length === 0]);

  async function handleTypeAdd(ev: any) {
    try {
      ev.preventDefault();
      const newType = ev.target.elements.addType.value;
      const { data } = await axios.post("/types/add-type", { newType });
      handleGetIceCreamTypes();
      ev.target.reset();
    } catch (error) {
      console.log(error);
    }
  }
  async function handleCombinationAdd(ev: any) {
    ev.preventDefault();
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                iceCreamTypes={iceCreamTypes}
                handleCombinationAdd={handleCombinationAdd}
                handleTypeAdd={handleTypeAdd}
              />
            }
          />
          <Route path=":IceCreamType" element={<MainIceCream />}>
            <Route path=":CombinationIds" element={<Combination />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
