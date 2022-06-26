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
  const [formOpen,setFormOpen] = useState(false)
  const [openLogIn,setOpenLogIn] = useState(false)
  const [openSignUp,setOpenSignUp] = useState(false)


  

  // const [id, setId] = useState('')
  


  return (
    <div className="App">
      <Header formOpen={formOpen} setFormOpen={setFormOpen} openSignUp={openSignUp} openLogIn={openLogIn} 
      setOpenSignUp={setOpenSignUp} setOpenLogIn={setOpenLogIn}></Header>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main formOpen={formOpen} setBlogs={setBlogs} blogs={blogs} openLogIn={openLogIn}  openSignUp={openSignUp} />} ></Route>
      <Route path="">
              <Route path="/blogs/:id" element={<BlogDetails />}/>
            </Route>
    </Routes>
  </BrowserRouter>
  
  </div>
  );
}

export default App;
