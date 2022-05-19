import { useState } from "react";

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
interface RegisterModalProps {
  RegisterForm: Function;
  handleRegistration: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  registerWarning: string;
}
//sending props:
interface RegisterFormProps {
  handleRegistration: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  registerWarning: string;
}

function RegisterModal(props: RegisterModalProps) {
  const {
    RegisterForm,
    handleRegistration,
    theme,
    lightTheme,
    darkTheme,
    registerWarning,
  } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button color={theme?"primary":"secondary"} onClick={handleOpen}>Register!</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <RegisterForm
            theme={theme}
            lightTheme={lightTheme}
            darkTheme={darkTheme}
            handleRegistration={handleRegistration}
            registerWarning={registerWarning}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default RegisterModal;
