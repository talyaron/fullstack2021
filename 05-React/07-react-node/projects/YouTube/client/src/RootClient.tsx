import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate, Link
} from "react-router-dom";
import './Views/styles/global.scss';
import axios from 'axios';


//components
import HomPage from './Views/Pages/HomPage'
import MyVideos from './Views/Pages/MyVideos';

export interface VideoInfo {
  name: String,
  user: String,
  date: String,
  views: String,
  img: string,
  _id: String,
}


function Root() {
  const [videoList, setVideoList] = useState<Array<VideoInfo>>([])
  const [openSideBar, setOpenSideBar] = useState(true)
  const [openLogin, setOpenLogin] = useState(false)
  const [loginConfirm, setLoginConfirm] = useState(false)
  const [logedUserId, setLogedUserId] = useState('')
  const [userVideosArray, setUserVideosArray] = useState([])
  const navigate = useNavigate()

  async function getAllVideos() {
    const { data } = await axios.post('/api/videos/get-all-videos')
    const { allVideos } = data

    setVideoList(allVideos)

  }

  async function handleLogin(e: any) {

    e.preventDefault()

    const name = e.target.name.value
    const password = e.target.password.value

    const { data } = await axios.post('/api/users/login', { name, password })
    const { logedUser } = data    
    const { ok } = data;
    
    if (ok === true) {
      setLoginConfirm(false)
      setLogedUserId(logedUser._id)
      
      
      setTimeout(() => {
        setOpenLogin(!openLogin);
      }, 1500)


      e.target.reset()

    } else if (ok === false) {
      setLoginConfirm(true)

    }

  }

  function handleGotoMyVideos(id: String) {

    navigate(`/videos/${id}`)

  }

  async function handleGetAllVideos (id: String) { 
        

    const {data} = await axios.get(`/api/videos/get-users-videos?id=${id}`)

    const {videosOfOneUser } = data
    setUserVideosArray(videosOfOneUser)
    console.log(videosOfOneUser);
    
  }



  return (
    <div className="wrapper">


        <Routes>
          <Route path="/" element={<HomPage handleGetAllVideos={getAllVideos} videoList={videoList}
            setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} setOpenLogin={setOpenLogin} openLogin={openLogin}
            handleLogin={handleLogin} loginConfirm={loginConfirm} logedUserId={logedUserId} handleGotoMyVideos={handleGotoMyVideos} />}>
          </Route>

          <Route path="/videos">
            <Route path=":userId" element={<MyVideos handleGetAllVideos={handleGetAllVideos} userVideosArray={userVideosArray} />}></Route>
          </Route>


        </Routes>

      


    </div>
  );
}

export default Root;
