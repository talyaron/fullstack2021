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
// receiving props:
interface PostSkProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
}

function PostSk(props: PostSkProps) {
  const {  theme, lightTheme, darkTheme } = props;
  if (theme) {
    var { primary, secondary, background } = lightTheme.palette;
  } else {
    var { primary, secondary, background } = darkTheme.palette;
  }

  return (
  <Card
      style={{
        color: theme ? primary.contrastText : primary.contrastText,
        backgroundColor: theme ? secondary.main : primary.main,
        textAlign: "left",
      }}
    >
      <CardHeader
        color={primary.contrastText}
        style={{ textAlign: "left" }}
        avatar={
          <Avatar
            sx={{
              color: theme ? primary.contrastText : primary.main,
              bgcolor: theme ? primary.dark : secondary.main,
            }}
          ></Avatar>
        }
        title={<Typography className="post_sk-name"></Typography>}
        subheader={<Typography className="post_sk-time"></Typography>}
      ></CardHeader>
      <CardContent>
        <Typography className="post_sk-Content"></Typography>
      </CardContent>
    </Card>
  );
}

export default PostSk;
