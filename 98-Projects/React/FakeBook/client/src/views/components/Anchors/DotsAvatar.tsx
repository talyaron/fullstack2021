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
interface DotsAvatarProps {
  AvatarStyling: any;
  setPopoverButton: Function;
  setDotsAnchor: Function;
}
function DotsAvatar(props: DotsAvatarProps) {
  const { AvatarStyling, setPopoverButton, setDotsAnchor } = props;
  function handleOpenNavPopover(ev: any) {
    const button = ev.currentTarget.firstChild;
    const icon = ev.currentTarget;
    setPopoverButton(icon);
    setDotsAnchor(button);
    icon.style.backgroundColor = "#E7F3FF";
    icon.style.color = "hsl(214, 89%, 52%)";
    console.dir(button);
  }
  const FlexAvatarStyling: any = {
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
    placeContent: "center",
    gap: 0,
  };
  return (
    <motion.div>
      <Avatar style={AvatarStyling} onClick={(ev) => handleOpenNavPopover(ev)}>
        <div style={FlexAvatarStyling}>
          <FontAwesomeIcon
            style={{ padding: 0, margin: 0 }}
            size="xs"
            icon={["fas", "ellipsis"]}
          />
          <FontAwesomeIcon size="xs" icon={["fas", "ellipsis"]} />
          <FontAwesomeIcon size="xs" icon={["fas", "ellipsis"]} />
        </div>
      </Avatar>
    </motion.div>
  );
}

export default DotsAvatar;
