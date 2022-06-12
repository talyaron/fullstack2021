import axios from "axios";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Layout";

import {BrowserRouter, Routes,Route}from "react-router-dom";
//Pages
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";



// ====================================================================================
interface User {
  name: string;
  _id: string;
}
// ====================================================================================

function App() {
  
  const [users, setUsers] = useState<Array<User>>([]);
  useEffect(() => {
    axios
      .get("/api/users/get-user")
      .then(({ data }) => {
        console.log(data);
        const { users } = data;
        if (users) {
          setUsers(users);
        }
      })
      .catch((err) => console.error(err));
  }, []);

async function handleUpdateName(ev:any){
  try {
    const name = ev.target.value;
    if(name){
      await axios.post('api/users/add-user',{name});

      const user = {name, _id:''}
      setUsers([...users,user])
    }
  } catch (error) {
    console.error(error)
  }
}

  return (
    <BrowserRouter>
    {/* the navigation system / the conditiona rendering of routes */}
    <Routes>
    
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="article" element={<Article />}></Route>
          <Route path="/article/:name" element={<Article />}></Route>

          <Route path="articles-list" element={<ArticlesList />}></Route>
            
            {/* <Route path=':userId' element={<AboutStudent />}/> */}
          </Route>
      
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
