import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Modal,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import RegisterForm from "./RegisterForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -42%)",
  // minWidth: 432,
  width: 432,
  height: 'fit-content',
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
};
//receiving props:
interface RegisterModalProps {
  theme: any;
  lightTheme: any;
  darkTheme: any;
  registerWarning: string;
  setRegisterWarning: Function;
}
//sending props:
interface RegisterFormProps {
  setRegisterWarning: Function;
  theme: any;
  lightTheme: any;
  darkTheme: any;
  registerWarning: string;
}

function RegisterModal(props: RegisterModalProps) {
  const { theme, lightTheme, darkTheme, registerWarning, setRegisterWarning } =
    props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* style={{color:"#42b72a"}} */}
      <Button
        style={{ minWidth: "166.523px", minHeight: "48px" }}
        sx={{ py: 0 }}
        color={theme ? "success" : "secondary"}
        variant="contained"
        onClick={handleOpen}
      >
        Create New Account
      </Button>
      <Modal
        BackdropProps={{
          sx: {
            backgroundColor: 'rgb(255, 255, 255, .8)',
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <Card sx={style}>
          <CardHeader
            style={{ paddingTop: 0 }}
            title={<Typography variant="h3">Sign Up</Typography>}
            subheader={<Typography>It's quick and easy.</Typography>}
          ></CardHeader>
          <CardContent style={{ paddingTop: 0 }}>
            <RegisterForm
              theme={theme}
              lightTheme={lightTheme}
              darkTheme={darkTheme}
              registerWarning={registerWarning}
              setRegisterWarning={setRegisterWarning}
            />
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
}

export default RegisterModal;
