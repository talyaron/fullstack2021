//Personal workflow imports:

// import 'dotenv/config'
import { useState, useEffect, useTransition } from "react";
import { useCookies, Cookies } from "react-cookie";
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
  Switch,
  FormControlLabel,
  Toolbar,
  CardHeader,
  Avatar,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, red, green, blue, purple, common } from "@mui/material/colors";
import { Delete, DriveFileRenameOutline, Send } from "@mui/icons-material";
// web logo import:
import { ReactComponent as Logo } from "./views/styles/FakeBook.svg";
//local components imports:
import Feed from "./views/components/Feed";
import Post from "./views/components/Post";
import NavBar from "./views/components/NavBar";
import NewPostForm from "./views/components/NewPostForm";
import "./views/styles/global.scss";

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
  handleRegistration: Function;
  handleLogin: Function;
  registerWarning: string;
  setRegisterWarning: Function;
  loggedIn: boolean;
}
interface FeedProps {
  postsList: Array<PostInfoProps>;
  theme: any;
  setPostsList: Function;
  lightTheme: any;
  darkTheme: any;
}
interface NewPostFormProps {
  setPostsList: Function;
  handleNewPost: Function;
  theme: any;
}
//sending props:
interface PostInfoProps {
  ownerId: string;
  content: string;
  time: boolean;
  _id: string;
}
const darkTheme = createTheme({
  palette: {
    primary: {
      light: blue[200],
      main: "#28376f",
      dark: blue[900],
      contrastText: common.white,
    },
    secondary: {
      main: blue[500],
    },
    background: {
      default: blue[900],
    },
  },
});
const lightTheme = createTheme({
  palette: {
    primary: {
      light: blue[200],
      main: blue[900],
      dark: "#28376f",
      contrastText: grey[500],
    },
    secondary: {
      main: blue[500],
    },
    background: {
      default: grey[900],
    },
  },
});

function App() {
  const [postsList, setPostsList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [usersPersonalInfo, setUsersPersonalInfo] = useState({firstName:"", lastName:""})
  const [registerWarning, setRegisterWarning] = useState("");

  async function handleRegistration(ev: any) {
    ev.preventDefault();
    try {
      let {
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword,
        role,
        gender,
        birthDate,
      } = ev.target.elements;

      firstName = firstName.value;
      lastName = lastName.value;
      username = username.value;
      email = email.value;
      password = password.value;
      confirmPassword = confirmPassword.value;
      gender = gender.value;
      birthDate = birthDate.value;
      if (role.value !== "EtanHey") {
        role = "public";
      } else role = "admin";

      if (
        !firstName ||
        !lastName ||
        !username ||
        !email ||
        !password ||
        !confirmPassword ||
        !role ||
        !gender ||
        !birthDate
      )
        throw new Error(`something missing in handleRegister -client side`);
      if (password !== confirmPassword)
        setRegisterWarning("*Passwords dont match");
      setTimeout(() => setRegisterWarning(""), 5000);
      const { data } = await axios.post("/users/add-new-user", {
        firstName,
        lastName,
        username,
        email,
        password,
        role,
        gender,
        birthDate,
        setRegisterWarning,
      });
      const { registerData } = data;
      const message = registerData.message;

      if (!registerData.result) {

        setRegisterWarning(`${message}`);
        setTimeout(() => setRegisterWarning(""), 5000);
        return;
      }
      setRegisterWarning(`${message}`);
      setTimeout(() => setRegisterWarning(""), 5000);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogin(ev: any) {
    ev.preventDefault();
    try {
      let { username, password } = ev.target;
      username = username.value;
      password = password.value;
      if (!username || !password)
        throw new Error(
          `no username or password provided at handleLogin -client side`
        );
      const userData = {
        username,
        password,
      };
      const { data } = await axios.post("/users/login-user", userData) 

      const { loginData } = data;

      
      if (!loginData.result) {
        const message = loginData.message;
        setRegisterWarning(`${message}`);
        setTimeout(() => {
          setRegisterWarning("");
        }, 5000);
      }
 
      const { result } = loginData;

      const currentUsersPersonalInfo = loginData.verifiedUserPersonalInfo


      
console.log(currentUsersPersonalInfo)
      setUsersPersonalInfo(currentUsersPersonalInfo)
      setLoggedIn(true);
      setUserId(result._id);
    } catch (error) {
      console.log(error);
    }
  }
  async function handleNewPost(ev: any) {
    try {
      ev.preventDefault();
  
      if (!userId) throw new Error(`no user id in handleNewPost`);
      const newPostContent = ev.target.elements.newPostContent.value;
      const newPostDate = new Date().toLocaleDateString();
      const newPostHour = new Date().getHours();
      const newPostMinutes = new Date().getMinutes();
      const newPostSeconds = new Date().getSeconds();
      const newPostTime = `${newPostDate},${newPostHour}:${newPostMinutes}:${newPostSeconds}`;
      const newPostInfo = {
        ownerId: userId,
        content: newPostContent,
        time: newPostTime,
      };
      ev.target.reset();
      let { data } = await axios.post("/posts/create-new-post", newPostInfo);
      const { newPost } = data;
      if(newPost) {
        handleGetPostsList();
      }

    } catch (error) {
      console.log(error);
    }
  }
  async function handleGetPostsList() {
    try {
console.log(usersPersonalInfo);

      const { data } = await axios.get(
        `/posts/get-posts-list`
      );
      const currentUsersPostsList = data;


      // let halfArray: any = [];
      // for (let i = 0; i < 100; i++) {
      //   halfArray.push(currentUsersPostsList[i]);
      // }
      setPostsList(currentUsersPostsList);
    } catch (error) {
      console.log(error);
    }
  }
  //"https://jsonplaceholder.typicode.com/todos"
useEffect(() => {

  console.dir(usersPersonalInfo, 'usersPersonalInfo');
  
},[usersPersonalInfo])
  useEffect(() => {
    if (loggedIn) {
      handleGetPostsList();
    }
  }, [userId]);
  const [theme, setTheme] = useState(true);
  const {firstName,lastName} = usersPersonalInfo;
  if (theme) {
    var { primary, secondary, background } = darkTheme.palette;
  } else {
    var { primary, secondary, background } = lightTheme.palette;
  }

  
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <div
        style={{ background: background.default, color: primary.contrastText }}
        className="App"
      >
        <CssBaseline />
        <p>{theme ? "light" : "dark"}</p>
        {/* {usersPersonalInfo?<p>{firstName}</p>:null} */}
        <NavBar
          setTheme={setTheme}
          theme={theme}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
          handleRegistration={handleRegistration}
          handleLogin={handleLogin}
          registerWarning={registerWarning}
          setRegisterWarning={setRegisterWarning}
          loggedIn={loggedIn}
        />
{loggedIn?<p>hello {usersPersonalInfo.firstName} {usersPersonalInfo.lastName}, this is your feed:</p>:null}

        <div className="wrapper">
          <NewPostForm
            theme={theme}
            handleNewPost={handleNewPost}
            setPostsList={setPostsList}
          />
          {postsList ? (
            <Feed
              setPostsList={setPostsList}
              postsList={postsList}
              theme={theme}
              lightTheme={lightTheme}
              darkTheme={darkTheme}
            ></Feed>
          ) : null}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
