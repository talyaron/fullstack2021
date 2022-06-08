import React , {useEffect,useState} from 'react';
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import './App.scss';
import Main from './pages/Main';
import BlogsList from './pages/BlogsList'


function App() {

  const [id, setId] = useState('')
  const [newBlog ,setNewBlog] = useState([])

  console.log(newBlog);
  

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main setNewBlog={setNewBlog} />}></Route>
        <Route path='/blogs' element={<BlogsList />} >
        <Route path='/blogs' element={<BlogsList />} ></Route>
          </Route>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
