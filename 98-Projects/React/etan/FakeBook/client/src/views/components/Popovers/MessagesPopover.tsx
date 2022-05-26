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

interface MessagesPopoverProps {
  messagesAnchor: any;
  setMessagesAnchor: Function;
  PopoverButton: any;
  Initials: string;
  firstName: string;
  lastName: string;
  setTheme: Function;
  theme: any;
}

function MessagesPopover(props: MessagesPopoverProps) {
  const {
    messagesAnchor,
    setMessagesAnchor,
    PopoverButton,
    Initials,
    firstName,
    lastName,
    setTheme,
    theme,
  } = props;
  function handleClosePopover() {
    setMessagesAnchor(null);
    console.log('MessagesAnchor down', messagesAnchor);
    
    if (PopoverButton) {
      PopoverButton.style.backgroundColor = "#e3e6ea";
      PopoverButton.style.color = "#050505";
    }
  }
  return (
    <div>
      <Popover
        open={Boolean(messagesAnchor)}
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
        anchorEl={messagesAnchor}
        onClose={() => handleClosePopover()}
      >
        'messages'
        <Card>
          <CardHeader
            action={
              <Button sx={{ gap: "1em" }}>
                <Avatar>{Initials}</Avatar>
                {firstName} {lastName}
              </Button>
            }
          />

          <CardContent>
            <Button sx={{ width: "100%" }}>See All Profiles</Button>
          </CardContent>
        </Card>
        <FormControlLabel
          control={
            <Switch
              color="secondary"
              onChange={() => {
                setTheme(!theme);
              }}
            />
          }
          label={`${theme ? "Dark Mode" : "Light Mode"}`}
          labelPlacement="end"
        />
      </Popover>
    </div>
  );
}

export default MessagesPopover;
