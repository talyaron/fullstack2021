import React from 'react'
import axios from 'axios'
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
interface PostFormProps {
    setPostsList: Function;
}
function PostForm(props:PostFormProps) {
    const {setPostsList} = props;

    async function getPostsList() {
        const { data } = await axios("https://jsonplaceholder.typicode.com/todos");
        setPostsList(data);
      }

  return (
<div className="wrapper_post-form">
    <DriveFileRenameOutline />
    <FormControlLabel
      control={<TextField variant="standard" />}
      label="Make a new post"
      labelPlacement="top"
    />
    <Send onClick={getPostsList} />
  </div>
  )
}

export default PostForm