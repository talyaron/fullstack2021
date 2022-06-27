import "./Style1/Main.scss";
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}> </Route>
          <Route path="/Home" element={<Home />}></Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
