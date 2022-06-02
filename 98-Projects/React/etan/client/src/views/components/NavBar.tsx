//basic workflow imports:
import { useState, useLayoutEffect, useEffect } from "react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
  CssBaseline,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";

//website logo import:
import { ReactComponent as NewFixedLogo } from "../styles/facebook-icon.svg";
// local components imports:
import DotsAvatar from "./Anchors/DotsAvatar";
import DotsPopover from "./Popovers/DotsPopover";
import MessagesAvatar from "./Anchors/MessagesAvatar";
import MessagesPopover from "./Popovers/MessagesPopover";
import CaretDownAvatar from "./Anchors/CaretDownAvatar";
import CaretDownPopover from "./Popovers/CaretDownPopover";
import BellOnAvatar from "./Anchors/BellOnAvatar";
import BellOnPopover from "./Popovers/BellOnPopover";
import ProfileAvatar from "./Anchors/ProfileAvatar";
import Search from "./Search";
import SearchMenu from "./SearchMenu";
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
  loggedIn: boolean;
  setTheme: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  usersPersonalInfo: any;
  userId: any;
  setProfileId: Function;
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
  const {
    setTheme,
    theme,
    lightTheme,
    darkTheme,
    usersPersonalInfo,
    loggedIn,
    userId,
    setProfileId
  } = props;

  const [registered, setRegistered] = useState(false);
  const [PopoverButton, setPopoverButton] = useState<any>();
  const [open, setOpen] = useState(false);
  const [ArrowAnchor, setArrowAnchor] = useState<any>();
  const [ProfileAnchor, setProfileAnchor] = useState<any>();
  const [BellAnchor, setBellAnchor] = useState<any>();
  const [messagesAnchor, setMessagesAnchor] = useState<any>();
  const [dotsAnchor, setDotsAnchor] = useState<any>();
  const [SearchToggle, setSearchToggle] = useState<Boolean>();
  const [searchTerm, setSearchTerm] = useState<string>();
  const [searchMenuToggle, setSearchMenuToggle] = useState<Boolean>();
  const [screenWidth, setScreenWidth] = useState<any>();
  const [width, height] = useWindowSize();
  const [mounted, setMounted] = useState(false);
  const [nav, setNav] = useState(false);
  const [postResults, setPostResults] = useState<Array<string>>([]);
  const [userResults, setUserResults] = useState<Array<string>>([]);

  const { firstName, lastName } = usersPersonalInfo;
  const Initials =
    firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  const navigate = useNavigate();

  function navigateHome() {
    navigate("/HomePage");
  }

  async function handleSearchResult(ev: any) {
    try {
      const searchTerm = ev.target.value;
      if (!searchTerm)
        throw new Error(`no search term in handle search result -search.tsx`);
      if (searchTerm) {
        //search for users
        const { data } = await axios.post("/users/search-users", {
          searchTerm,
        });
        setUserResults(data);

        //search for posts
        axios.post("/posts/search-posts", { searchTerm }).then((res) => {
          setPostResults(res.data);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  function displayWindowSize() {
    // // Get width and height of the window excluding scrollbars
    // let w = document.documentElement.clientWidth;
    // let h = document.documentElement.clientHeight;
    // // Display result inside a div element
    const widerScreenWidth = window.matchMedia("(min-width: 1265px)");

    if (widerScreenWidth.matches === true) {
      setScreenWidth(true);
      return;
    }
    if (widerScreenWidth.matches === false) {
      setScreenWidth(false);
      return;
    }
  }

  useEffect(() => {
    if (searchMenuToggle === false) {
      setSearchToggle(screenWidth);
    }
  }, [screenWidth]);

  useEffect(() => {
    window.addEventListener("resize", displayWindowSize);
  }, []);

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
  const hasWindow = typeof window !== "undefined";

  useEffect(() => {
    mounted ? setSearchToggle(false) : setSearchToggle(true);
  }, [mounted]);

  useEffect(() => {
    console.log(hasWindow, "hasloaded");
    console.log(usersPersonalInfo, "UsersPersonalInfo");
  }, []);

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
            searchMenuToggle={searchMenuToggle}
            setSearchMenuToggle={setSearchMenuToggle}
            width={width}
            height={height}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearchResult={handleSearchResult}
          />
          <SearchMenu
            userResults={userResults}
            postResults={postResults}
            searchMenuToggle={searchMenuToggle}
            width={width}
            height={height}
            searchTerm={searchTerm}
            setProfileId={setProfileId}
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
          <MessagesAvatar
            setPopoverButton={setPopoverButton}
            setMessagesAnchor={setMessagesAnchor}
            AvatarStyling={AvatarStyling}
          />
          <MessagesPopover
            PopoverButton={PopoverButton}
            setMessagesAnchor={setMessagesAnchor}
            messagesAnchor={messagesAnchor}
            Initials={Initials}
            firstName={firstName}
            lastName={lastName}
            setTheme={setTheme}
            theme={theme}
          />
          <DotsAvatar
            setPopoverButton={setPopoverButton}
            setDotsAnchor={setDotsAnchor}
            AvatarStyling={AvatarStyling}
          />
          <DotsPopover
            PopoverButton={PopoverButton}
            setDotsAnchor={setDotsAnchor}
            dotsAnchor={dotsAnchor}
            Initials={Initials}
            firstName={firstName}
            lastName={lastName}
            setTheme={setTheme}
            theme={theme}
          />
          <ProfileAvatar
            setPopoverButton={setPopoverButton}
            setProfileAnchor={setArrowAnchor}
            AvatarStyling={AvatarStyling}
            Initials={Initials}
            firstName={firstName}
            lastName={lastName}
            theme={theme}
            lightTheme={lightTheme}
            darkTheme={darkTheme}
            userId={userId}
          />
        </div>
      </Toolbar>
    </AppBar>
    // </ThemeProvider>

    //   ) : (
    // <div></div>
    //   );
  );
}

export default NavBar;
