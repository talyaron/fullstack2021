import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { makeStyles } from "@mui/material";
import { Toolbar, Box,AppBar,Typography,Button, IconButton,Stack,Theme,Container} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { display } from "@mui/system";

const useStyles = makeStyles(() => ({
  dfgfdgdfg:{

  }
}));

export function ButtonAppBar() {
  const classes = useStyles
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        className="Navbar"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar className={classes.dfgfdgdfg}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            className="button"
          >
            להזמנות
          </Typography>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            יצרית קשר
          </Typography>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Stack direction="row" spacing={2}>
            <button color="inherit">להזמנות</button>
            <button color="inherit"> יצרית קשר</button>
            <button color="inherit"> יצרית קשר</button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;
