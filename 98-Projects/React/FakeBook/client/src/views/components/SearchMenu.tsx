import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Collapse,
  Typography,
} from "@mui/material";
interface SearchMenuProps {
  searchMenuToggle: any;
  width: number;
  height: number;
  searchTerm: any;
}
function SearchMenu(props: SearchMenuProps) {
  const { searchMenuToggle, width, height, searchTerm } = props;
  return (
    <div className="NavBar_left-search-menu">
      <Collapse
        className="NavBar_left-search-menu-content"
        in={searchMenuToggle}
      >
        <Card>
          <Card>
            <CardHeader
              style={{ flexDirection: "column" }}
              action={
                <div className="NavBar_left-search-menu-searchTerm">
                  <Avatar>
                    <FontAwesomeIcon size="xs" icon="magnifying-glass" />
                  </Avatar>
                  <p>

                    Search for <strong>{searchTerm}</strong>
                  </p>
                </div>
              }
            />
          </Card>
        </Card>
      </Collapse>
    </div>
  );
}

export default SearchMenu;
