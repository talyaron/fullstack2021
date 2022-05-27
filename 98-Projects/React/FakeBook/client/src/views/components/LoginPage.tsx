import {
  Card,
  CardContent,
  Typography,
  CssBaseline,
  CardHeader,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
// web logo import:
import { ReactComponent as Logo } from "../styles/Facebook-Logoword.svg";
//local components imports:

import LoginForm from "./LoginForm";
import RegisterModal from "./RegisterModal";
import Footer from "./Footer";
import "../styles/global.scss";

//sending props:
interface LoginModalProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
  loginWarning: string;
  loggedIn: boolean;
  setLoginWarning: Function;
  setUsersPersonalInfo: Function;
  setLoggedIn: Function;
  setUserId: Function;
  userId: string;
}
interface LoginFormProps {
  loggedIn: boolean;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  loginWarning: string;
  setLoginWarning: Function;
  setUsersPersonalInfo: Function;
  setLoggedIn: Function;
  setUserId: Function;
  userId: string;
}
interface RegisterModalProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
  registerWarning: string;
  setRegisterWarning: Function;
}
interface RegisterFormProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
  registerWarning: string;
  setRegisterWarning: Function;
}
//receiving props:
interface LoginPageProps {
  //login needs:
  theme: any;
  lightTheme: any;
  darkTheme: any;
  loginWarning: string;
  loggedIn: boolean;
  setLoginWarning: Function;
  setUsersPersonalInfo: Function;
  setLoggedIn: Function;
  setUserId: Function;
  userId: string;
  //register needs:
  registerWarning: string;
  setRegisterWarning: Function;
}

function LoginPage(props: LoginPageProps) {
  const {
    theme,
    lightTheme,
    darkTheme,
    loginWarning,
    loggedIn,
    setLoginWarning,
    setUsersPersonalInfo,
    setLoggedIn,
    setUserId,
    registerWarning,
    setRegisterWarning,
    userId,
  } = props;

  if (theme) {
    var { primary, secondary, background, divider } = lightTheme.palette;
  } else {
    var { primary, secondary, background, divider } = darkTheme.palette;
  }

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <motion.div
        className="App"
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ duration:.8}}

      >
        <CssBaseline />
        <div className="wrapper" style={{ background: background }}>
          <div className="wrapper_login">
            <div className="wrapper_login-components">
              <div className="wrapper_login-description">
                <div className="wrapper_login-description-logo">
                  <Logo />
                </div>
                <Typography variant="h5">
                  Facebook helps you connect and share with the people in your
                  life.
                </Typography>
              </div>
              <div className="wrapper_loginRegister-bunch">
                <Card>
                  <CardHeader
                    sx={{ m: "0 .5em", p: " 1.5em 1em 0 1em" }}
                    action={
                      <LoginForm
                        userId={userId}
                        loggedIn={loggedIn}
                        theme={theme}
                        lightTheme={lightTheme}
                        darkTheme={darkTheme}
                        loginWarning={loginWarning}
                        setLoginWarning={setLoginWarning}
                        setUsersPersonalInfo={setUsersPersonalInfo}
                        setLoggedIn={setLoggedIn}
                        setUserId={setUserId}
                      />
                    }
                  ></CardHeader>
                  <div className="login-form_buffer">
                    <p>‎</p>
                  </div>
                  <CardContent sx={{ m: 0, p: 0 }}>
                    <RegisterModal
                      theme={theme}
                      lightTheme={lightTheme}
                      darkTheme={darkTheme}
                      registerWarning={registerWarning}
                      setRegisterWarning={setRegisterWarning}
                    />
                  </CardContent>
                </Card>
                <h4>
                  <a href="">Create a Page</a> for a celebrity, brand or
                  business.
                </h4>
              </div>
            </div>
          </div>
          <div className="wrapper_footer">
            <Footer />
          </div>
        </div>
      </motion.div>
    </ThemeProvider>
  );
}

export default LoginPage;
