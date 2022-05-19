//basic workflow imports:
import { useState, useEffect } from "react";
import axios from "axios";
//styling imports:
//mui ->
import {
  Avatar,
  Button,
  TextField,
  FormGroup,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Stack,
  Switch,
  Select,
  Toolbar,
  Typography,
  MenuItem,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, red, green, blue, purple, common } from "@mui/material/colors";
import { Delete, DriveFileRenameOutline, Send } from "@mui/icons-material";

// receiving props:
interface RegisterFormProps {
  handleRegistration: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  registerWarning: string;
}

function RegisterForm(props: RegisterFormProps) {
  const { handleRegistration, theme, lightTheme, darkTheme, registerWarning} = props;
  const [gender, setGender] = useState("Gender");
  return (
    <form onSubmit={(ev) => handleRegistration(ev)}>
      <FormControlLabel
          control={
      <FormGroup row>
              <TextField
              defaultValue="Etan"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
              <TextField
              defaultValue="Heyman"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
              <TextField

                type="date"
                name="birthDate"
                id="birthDate"
                placeholder="whats your birth date?"
              />
              <Select
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Gender</em>
                  }

                  return selected;
                }}
                name="gender"
                autoWidth
                id="gender"
                label="gender"
                defaultValue="male"
                onChange={(ev) => {
                  setGender(ev.target.value);
                }}
              >
                 <MenuItem disabled value="Gender">
            Gender
          </MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            
        

              <TextField defaultValue="Etanhey" name="username" id="username" placeholder="Username" />
              <TextField
              defaultValue="etan@heyman.net"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <TextField
              defaultValue="Etanhey"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              />
              <TextField
              defaultValue="Etanhey"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Password"
              />
              <TextField
              defaultValue="Etanhey"
              name="role"
              id="role"
              placeholder="Role"/>

        <Button
          type="submit"
          color={theme ? "secondary" : "primary"}
          variant="contained"
        >
          Sign Up!
        </Button>
      </FormGroup>
    }
          
          label="Login information"
          labelPlacement="top"
        />
        
      <Typography variant="h6" color="warning">{registerWarning}</Typography>
    </form>
  );
}

export default RegisterForm;
