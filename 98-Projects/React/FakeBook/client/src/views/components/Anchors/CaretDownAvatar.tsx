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
interface CaretDownAvatarProps {
    AvatarStyling: any;
    setPopoverButton: Function;
    setArrowAnchor: Function;
}
function CaretDownAvatar(props: CaretDownAvatarProps) {
    const {AvatarStyling, setPopoverButton, setArrowAnchor} = props;
    function handleOpenNavPopover(ev: any) {
      const button = ev.currentTarget.firstChild;
      const icon = ev.currentTarget
      setPopoverButton(icon);
      setArrowAnchor(button);
      icon.style.backgroundColor = "#E7F3FF";
      icon.style.color = "hsl(214, 89%, 52%)";
  
      console.dir(button);
    }
  return (
    <motion.div    >
      <Avatar style={AvatarStyling} onClick={(ev)=>handleOpenNavPopover(ev)}>
        <FontAwesomeIcon size="xs" icon={["fas", "caret-down"]} />
      </Avatar>

    </motion.div>
  );
}

export default CaretDownAvatar;
