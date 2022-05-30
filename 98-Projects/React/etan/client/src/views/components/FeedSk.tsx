//basic workflow imports:
import { useEffect } from "react";
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
//website logo import:
import { ReactComponent as Logo } from "../views/styles/FakeBook.svg";
import NewPostFormSk from "./NewPostFormSk";
import PostSk from "./PostSk";
// receiving props:
interface FeedSkProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
}

function FeedSk(props: FeedSkProps) {
  const { theme, lightTheme, darkTheme } = props;
  if (theme) {
    var { primary, secondary, background } = lightTheme.palette;
  } else {
    var { primary, secondary, background } = darkTheme.palette;
  }
  return (
    <div className="wrapper">
      <NewPostFormSk
        theme={theme}
        lightTheme={lightTheme}
        darkTheme={darkTheme}
      />
      <div className="wrapper_post-root">{Array(5).map((PostSk, i)=> {
        return(<PostSk key={i} theme={theme} lightTheme={lightTheme} darkTheme={darkTheme} />)
      })}</div>
    </div>
  );
}

export default FeedSk;
