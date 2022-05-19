//basic workflow imports:
import {useState, useEffect} from "react";
//styling imports:
//mui components ->
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
import { Delete, DriveFileRenameOutline, Send } from "@mui/icons-material";
//site logo import:
import { ReactComponent as Logo } from "../styles/FakeBook.svg";
//local components imports:
import Post from "./Post"


// new posts must
interface PostInfoProps {
  ownerId: string;
  content: string;
  time: boolean;
  _id: string;
  ownerFirstName: string;
  ownerLastName: string;

}

  // receiving props:
  interface FeedProps {
      postsList: Array<PostInfoProps>
      theme: any;
      setPostsList: Function;
      lightTheme: any;
      darkTheme:any;
    //   children: Array<PostInfoProps>
    }
    // sending props:
    interface PostsProps {
      setPostsList: Function;
      post: PostInfoProps;
      theme: any;
      lightTheme: any;
      darkTheme: any;
    }
    
function Feed(props:FeedProps) {
    const {postsList, setPostsList, theme, lightTheme, darkTheme} = props;
  return (
    <div className="wrapper_post-root">
    {postsList.map((post: PostInfoProps, i) => {
      return (
        <Post
          key={i}
          setPostsList={setPostsList}
          post={post}
          theme={theme}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
        />
      );
    })}
  </div>
  )
}

export default Feed