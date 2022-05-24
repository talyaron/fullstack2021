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
  Toolbar,
  Avatar,
  Popover,
  InputBase,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/material/styles";

//website logo import:
import { ReactComponent as NewFixedLogo } from "../styles/facebook-icon.svg";
interface BellOnAvatarProps {
    AvatarStyling: any;
    setPopoverButton: Function;
    setBellAnchor: Function;
}
function BellOnAvatar(props: BellOnAvatarProps) {
    const {AvatarStyling, setPopoverButton, setBellAnchor} = props;

    function handleOpenNavPopover(ev: any) {
      const button = ev.currentTarget.firstChild;
      const icon = ev.currentTarget
      setPopoverButton(icon);
      setBellAnchor(button);
      icon.style.backgroundColor = "#E7F3FF";
      icon.style.color = "hsl(214, 89%, 52%)";
  
      console.dir(button);
    }

  return (
    <motion.div
    animate={{rotate: 0}}
    whileHover={{ rotate: ['90deg','-90deg','90deg' ] }}
    transition={{repeat: 15, duration: 2}}
    // onStop={stop}
    >
      <Avatar style={AvatarStyling} onClick={(ev)=>handleOpenNavPopover(ev)}>
        <FontAwesomeIcon size="xs" icon={["fas", "bell"]} />
      </Avatar>

    </motion.div>
  );
}

export default BellOnAvatar;
