import React , {useEffect,useState} from 'react';
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import './App.scss';
import Main from './pages/Main';
import axios from 'axios';
import BlogList from './pages/BlogList'
import BlogDetails from './pages/component/BlogDetails'
import Header from './pages/component/Header';


interface blog{
  name: string,
  body: string,
  _id:string
}

function App() {

  const [blogs ,setBlogs] = useState<Array<blog>>([])


  

  // const [id, setId] = useState('')


  return (
    <div className="App">
      <Header></Header>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main setBlogs={setBlogs} blogs={blogs} />}></Route>
      <Route path="">
              <Route path="/blogs/:id" element={<BlogDetails />}/>
            </Route>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
