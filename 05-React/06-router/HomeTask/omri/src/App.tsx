import './view/styles/global.scss';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from './view/pages/Main';
import Chocolate from './view/pages/Chocolate';
import Vanilla from './view/pages/Vanilla';
import ChocolateChips from './view/pages/ChocolateChips';
import ChocolateBanana from './view/pages/ChocolateBanana';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='chocolate' element={<Chocolate />}>
              <Route path='chocolate/chocolate_chips' element={<ChocolateChips />}></Route>
              <Route path='chocolate/chocolate_banana' element={<ChocolateBanana />}></Route>
            </Route>
            <Route path='/vanilla' element={<Vanilla />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
