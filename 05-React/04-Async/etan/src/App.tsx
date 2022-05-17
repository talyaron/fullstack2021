import { useState, useEffect, useTransition } from "react";
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
import { ReactComponent as Logo } from "./views/styles/FakeBook.svg";
import { Delete, DriveFileRenameOutline, Send } from "@mui/icons-material";
import Post from "./views/components/Post";
import NavBar from "./views/components/NavBar";
import NewPostForm from "./views/components/NewPostForm";
import "./views/styles/global.scss";

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
interface NavBarProps {
  setTheme: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
}

interface NewPostFormProps {
  setPostsList: Function;
}
const darkTheme = createTheme({
  palette: {
    primary: {
      light: blue[200],
      main: "#28376f",
      dark: blue[900],
      contrastText: common.white,
    },
    secondary: {
      main: blue[500],
    },
    background: {
      default: blue[900],
    },
  },
});
const lightTheme = createTheme({
  palette: {
    primary: {
      light: blue[200],
      main: blue[900],
      dark: "#28376f",
      contrastText: grey[500],
    },
    secondary: {
      main: blue[500],
    },
    background: {
      default: grey[900],
    },
  },
});


function App() {
  const [postsList, setPostsList] = useState([]);
  async function getPostsList() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/todos");
    let halfArray: any = [];
    for (let i = 0; i < 100; i++) {
      halfArray.push(data[i]);
    }
    setPostsList(halfArray);
  }

  useEffect(() => {
    getPostsList();
  }, []);
  const [theme, setTheme] = useState(true);
  if (theme) {
    var { primary, secondary, background } = darkTheme.palette;
  } else {
    var { primary, secondary, background } = lightTheme.palette;
  }
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <div
        style={{ background: background.default, color: primary.contrastText }}
        className="App"
      >
        <CssBaseline />
        <p>{theme ? "light" : "dark"}</p>

        <NavBar
          setTheme={setTheme}
          theme={theme}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
        />
        <div className="wrapper">
          <NewPostForm setPostsList={setPostsList} />
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
      </div>
    </ThemeProvider>
  );
}

export default App;
