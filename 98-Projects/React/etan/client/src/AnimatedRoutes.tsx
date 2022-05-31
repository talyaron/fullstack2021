//Personal workflow imports:
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//styling imports:
import "./views/styles/global.scss";
//mui ->
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { blue, common } from "@mui/material/colors";
//local components imports:
import HomePage from "./views/components/HomePage";
import LoginPage from "./views/components/LoginPage";
import NavBar from "./views/components/NavBar";
import SelfProfile from "./views/Profiles/SelfProfile";
import Profile from "./views/Profiles/Profile";
import Layout from "./Layout";
// sending props:
interface LoginPageProps {
  //login needs:
  theme: any;
  lightTheme: any;
  darkTheme: any;
  loginWarning: string;
  loggedIn: boolean;
  setLoginWarning: Function;
  setUsersPersonalInfo: Function;
  setLoggedIn: Function;
  setUserId: Function;
  userId: string;
  //register needs:
  registerWarning: string;
  setRegisterWarning: Function;
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

const lightTheme = createTheme({
  palette: {
    primary: {
      light: blue[200],
      main: "#1977f2",
      dark: blue[900],
      contrastText: common.black,
    },
    secondary: {
      main: "#FFFFF",
    },
    background: {
      default: "#f0f2f5",
    },
  },
});
const darkTheme = createTheme({
  palette: {
    primary: {
      light: blue[200],
      main: "#28376f",
      dark: "#28376f",
      contrastText: common.white,
    },
    secondary: {
      main: "#242526",
    },
    background: {
      default: "#18191a",
    },
    divider: "#42b72a",
  },
});

function AnimatedRoutes() {
  const location = useLocation();
  const [postsList, setPostsList] = useState([]);
  const [othersPostsList, setOthersPostsList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [usersPersonalInfo, setUsersPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    ok: false,
  });
  const [registerWarning, setRegisterWarning] = useState("");
  const [loginWarning, setLoginWarning] = useState("");
  const [theme, setTheme] = useState(true);
  const [profileId, setProfileId] = useState('');
  if (theme) {
    var { primary, secondary, background } = darkTheme.palette;
  } else {
    var { primary, secondary, background } = lightTheme.palette;
  }

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <LoginPage
              userId={userId}
              theme={theme}
              lightTheme={lightTheme}
              darkTheme={darkTheme}
              loginWarning={loginWarning}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              setLoginWarning={setLoginWarning}
              setUsersPersonalInfo={setUsersPersonalInfo}
              setUserId={setUserId}
              registerWarning={registerWarning}
              setRegisterWarning={setRegisterWarning}
            />
          }
        />
        <Route
          path="/HomePage"
          element={
            <Layout
            setProfileId={setProfileId}
              setTheme={setTheme}
              theme={theme}
              loggedIn={loggedIn}
              darkTheme={darkTheme}
              lightTheme={lightTheme}
              usersPersonalInfo={usersPersonalInfo}
              userId={userId}
            />
          }
        >
          <Route
            index
            element={
              <HomePage
                theme={theme}
                lightTheme={lightTheme}
                darkTheme={darkTheme}
                loginWarning={loginWarning}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                setLoginWarning={setLoginWarning}
                setUsersPersonalInfo={setUsersPersonalInfo}
                setUserId={setUserId}
                registerWarning={registerWarning}
                setRegisterWarning={setRegisterWarning}
                userId={userId}
                usersPersonalInfo={usersPersonalInfo}
                setPostsList={setPostsList}
                postsList={postsList}
                setTheme={setTheme}
              />
            }
          ></Route>
          <Route path="Profile">
            <Route
              path=":userId"
              element={
                userId === profileId ?
                  <SelfProfile
                    userId={userId}
                    loggedIn={loggedIn}
                    usersPersonalInfo={usersPersonalInfo}
                    setPostsList={setPostsList}
                    postsList={postsList}
                    theme={theme}
                    lightTheme={lightTheme}
                    darkTheme={darkTheme}
                  />:<Profile
                  userId={userId}
                  loggedIn={loggedIn}
                  usersPersonalInfo={usersPersonalInfo}
                  setPostsList={setPostsList}
                  postsList={postsList}
                  othersPostsList={othersPostsList}
                  setOthersPostsList={setOthersPostsList}
                  theme={theme}
                  lightTheme={lightTheme}
                  darkTheme={darkTheme}
                  profileId={profileId}
                />
              }
            ></Route>
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
