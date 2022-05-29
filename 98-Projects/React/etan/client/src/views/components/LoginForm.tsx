//basic workflow imports:
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//styling imports:
//mui ->
import {
  Button,
  ButtonProps,
  TextField,
  FormGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

//receiving props:
interface LoginFormProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
  loginWarning: string;
  setLoginWarning: Function;
  setUsersPersonalInfo: Function;
  setLoggedIn: Function;
  setUserId: Function;
  userId: string;
  loggedIn: boolean;
}

const loginButtonStyle = styled(Button)<ButtonProps>(({ theme }) => ({}));

function LoginForm(props: LoginFormProps) {
  const {
    theme,
    lightTheme,
    darkTheme,
    loginWarning,
    setLoginWarning,
    setUsersPersonalInfo,
    setLoggedIn,
    setUserId,
    loggedIn,
    userId,
  } = props;
  const navigate = useNavigate();

  if (theme) {
    var { primary, secondary, background, divider } = darkTheme.palette;
  } else {
    var { primary, secondary, background, divider } = lightTheme.palette;
  }

  async function handleLogin(ev: any) {
    ev.preventDefault();
    try {
      let { username, password } = ev.target;
      username = username.value;
      password = password.value;
      if (!username || !password)
        throw new Error(
          `no username or password provided at handleLogin -client side`
        );
      const userData = {
        username,
        password,
      };
      const { data } = await axios.post("/users/login-user", userData);

      const { loginData } = data;

      if (!loginData.result) {
        const message = loginData.message;
        setLoginWarning(`${message}`);
        setTimeout(() => {
          setLoginWarning("");
        }, 5000);
      } else {
        const { result } = loginData;
        const currentUsersPersonalInfo = loginData.verifiedUserPersonalInfo;
        setUsersPersonalInfo(currentUsersPersonalInfo);
        setLoggedIn(true);
        setUserId(result._id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (loggedIn) {
      navigate("/HomePage");
    }
  }, [userId]);

  return (
    <form className="login-form" onSubmit={(ev) => handleLogin(ev)}>
      {/* <FormControl> */}
      <FormGroup sx={{ gap: "12px" }}>
        <TextField
          // margin="dense"
          name="username"
          id="username"
          placeholder="Email address"
        />
        <TextField
          // margin="dense"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <Button
          type="submit"
          color={"primary"}
          style={{ fontSize: "20px", lineHeight: "42px" }}
          variant="contained"
        >
          Log In
        </Button>
        <a
          href="/"
          // style={{ color: "#42b72a" }}
        >
          Forgotten password?
        </a>
        {loginWarning ? (
          <Typography variant="h6">{loginWarning}</Typography>
        ) : null}
      </FormGroup>
      {/* </FormControl> */}
    </form>
  );
}

export default LoginForm;
