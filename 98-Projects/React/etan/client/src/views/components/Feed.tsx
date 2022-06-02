//basic workflow imports:
import { useState, useEffect, useTransition } from "react";
import axios from "axios";
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
import Post from "./Post";
import PostSk from "./PostSk";
import NewPostForm from "./NewPostForm";

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
  postsList: Array<PostInfoProps>;
  theme: any;
  setPostsList: Function;
  lightTheme: any;
  darkTheme: any;
  usersPersonalInfo: any;
  loggedIn: boolean;
  userId: any;
}
// sending props:
interface NewPostFormProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
  loggedIn: boolean;
  usersPersonalInfo: any;
  userId: string;
  handleGetPostsList: Function;
}
interface PostsProps {
  setPostsList: Function;
  post: PostInfoProps;
  theme: any;
  lightTheme: any;
  darkTheme: any;
}


function Feed(props: FeedProps) {
  const {
    postsList,
    setPostsList,
    theme,
    lightTheme,
    darkTheme,
    usersPersonalInfo,
    loggedIn,
    userId,
  } = props;
  const [isPending, startTransition] = useTransition();
  if (theme) {
    var { primary, secondary, background } = lightTheme.palette;
  } else {
    var { primary, secondary, background } = darkTheme.palette;
  }
  async function handleGetPostsList() {
    try {
      const { data } = await axios.get(`/posts/get-posts-list`);
      const currentUsersPostsList = data;

      // let halfArray: any = [];
      // for (let i = 0; i < 100; i++) {
      //   halfArray.push(currentUsersPostsList[i]);
      // }
      setPostsList(currentUsersPostsList);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {}, [usersPersonalInfo]);
  useEffect(() => {
    if (loggedIn) {
      handleGetPostsList();
    }
  }, [userId]);
  return (
    <div className="wrapper_feed">
      <NewPostForm
        theme={theme}
        lightTheme={lightTheme}
        darkTheme={darkTheme}
        loggedIn={loggedIn}
        usersPersonalInfo={usersPersonalInfo}
        userId={userId}
        handleGetPostsList={handleGetPostsList}
      />
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
    </div>
  );
}

export default Feed;
