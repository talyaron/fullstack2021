import  './view/styles/global.scss';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from './view/pages/Main';
import Chocolate from './view/pages/Chocolate';
import Vanilla from './view/pages/Vanilla';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='/chocolate' element={<Chocolate />}></Route>
            <Route path='/vanilla' element={<Vanilla />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
