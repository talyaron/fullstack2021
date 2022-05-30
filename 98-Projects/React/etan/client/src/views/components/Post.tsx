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
interface PostsProps {
  setPostsList: Function;
  post: PostInfoProps;
  theme: any;
  lightTheme: any;
  darkTheme: any;
}

function Post(props: PostsProps) {
  const { setPostsList, post, theme, lightTheme, darkTheme } = props;
  const Initials =
    post.ownerFirstName.charAt(0).toUpperCase() +
    post.ownerLastName.charAt(0).toUpperCase();

  if (theme) {
    var { primary, secondary, background } = lightTheme.palette;
  } else {
    var { primary, secondary, background } = darkTheme.palette;
  }
  useEffect(() => {
    console.log("posts loaded");
  }, []);

  return (
    <Card
    raised
      style={{
        color: primary.contrastText,
        backgroundColor: secondary.main,
        textAlign: "left",
        // width: 680,
        // maxWidth: 680,
        minHeight: 194.094,
        // paddingLeft: 16,
        // paddingRight: 16,
        // paddingTop: 12,
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
          >
            {Initials}
          </Avatar>
        }
        title={` ${post.ownerFirstName} ${post.ownerLastName}`}
        subheader={
          <Typography color={theme ? "primary" : "secondary"}>
            {post.time}
          </Typography>
        }
      ></CardHeader>
      <CardContent>{post.content}</CardContent>
    </Card>
  );
}

export default Post;
