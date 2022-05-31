import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import LoginForm from "./LoginForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
//receiving props:
interface LoginModalProps {
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
//sending props:
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

function LoginModal(props: LoginModalProps) {
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
    userId,
  } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleClose();
  }, [loggedIn]);

  return (
    <div

    >
      <Button color="primary" onClick={handleOpen}>
        Login!
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
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
        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal;
