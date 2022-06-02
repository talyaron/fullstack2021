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
interface FeedSkProps {
  postsList: Array<PostInfoProps>;
  othersPostsList:Array<PostInfoProps>;
  theme: any;
  setOthersPostsList:Function;
  setPostsList: Function;
  lightTheme: any;
  darkTheme: any;
  usersPersonalInfo: any;
  loggedIn: boolean;
  userId: any;
  profileId:string;
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


function FeedSk(props: FeedSkProps) {
  const {
    postsList,
    setPostsList,
    setOthersPostsList,
    othersPostsList,
    theme,
    lightTheme,
    darkTheme,
    usersPersonalInfo,
    loggedIn,
    userId,
    profileId
  } = props;
  const [isPending, startTransition] = useTransition();
  if (theme) {
    var { primary, secondary, background } = lightTheme.palette;
  } else {
    var { primary, secondary, background } = darkTheme.palette;
  }
  async function handleGetOthersPostsList() {
    try {
      console.log(profileId);
      const { data } = await axios.post(`/posts/get-others-posts-list`, {profileId});
      const otherUsersPostsList = data;

      // let halfArray: any = [];
      // for (let i = 0; i < 100; i++) {
      //   halfArray.push(currentUsersPostsList[i]);
      // }
      setOthersPostsList(otherUsersPostsList);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {}, [usersPersonalInfo]);
  useEffect(() => {
    if (loggedIn) {
      handleGetOthersPostsList();
    }
  }, [userId]);
  return (
    <div className="wrapper_feed">
      <div className="wrapper_post-root">
        {othersPostsList.map((post: PostInfoProps, i) => {
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

export default FeedSk;
