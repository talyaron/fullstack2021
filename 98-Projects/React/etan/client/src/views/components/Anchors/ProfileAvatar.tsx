import { useState, useEffect } from "react";
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
  Typography,
  Avatar,
  Popover,
  InputBase,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/material/styles";

//website logo import:
import { ReactComponent as NewFixedLogo } from "../styles/facebook-icon.svg";
interface ProfileAvatarProps {
  AvatarStyling: any;
  setPopoverButton: Function;
  setProfileAnchor: Function;
  Initials: string;
  firstName: string;
  lastName: string;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  userId: string;
}
function ProfileAvatar(props: ProfileAvatarProps) {
  const {
    AvatarStyling,
    setPopoverButton,
    setProfileAnchor,
    Initials,
    firstName,
    lastName,
    theme,
    lightTheme,
    darkTheme,
    userId,
  } = props;
  const navigate = useNavigate();
  if (theme) {
    var { primary, secondary, background } = darkTheme.palette;
  } else {
    var { primary, secondary, background } = lightTheme.palette;
  }
  const ProfileAvatarStyling = {
    display: 'flex',
    placeItems:"center",
    placeContent:"space-between",
    gap: '1em',
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "1em",
    width: "fit-content",
    color: secondary,
    borderRadius: "50px",
  };
  useEffect(() => {
    //  AvatarStyling.width = 100;
    //  AvatarStyling.borderRadius = 10;
  }, []);
  function handleOpenSelfProfile(ev: any) {
    navigate(`/HomePage/Profile/${userId}`);

    // const button = ev.currentTarget.firstChild;
    // const icon = ev.currentTarget;
    // setPopoverButton(icon);
    // setProfileAnchor(button);
    // icon.style.backgroundColor = "#E7F3FF";
    // icon.style.color = "hsl(214, 89%, 52%)";
    // console.dir(button);
  }
  return (
    <button
      style={ProfileAvatarStyling}
      // sx={{borderRadius:10}}
      onClick={(ev) => handleOpenSelfProfile(ev)}
    >
      <Avatar sx={{ backgroundColor: "transparent" }}>{Initials}</Avatar>

      <Typography>{firstName}</Typography>
    </button>
  );
}

export default ProfileAvatar;
