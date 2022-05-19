//basic workflow imports:
import React from 'react'
import axios from 'axios'
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
interface PostFormProps {
  theme:any;
    setPostsList: Function;
    handleNewPost: Function;
}


function PostForm(props:PostFormProps) {
    const {theme,setPostsList, handleNewPost} = props;

    // async function getPostsList() {
    //     const { data } = await axios("https://jsonplaceholder.typicode.com/todos");
    //     setPostsList(data);
    //   }

  return (
<form onSubmit={(ev)=>handleNewPost(ev)} className="wrapper_post-form">
    <DriveFileRenameOutline color={theme?"secondary":"primary"} />
    <FormControlLabel
      control={<TextField name="newPostContent" id="newPostContent" variant="standard" />}
      label="Make a new post"
      labelPlacement="top"
    />
    <Button color={theme?"secondary":"primary"} type="submit">
    <Send/>
    </Button>
  </form>
  )
}

export default PostForm