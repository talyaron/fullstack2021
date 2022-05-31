//Personal workflow imports:

// import 'dotenv/config'
import { useState, useEffect, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies, Cookies } from "react-cookie";
import { motion } from "framer-motion";
import express from "express";
import mongoose from "mongoose";
import axios from "axios";
//styling imports:
//mui ->
import {
  Button,
  TextField,
  FormGroup,
  AppBar,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Typography,
  FormControl,
  Collapse,
  Container,
  CssBaseline,
  Stack,
  FormControlLabel,
  Toolbar,
  CardHeader,
  Avatar,
} from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { grey, red, green, blue, purple, common } from "@mui/material/colors";
import { Delete, DriveFileRenameOutline, Send } from "@mui/icons-material";
// web logo import:
import { ReactComponent as Logo } from "./views/styles/FakeBook.svg";
//local components imports:
import Feed from "./Feed";
import Post from "./Post";
import NavBar from "./NavBar";
import NewPostForm from "./NewPostForm";
import FeedSk from "./FeedSk";
import LoginPage from "./LoginPage";
import "../styles/global.scss";

//receiving props:
interface PostsProps {
  setPostsList: Function;
  post: PostInfoProps;
  theme: any;
  lightTheme: any;
  darkTheme: any;
}
interface NavBarProps {
  setTheme: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  usersPersonalInfo: any;
}
interface FeedProps {
  postsList: Array<PostInfoProps>;
  theme: any;
  setPostsList: Function;
  lightTheme: any;
  darkTheme: any;
  usersPersonalInfo: any;
  loggedIn: boolean;
  userId: any;
}
interface NewPostFormProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
  loggedIn: boolean;
  usersPersonalInfo: any;
  userId: string;
  handleGetPostsList: Function;
}
//sending props:
interface PostInfoProps {
  ownerId: string;
  content: string;
  time: boolean;
  _id: string;
}
interface HomePageProps {
  setTheme: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  loginWarning: string;
  setLoginWarning: Function;
  registerWarning: string;
  setRegisterWarning: Function;
  loggedIn: boolean;
  setUsersPersonalInfo: Function;
  setLoggedIn: Function;
  setUserId: Function;
  userId: string;
  usersPersonalInfo: any;
  setPostsList: Function;
  postsList: any;
}

function HomePage(props: HomePageProps) {
  const {
    setTheme,
    theme,
    lightTheme,
    darkTheme,
    registerWarning,
    loginWarning,
    loggedIn,
    setLoginWarning,
    setRegisterWarning,
    setLoggedIn,
    setUsersPersonalInfo,
    setUserId,
    userId,
    usersPersonalInfo,
    setPostsList,
    postsList,
  } = props;
  const [hasLoaded, setHasLoaded] = useState();
  const navigate = useNavigate();
  if (theme) {
    var { primary, secondary, background } = lightTheme.palette;
  } else {
    var { primary, secondary, background } = darkTheme.palette;
  }
  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    console.log(postsList);
  });

  const appStyling = {
    background: background.default,
    color: primary.contrastText,
  };
  return (
    <div>
      {/* <Routes>
        <Route path="/">
        <LoginPage handleLogin={handleLogin} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme} loginWarning={loginWarning}/>
        </Route>
      </Routes> */}
      <motion.div
        style={appStyling}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="wrapper"
      >
        <CssBaseline />
        {/* <p>{theme ? "light" : "dark"}</p> */}
        {/* {usersPersonalInfo?<p>{firstName}</p>:null} */}
        {/* <NavBar
        loggedIn={loggedIn}
          usersPersonalInfo={usersPersonalInfo}
          setTheme={setTheme}
          theme={theme}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
        /> */}
        {/* <p>
          {loggedIn
            ? `hello ${usersPersonalInfo.firstName} ${usersPersonalInfo.lastName},
            this is your feed:`
            : "‎"}
        </p> */}
        <div className="wrapper_home">
          <Feed
            userId={userId}
            loggedIn={loggedIn}
            usersPersonalInfo={usersPersonalInfo}
            setPostsList={setPostsList}
            postsList={postsList}
            theme={theme}
            lightTheme={lightTheme}
            darkTheme={darkTheme}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;
