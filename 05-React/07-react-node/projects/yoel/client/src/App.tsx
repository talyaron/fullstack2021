import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './view/components/Login';
import Register from './view/components/Register';
import Home from './view/page/Home';
import Nav from './view/components/Nav';
import './view/style/global.scss';


import './App.css';
import Entrance from './view/page/Entrance';
import NavEntrance from './view/components/NavEntrance';

function App() {
  interface Article {
    username: string,
    title: string,
    text: string,

  }
  const [article, setArticle] = useState<Array<Article>>([{ username: 'nolose' ,  title:'qneceitohacerpasegir' ,text:'laverdadqyonoseperovoyasegirmasfuoertepaganar'  }]);

  return (
    <BrowserRouter>
      <Routes>


        <Route path='/' element={<Nav />}>
          <Route index element={<Entrance />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Route>

        <Route path='/home' element={<NavEntrance />}>

          <Route index element={<Home article={article} setArticle={setArticle} />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
