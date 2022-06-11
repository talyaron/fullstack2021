import React from "react";

import CottageIcon from "@mui/icons-material/Cottage";

const styledCottageIcon = {
  fontSize: "5rem",
};

function Header() {
  return (
    <div className="Header-div">
      <h1>our basic blog</h1>
      <span className="homeicon">
        Home
        <CottageIcon style={styledCottageIcon} />
      </span>
    </div>
  );
}

export default Header;
