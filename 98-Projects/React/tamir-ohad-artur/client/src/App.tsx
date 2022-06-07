import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {
  Routes,
  BrowserRouter,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Main from './components/pages/Main';
 const {id} = useParams()


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/:id' element={< Main/>} />

    
    
</Routes>
</BrowserRouter>
</div>

  );
}

export default App;
