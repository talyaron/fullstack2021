//basic workflow imports:
import { useState, useEffect } from "react";
//styling imports:
//mui ->
import {
  Button,
  TextField,
  FormGroup,
  Card,
  CardHeader,
  CardContent,
  Collapse,
  Container,
  CssBaseline,
  AppBar,
  Typography,
  FormControl,
  Stack,
  Switch,
  FormControlLabel,
  Toolbar,
  Avatar,
  Popover,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { grey, red, green, blue, purple, common } from "@mui/material/colors";
import { Delete, DriveFileRenameOutline, Send } from "@mui/icons-material";
//website logo import:
import { ReactComponent as Logo } from "../styles/FakeBook.svg";
import { ReactComponent as NewLogo } from "../styles/FakeBookNew.svg";
import { ReactComponent as NewFixedLogo } from "../styles/facebook-icon.svg";
// local components imports:
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import FeedsSearchBar from "./FeedsSearchBar";

// receiving props:
interface NavBarProps {
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
  usersPersonalInfo: any;
  setLoggedIn: Function;
  setUserId: Function;
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
  loginWarning: string;
}
interface RegisterModalProps {
  RegisterForm: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  registerWarning: string;
}
interface LoginModalProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
  loginWarning: string;
  loggedIn: boolean;
  setLoginWarning: Function;
  setUsersPersonalInfo: Function;
  setLoggedIn: Function;
  setUserId: Function;
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
    registerWarning,
    loginWarning,
    loggedIn,
    setLoginWarning,
    setRegisterWarning,
    setLoggedIn,
    setUsersPersonalInfo,
    usersPersonalInfo,
    setUserId,
  } = props;
  if (theme) {
    var { primary, secondary, background } = darkTheme.palette;
  } else {
    var { primary, secondary, background } = lightTheme.palette;
  }
  const [PopoverButton, setPopoverButton] = useState<any>();
  const [open, serOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const { firstName, lastName } = usersPersonalInfo;
  const Initials =
    firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  function handleOpenNavPopover(ev: any) {
    const button = ev.currentTarget.firstChild;
    console.dir(button);

    setPopoverButton(button);
    setAnchor(button);
    button.style.transform = "scale(.8)";
  }
  function handleClosePopover(ev: any) {
    setAnchor(null);
    if (PopoverButton) {
      PopoverButton.style.transform = "scale(1)";
    }
  }
  async function handleSearch(ev: any) {
    try {
    } catch (error) {}
  }

  return (
    <AppBar id="NavBar" position="fixed" color="secondary">
      <Toolbar disableGutters>
        <NewFixedLogo style={{ marginLeft: "15px", marginRight: "auto" }} />
        {/* <Logo fill={background.default} stroke={background.default} /> */}
        <Avatar style={{cursor: "pointer"}} onClick={handleOpenNavPopover}>
          <FontAwesomeIcon icon={["fas", "caret-down"]} />
        </Avatar>
        <Popover
          open={Boolean(anchor)}
          anchorEl={anchor}
          onClose={handleClosePopover}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Card>
            <CardHeader
              action={
                <Button sx={{gap: '1em'}}>
                  <Avatar>{Initials}</Avatar>
                  {firstName} {lastName}
                </Button>
              }
            />

            <CardContent>
              <Button sx={{width: '100%'}}>See All Profiles</Button>
            </CardContent>
          </Card>
          <FormControlLabel
          control={<Switch
            color="secondary"
            onChange={() => {
              setTheme(!theme);
            }}
          />}
          label={`${theme? 'Dark Mode' : 'Light Mode'}`}
          labelPlacement="end"
        />
          
        </Popover>
        {/* <LoginModal
          theme={theme}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
          loginWarning={loginWarning}
          loggedIn={loggedIn}
          setLoginWarning={setLoginWarning}
          setLoggedIn={setLoggedIn}
          setUsersPersonalInfo={setUsersPersonalInfo}
          setUserId={setUserId}
        />
        <RegisterModal
        setRegisterWarning={setRegisterWarning}
          theme={theme}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
          registerWarning={registerWarning}
        /> */}
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
