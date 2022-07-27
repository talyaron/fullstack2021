import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { VideoInfo } from '../../RootClient'

//components
import VideosGrid from '../Components/VideosGrid';
import Login from '../Components/Login'


interface HomePageProps {
    handleGetAllVideos: Function;
    videoList: Array<VideoInfo>;
    setOpenSideBar: Function;
    openSideBar: Boolean;
    setOpenLogin: Function;
    openLogin: Boolean;
    handleLogin: Function;
    loginConfirm: Boolean;
    logedUserId: String;
    handleGotoMyVideos: Function;
}

const HomPage = (props: HomePageProps) => {
    const { handleGetAllVideos, videoList, setOpenSideBar, openSideBar, setOpenLogin,
        openLogin, handleLogin, loginConfirm, logedUserId, handleGotoMyVideos } = props;

    useEffect(() => {
        handleGetAllVideos()
    }, [])


    return (
        <div className='wrapper__homePage'>

            <Login setOpenLogin={setOpenLogin} openLogin={openLogin} handleLogin={handleLogin} loginConfirm={loginConfirm} />


            <VideosGrid videoList={videoList} setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} logedUserId={logedUserId}
            handleGotoMyVideos={handleGotoMyVideos} />


        </div>
    )
}

export default HomPage