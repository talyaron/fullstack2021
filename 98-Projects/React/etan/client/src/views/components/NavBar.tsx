//basic workflow imports:
import { useState, useEffect } from "react";
//styling imports:
//mui ->
import {
  Button,
  TextField,
  FormGroup,
  AppBar,
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
//website logo import:
import { ReactComponent as Logo } from "../styles/FakeBook.svg";
// local components imports:
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import FeedsSearchBar from './FeedsSearchBar'

// receiving props:
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
  handleSearch: Function
}

//sending props:
interface RegisterFormProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
  handleRegistration: Function;
  registerWarning: string;
}
interface LoginFormProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
  handleLogin: Function;
}
interface RegisterModalProps {
  RegisterForm: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  handleRegistration: Function;
  registerWarning: string;
}
interface LoginModalProps {
  LoginForm: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  handleLogin: Function;
  loggedIn: boolean;
}
interface FeedsSearchBarProps {
  handleSearch: Function;
}
function NavBar(props: NavBarProps) {
  const [registered, setRegistered] = useState(false);

  const {
    setTheme,
    theme,
    lightTheme,
    darkTheme,
    handleRegistration,
    handleLogin,
    registerWarning,
    loggedIn
  } = props;
  if (theme) {
    var { primary, secondary, background } = darkTheme.palette;
  } else {
    var { primary, secondary, background } = lightTheme.palette;
  }
  return (
    <AppBar
      id="NavBar"
      position="static"
      color={theme ? "secondary" : "primary"}
    >
      <Toolbar>
        <Logo fill={background.default} stroke={background.default} />
        <Switch
          color="secondary"
          onChange={() => {
            setTheme(!theme);
          }}
        />
        <LoginModal
          theme={theme}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
          handleLogin={handleLogin}
          LoginForm={LoginForm}
          registerWarning={registerWarning}
          loggedIn={loggedIn}
        />
        <RegisterModal
          theme={theme}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
          handleRegistration={handleRegistration}
          registerWarning={registerWarning}
          RegisterForm={RegisterForm}
        />
        {/* <Button color={theme ? "primary" : "secondary"} variant="outlined" onClick={()=>setRegistered(!registered)}>
          {registered? "Register": "login"}
        </Button>
        {registered ? (
          <LoginForm
            theme={theme}
            lightTheme={lightTheme}
            darkTheme={darkTheme}
            handleLogin={handleLogin}
          />
        ) : (
          <RegisterForm
            theme={theme}
            lightTheme={lightTheme}
            darkTheme={darkTheme}
            handleRegistration={handleRegistration}
            registerWarning={registerWarning}
          />
        )} */}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
