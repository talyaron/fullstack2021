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
interface NewPostFormProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
  loggedIn: boolean;
  usersPersonalInfo: any;
  userId: string;
  handleGetPostsList:Function;
}

function NewPostForm(props: NewPostFormProps) {
  const {
    theme,
    lightTheme,
    darkTheme,
    loggedIn,
    usersPersonalInfo,
    userId,
    handleGetPostsList,
  } = props;

  async function handleNewPost(ev: any) {
    try {
      ev.preventDefault();

      if (!userId) throw new Error(`no user id in handleNewPost`);
      const newPostContent = ev.target.elements.newPostContent.value;
      const newPostDate = new Date().toLocaleDateString();
      const newPostHour = new Date().getHours();
      const newPostMinutes = new Date().getMinutes();
      const newPostSeconds = new Date().getSeconds();
      const newPostTime = `${newPostDate},${newPostHour}:${newPostMinutes}:${newPostSeconds}`;
      const newPostInfo = {
        ownerId: userId,
        content: newPostContent,
        time: newPostTime,
      };
      ev.target.reset();
      let { data } = await axios.post("/posts/create-new-post", newPostInfo);
      const { newPost } = data;
      console.log(newPost);
      
      if (newPost) {
        handleGetPostsList();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const { firstName, lastName } = usersPersonalInfo;
  const Initials =
    firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  if (theme) {
    var { primary, secondary, background } = lightTheme.palette;
  } else {
    var { primary, secondary, background } = darkTheme.palette;
  }

  // async function getPostsList() {
  //     const { data } = await axios("https://jsonplaceholder.typicode.com/todos");
  //     setPostsList(data);
  //   }

  return (
    <Card
    // color='secondary'
      style={{
        color:  primary.contrastText,
        backgroundColor: background.default,
        textAlign: "center",
        padding: "1em",
        minWidth: '640px',
        maxWidth: '680px',
        overflow: 'hidden'
      }}
    >
      <form onSubmit={(ev) => handleNewPost(ev)} className="wrapper_post-form">
        <Avatar
          sx={{
            color:  primary.main,
            bgcolor:  secondary.main,
          }}
        >
          {Initials}
        </Avatar>

        <TextField
          name="newPostContent"
          id="newPostContent"
          variant="outlined"
          placeholder={loggedIn ? `Whats on your mind, ${firstName}?` : ""}
          style={{ width: "100%", maxWidth: '680px'}}
          sx={{
            input: { color: primary.contrastText, flexBasis: "100%" },
            fieldset: {
              // width: "100%",
              flex: "100%",
              borderRadius: "3em" ,
            },
          }}
        />

        <Button color= 'primary' type="submit">
          <Send />
        </Button>
      </form>
    </Card>
  );
}

export default NewPostForm;
