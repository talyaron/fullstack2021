//basic workflow imports:
import { useState, useLayoutEffect, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

//styling imports:
//mui ->
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  AppBar,
  Switch,
  FormControlLabel,
  Toolbar,
  Avatar,
  Popover,
  InputBase,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/material/styles";

//website logo import:
import { ReactComponent as NewFixedLogo } from "../styles/facebook-icon.svg";
// local components imports:
import CaretDownAvatar from "./Anchors/CaretDownAvatar";
import CaretDownPopover from "./Popovers/CaretDownPopover";
import BellOnAvatar from "./Anchors/BellOnAvatar";
import BellOnPopover from "./Popovers/BellOnPopover";
import Search from "./Search";
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
interface CaretDownPopoverProps {
  ArrowAnchor: any;
  setArrowAnchor: Function;
  PopoverButton: any;
  Initials: string;
  firstName: string;
  lastName: string;
  setTheme: Function;
  theme: any;
}
interface CaretDownAvatarProps {
  AvatarStyling: any;
  setPopoverButton: Function;
  setArrowAnchor: Function;
}
interface BellOnPopoverProps {
  BellAnchor: any;
  setBellAnchor: Function;
  PopoverButton: any;
  Initials: string;
  firstName: string;
  lastName: string;
  setTheme: Function;
  theme: any;
}
interface BellOnAvatarProps {
  AvatarStyling: any;
  setPopoverButton: Function;
  setBellAnchor: Function;
}
// receiving props:
interface NavBarProps {
  setTheme: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  usersPersonalInfo: any;
}




function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}


function NavBar(props: NavBarProps) {
  const { setTheme, theme, lightTheme, darkTheme, usersPersonalInfo } = props;
  const [registered, setRegistered] = useState(false);
  const [PopoverButton, setPopoverButton] = useState<any>();
  const [open, setOpen] = useState(false);
  const [ArrowAnchor, setArrowAnchor] = useState<any>();
  const [BellAnchor, setBellAnchor] = useState<any>();
  const [SearchToggle, setSearchToggle] = useState<Boolean>();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [width, height] = useWindowSize();
  const [mounted, setMounted] = useState(false);
  
  const { firstName, lastName } = usersPersonalInfo;
  const Initials =
  firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/HomePage");
  }
  
  
  function displayWindowSize() {
    // Get width and height of the window excluding scrollbars
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;
    
    // Display result inside a div element
    const widerScreenWidth = window.matchMedia("(min-width: 1265px)")

}
window.addEventListener("resize", displayWindowSize);


  function handleOpenNavPopover(ev: any) {
    const button = ev.currentTarget.firstChild;
    console.dir(button);

    const icon = ev.currentTarget;
    console.dir(icon);
    setPopoverButton(icon);
    setArrowAnchor(button);
    icon.style.backgroundColor = "#E7F3FF";
    icon.style.color = "hsl(214, 89%, 52%)";

    console.dir(button);
  }
  if (theme) {
    var { primary, secondary, background } = darkTheme.palette;
  } else {
    var { primary, secondary, background } = lightTheme.palette;
  }
  function handleClosePopover(ev: any) {
    setArrowAnchor(null);
    if (PopoverButton) {
      PopoverButton.style.backgroundColor = "#e3e6ea";
      PopoverButton.style.color = "#050505";
    }
  }
  async function handleSearch(ev: any) {
    try {
    } catch (error) {}
  }
  const AvatarStyling = {
    cursor: "pointer",
    backgroundColor: "#e3e6ea",
    color: "#050505",
  };

  const ToolbarStyling = {
    padding: 15,
    placeContent: "space-between",
  };
  const StyledFixedLogo = styled(NewFixedLogo)({
    cursor: "pointer",
  });
  const MenuArrowStyling = styled(FontAwesomeIcon)({});
  const DynamicSearchStyling = {
    backgroundColor: "#e3e6ea",
    color: "#65676B",
  };
  useEffect(() => {
    console.log("nav loaded");
  }, []);
  useEffect(() => {
    if (width < 1256) {
      setSearchToggle(false);
      console.log("1265+");
    }
    if (width > 1256) {
      setSearchToggle(true);
      console.log("1265-");
    }
  }, [width > 1265]);

  useEffect(()=>{
    const hasWindow = typeof window !== 'undefined';
    console.log(hasWindow);
    
  },[])


  return (
    <AppBar className="NavBar" position="fixed" color="secondary">
      <Toolbar style={ToolbarStyling} disableGutters>
        <div className="NavBar_left">
          <StyledFixedLogo
            onClick={() => {
              navigateHome();
            }}
          />
          <Search
            setMounted={setMounted}
            DynamicSearchStyling={DynamicSearchStyling}
            AvatarStyling={AvatarStyling}
            SearchToggle={SearchToggle}
            setSearchToggle={setSearchToggle}
            width={width}
            height={height}
          />
        </div>
        {/* <Logo fill={background.default} stroke={background.default} /> */}
        <div>
          {height} {`${SearchToggle}`} {width}
        </div>
        <div className="NavBar_right">
          <CaretDownAvatar
            setPopoverButton={setPopoverButton}
            setArrowAnchor={setArrowAnchor}
            AvatarStyling={AvatarStyling}
          />
          <CaretDownPopover
            PopoverButton={PopoverButton}
            setArrowAnchor={setArrowAnchor}
            ArrowAnchor={ArrowAnchor}
            Initials={Initials}
            firstName={firstName}
            lastName={lastName}
            setTheme={setTheme}
            theme={theme}
          />
          <BellOnAvatar
            setPopoverButton={setPopoverButton}
            setBellAnchor={setBellAnchor}
            AvatarStyling={AvatarStyling}
          />
          <BellOnPopover
            PopoverButton={PopoverButton}
            setBellAnchor={setBellAnchor}
            BellAnchor={BellAnchor}
            Initials={Initials}
            firstName={firstName}
            lastName={lastName}
            setTheme={setTheme}
            theme={theme}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
