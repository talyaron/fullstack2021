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
interface FeedsSearchBarProps {
  handleSearch: Function;
}
function FeedsSearchBar(props: FeedsSearchBarProps) {
  const {handleSearch} = props;
  return (
    <div className="wrapper_feed-search">
      <TextField name="search" id="search" />
    </div>
  );
}

export default FeedsSearchBar;
