import {AppBar, Toolbar} from "@mui/material";
import React from "react";

const FooterComponent = () => {
    return (
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                Michael Footer
            </Toolbar>
        </AppBar>
    );
}

export default FooterComponent;
