import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios'

import './App.css';
import './view/style/global.scss'

import Layout from "./view/pages/Layout";
import Home from "./view/pages/Home";
import Register from "./view/pages/Register";
import SignIn from "./view/pages/SignIn";
import Search from "./view/pages/Search";
import Profile from "./view/pages/Profile";
import PostPage from "./view/pages/PostPage";
import ViewProfile from "./view/pages/ViewProfile";

axios.defaults.baseURL = 'http://localhost:3000/';

export function getCookie(cookieName: any) {
  const cookies = decodeURIComponent(document.cookie);
  let cookiesArr = cookies.split('; ');
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i].split('=')[0] === cookieName) return cookiesArr[i].split('=')[1];
  }
};


function App() {
  useEffect(() => {


  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":postId" element={<PostPage />}></Route>
          <Route path="sign-in" element={<SignIn />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="users/:userId" element={<ViewProfile />}></Route>
          <Route path="search" element={<Search />}>
            <Route path=':search-term' element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
