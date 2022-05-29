import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./View/Pages/Layouts";
import Flavours from "./View/Pages/Flavours";
import LayoutRouter from "./LayoutRouter";
import Home from "./View/Pages/Home";
import axios from 'axios'
import "./App.css";

interface LayoutsProps {
  name: string;
  combinations: Array<string>;
}
interface LayoutRouterProps {
  iceCreamShopLayouts: Array<LayoutsProps>;
}
const iceCreamShopLayouts: Array<LayoutsProps> = [
  {
    name: "Chocolate",
    combinations: [
      "Peanut Butter",
      "Strawberry",
      "Pistachio",
      "Fudge & Caramel",
      "vanilla",
    ],
  },
  {
    name: "Vanilla",
    combinations: [
      "Mocha",
      "Cinnamon Toast Crunch",
      "Chocolate Chip",
      "Butter Pecan",
      "Lemon Custard",
    ],
  },
];

const iceCreamShopCombinations = [
  "Mocha",
  "Cinnamon Toast Crunch",
  "Chocolate Chip",
  "Butter Pecan",
  "Lemon Custard",
  "Peanut Butter",
  "Strawberry",
  "Pistachio",
  "Fudge & Caramel",
  "vanilla",
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Layouts"
              element={
                <LayoutRouter iceCreamShopLayouts={iceCreamShopLayouts} />
              }
            >
              {iceCreamShopLayouts
                ? iceCreamShopLayouts.map((layout, i) => {
                    return (
                      <Route
                        key={i}
                        path={`${layout.name}`}
                        element={
                          <Layouts
                            name={layout.name}
                            combinations={layout.combinations}
                            iceCreamShopCombinations={iceCreamShopCombinations}
                          />
                        }
                      >
                        {layout.combinations.map((flavour, i) => {
                          const flavourPath = flavour.replace(/\s/g, "");
                          return (
                            <Route
                              key={i}
                              path={`${flavourPath}`}
                              element={<Flavours layout={layout.name} flavour={flavour} />}
                            />
                          );
                        })}
                      </Route>
                    );
                  })
                : null}
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
