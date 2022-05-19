import { useEffect } from "react";
import axios from "axios";
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
import { ReactComponent as Logo } from "../views/styles/FakeBook.svg";
import { Delete, DriveFileRenameOutline, Send } from "@mui/icons-material";

interface PostInfoProps {
  completed: boolean;
  id: number;
  title: string;
  userId: string;
}

interface PostsProps {
  setPostsList: Function;
  post: PostInfoProps;
  theme: any;
  lightTheme: any;
  darkTheme: any;
}

function Post(props: PostsProps) {
  const { setPostsList, post, theme, lightTheme, darkTheme } = props;
  
  
  if (theme) {
    var { primary, secondary, background } = darkTheme.palette;
  } else {
    var { primary, secondary, background } = lightTheme.palette;
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
          >
            {post.userId}
          </Avatar>
        }
        title={post.title}
        subheader={post.id}
      ></CardHeader>
      <CardContent>{post.title}</CardContent>
    </Card>
  );
}

export default Post;
