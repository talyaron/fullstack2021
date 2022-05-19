import React from "react";
import {
  Button,
  TextField,
  FormGroup,
  AppBar,
  Typography,
  FormControl,
  Collapse,
  Container,
  CssBaseline,
  Stack,
  Switch,
  FormControlLabel,
  Toolbar,
  CardHeader,
  Avatar,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, red, green, blue, purple, common } from "@mui/material/colors";
import { ReactComponent as Logo } from "../styles/FakeBook.svg";
import { Delete, DriveFileRenameOutline, Send } from "@mui/icons-material";

interface NavBarProps {
  setTheme: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
}

function NavBar(props: NavBarProps) {
  const { setTheme, theme, lightTheme, darkTheme } = props;
  if (theme) {
    var { primary, secondary, background } = darkTheme.palette;
  } else {
    var { primary, secondary, background } = lightTheme.palette;
  }
  return (
    <AppBar position="static" color={theme ? "secondary" : "primary"}>
      <Toolbar>
        <Logo fill={background.default} stroke={background.default} />
        <Switch
          color="secondary"
          onChange={() => {
            setTheme(!theme);
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
