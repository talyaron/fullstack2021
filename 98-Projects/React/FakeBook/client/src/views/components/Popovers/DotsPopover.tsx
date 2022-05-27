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

interface DotsPopoverProps {
  dotsAnchor: any;
  setDotsAnchor: Function;
  PopoverButton: any;
  Initials: string;
  firstName: string;
  lastName: string;
  setTheme: Function;
  theme: any;
}

function MessagesPopover(props: DotsPopoverProps) {
  const {
    dotsAnchor,
    setDotsAnchor,
    PopoverButton,
    Initials,
    firstName,
    lastName,
    setTheme,
    theme,
  } = props;
  function handleClosePopover() {
    setDotsAnchor(null);
    console.log('dotsAnchor down', dotsAnchor);
    
    if (PopoverButton) {
      PopoverButton.style.backgroundColor = "#e3e6ea";
      PopoverButton.style.color = "#050505";
    }
  }
  return (
    <div>
      <Popover
        open={Boolean(dotsAnchor)}
        anchorReference="anchorPosition"
    anchorPosition={{ top: 55, left: 2400 }}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
        anchorEl={dotsAnchor}
        onClose={() => handleClosePopover()}
      >
        
'dots'
          
      </Popover>
    </div>
  );
}

export default MessagesPopover;
