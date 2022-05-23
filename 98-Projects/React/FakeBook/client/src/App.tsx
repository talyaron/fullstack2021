//Personal workflow imports:
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//styling imports:
import "./views/styles/global.scss";
//mui ->
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, red, green, blue, purple, common } from "@mui/material/colors";
// web logo import:
import { ReactComponent as Logo } from "./views/styles/FakeBook.svg";
//local components imports:
import HomePage from "./views/components/HomePage";
import LoginPage from "./views/components/LoginPage";

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
      main: '#1977f2',
      dark: blue[900],
      contrastText: common.white,
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
      main: '#242526',
    },
    background: {
      
      default: "#18191a",
    },
    divider: '#42b72a'
  },
  
});

function App() {
  const [postsList, setPostsList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [usersPersonalInfo, setUsersPersonalInfo] = useState({
    firstName: "",
    lastName: "",
  });
  const [registerWarning, setRegisterWarning] = useState("");
  const [loginWarning, setLoginWarning] = useState("");
  const [theme, setTheme] = useState(true);
  const { firstName, lastName } = usersPersonalInfo;
  return (
    <Router>
      <Routes>
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
        />
        {/* <Route
          path="/"
          element={
            <LoginPage
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
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
