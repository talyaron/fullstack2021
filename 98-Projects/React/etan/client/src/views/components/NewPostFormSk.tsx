//basic workflow imports:
import React from "react";
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
interface NewPostFormSkProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
}

function NewPostFormSk(props: NewPostFormSkProps) {
  const {
    theme,
    lightTheme,
    darkTheme
  } = props;


  if (theme) {
    var { primary, secondary, background } = darkTheme.palette;
  } else {
    var { primary, secondary, background } = lightTheme.palette;
  }

  // async function getPostsList() {
  //     const { data } = await axios("https://jsonplaceholder.typicode.com/todos");
  //     setPostsList(data);
  //   }

  return (
    <Card
      style={{
        color: theme ? primary.contrastText : primary.contrastText,
        backgroundColor: theme ? secondary.main : primary.main,
        textAlign: "center",
        padding: "1em",
      }}
    >
      <form className="wrapper_post-form">
        <Avatar
          sx={{
            color: theme ? primary.contrastText : primary.main,
            bgcolor: theme ? primary.main : secondary.main,
          }}
        >

        </Avatar>

        <TextField
          name="newPostContent"
          className="newPostSk_Content"
          variant="outlined"
          sx={{
            input: { color: primary.contrastText, flexBasis: "100%" },
            fieldset: {
              width: "100%",
              flex: "100%",
              borderRadius: "3em" ,
            },
          }}
        />

        <Button color={theme ? 'primary': 'secondary'} type="submit">
          <Send />
        </Button>
      </form>
    </Card>
  );
}

export default NewPostFormSk;
