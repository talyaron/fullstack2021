import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
  LoginForm: Function;
  handleLogin: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  registerWarning: string;
  loggedIn: boolean;
}
//sending props:
interface LoginFormProps {
  handleLogin: Function;
  theme: any;
lightTheme: any;
darkTheme: any;
registerWarning: string;
}

function LoginModal(props: LoginModalProps) {
  const {LoginForm, handleLogin, theme, lightTheme, darkTheme, registerWarning, loggedIn} = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
handleClose();
  },[loggedIn])

  return (
    <div>
      <Button color={theme?"primary":"secondary"} onClick={handleOpen}>Login!</Button>
      <Modal
        open={open}
        onClose={handleClose}
       
      >
        <Box sx={style}>
          <LoginForm theme={theme}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
          handleLogin={handleLogin}
          registerWarning={registerWarning}/>
        </Box>
      </Modal>
    </div>
  );
}

export default LoginModal;
