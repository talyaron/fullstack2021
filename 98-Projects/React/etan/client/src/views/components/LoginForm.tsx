//basic workflow imports:
import { useState, useEffect } from "react";
import axios from "axios";
//styling imports:
//mui ->
import {
  Button,
  TextField,
  FormGroup,
  AppBar,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
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

import { Delete, DriveFileRenameOutline, Send } from "@mui/icons-material";
//receiving props:
interface LoginFormProps {
  handleLogin: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  registerWarning: string;
}
function LoginForm(props: LoginFormProps) {
  const { handleLogin, theme, lightTheme, darkTheme, registerWarning } = props;
  return (
    <form onSubmit={(ev) => handleLogin(ev)}>
      <TextField name="username"/>
      <TextField type="password" name="password" id="password"/>
      <Button type="submit" color={theme ? "secondary" : "primary"} variant="contained">
        Log In!
      </Button>
      <Typography variant="h6">{registerWarning}</Typography>
    </form>
  );
}

export default LoginForm;
