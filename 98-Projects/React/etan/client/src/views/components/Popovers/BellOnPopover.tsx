
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
function calcWidth(vw:any, less:any){
  console.log(parseInt(vw) - parseInt(less));
  
return parseInt(vw) - parseInt(less)
}
interface BellOnPopoverProps {
    BellAnchor: any;
    setBellAnchor: Function;
    PopoverButton:any;
    Initials: string;
    firstName: string;
    lastName: string;
    setTheme: Function;
    theme: any;
}


function BellOnPopover(props: BellOnPopoverProps) {
  const { BellAnchor, setBellAnchor, PopoverButton, Initials, firstName, lastName, setTheme, theme } = props;
  function handleClosePopover(ev: any) {

    setBellAnchor(null);
    if (PopoverButton) {
      PopoverButton.style.backgroundColor= "#e3e6ea";
      PopoverButton.style.color= "#050505";
    }
  }
  return (
    <div
    ><Popover
    open={Boolean(BellAnchor)}
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
    anchorEl={BellAnchor}
    onClose={(ev)=>handleClosePopover(ev)}
  >
'bell'
  </Popover></div>
  )
}

export default BellOnPopover