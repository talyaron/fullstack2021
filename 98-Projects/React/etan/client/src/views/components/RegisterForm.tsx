//basic workflow imports:
import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/system";
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
  FormLabel,
  Grid,
  InputLabel,
  Stack,
  Switch,
  Select,
  Toolbar,
  Typography,
  Radio,
  RadioGroup,
  MenuItem,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, red, green, blue, purple, common } from "@mui/material/colors";
import { Delete, DriveFileRenameOutline, Send } from "@mui/icons-material";

// receiving props:
interface RegisterFormProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
  registerWarning: string;
  setRegisterWarning: Function;
}

function RegisterForm(props: RegisterFormProps) {
  const { theme, lightTheme, darkTheme, registerWarning, setRegisterWarning } =
    props;
  const [gender, setGender] = useState();
  function handleGender(ev: any) {
    setGender(ev.target.value);
  }
  async function handleRegistration(ev: any) {
    ev.preventDefault();
    try {
      let { firstName, lastName, email, password, birthDate } =
        ev.target.elements;

      firstName = firstName.value;
      lastName = lastName.value;
      email = email.value;
      password = password.value;
      birthDate = birthDate.value;

      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !gender ||
        !birthDate
      )
        throw new Error(`something missing in handleRegister -client side`);
      // if (password !== confirmPassword)
      //   setRegisterWarning("*Passwords dont match");
      // setTimeout(() => setRegisterWarning(""), 5000);
      const { data } = await axios.post("/users/add-new-user", {
        firstName,
        lastName,
        email,
        password,
        gender,
        birthDate,
        setRegisterWarning,
      });
      const { registerData } = data;
      const message = registerData.message;

      if (!registerData.result) {
        setRegisterWarning(`${message}`);
        setTimeout(() => setRegisterWarning(""), 5000);
        return;
      }
      setRegisterWarning(`${message}`);
      setTimeout(() => setRegisterWarning(""), 5000);
    } catch (error) {
      console.log(error);
    }
  }
  const ShortTextField = styled(TextField)({
    margin: "0 auto ",
  });

  const TwoTextFieldsGroup = styled(FormGroup)({
    flexWrap: "nowrap",
    gap: 10,
  });
  return (
    <form className="register-form" onSubmit={(ev) => handleRegistration(ev)}>
      <TwoTextFieldsGroup row>
        <ShortTextField
          size="small"
          name="firstName"
          id="firstName"
          placeholder="First Name"
        />
        <ShortTextField
          size="small"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
        />
      </TwoTextFieldsGroup>
      <TextField
        fullWidth
        size="small"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />
      <TextField
        fullWidth
        size="small"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <FormControl>
        <FormLabel id="date-label">Date of birth</FormLabel>
        <FormGroup>
          <TextField
            style={{ minWidth: "100%" }}
            size="small"
            type="date"
            name="birthDate"
            id="birthDate"
            placeholder="whats your birth date?"
          />
        </FormGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="gender-label">Gender</FormLabel>
        <RadioGroup onChange={(ev) => handleGender(ev)} row>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel
            value="costume"
            control={<Radio />}
            label="Costume"
          />
        </RadioGroup>
      </FormControl>
      {/* <FormControlLabel
        control={
          <FormGroup> */}
      {/* <Select
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Gender</em>;
            }
            
            return selected;
          }}
          size="small"
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
          </Select> */}
      {/* </FormGroup>
        }
        label="Gender"
        labelPlacement="top"
        /> */}
      {/* <TextField
        size="small"
        defaultValue="Etanhey"
        name="role"
        id="role"
        placeholder="Role"
        /> */}
      <Typography style={{ fontSize: "62.5%" }} variant="subtitle1">
        By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
        Policy. You may receive SMS notifications from us and can opt out at any
        time.
      </Typography>
      <Button
        type="submit"
        color="success"
        variant="contained"
        style={{ width: "fit-content" }}
      >
        Sign Up!
      </Button>

      <Typography variant="h6" color="warning">
        {registerWarning}
      </Typography>
    </form>
  );
}

export default RegisterForm;
