import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

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
  userResults: Array<any>;
  postResults: Array<any>;
  setProfileId: Function;
}
function SearchMenu(props: SearchMenuProps) {
  const {
    searchMenuToggle,
    width,
    height,
    searchTerm,
    postResults,
    userResults,
    setProfileId,
  } = props;
  return (
    <div className="NavBar_left-search-menu">
      <Collapse
        className="NavBar_left-search-menu-content"
        in={searchMenuToggle}
      >
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
          {postResults && userResults
            ? userResults.map((user, i) => {
                const Initials =
                  user.firstName.charAt(0).toUpperCase() +
                  user.lastName.charAt(0).toUpperCase();
                return (
                  <CardHeader
                    style={{ flexDirection: "column" }}
                    key={i}
                    action={
                      <motion.div
                        // transition={{duration: '2s'}}
                        whileTap={{
                          scale: [1, 0.8],
                          rotate: [0, -90, 180, 0, -180, 90, 0],
                          borderRadius: [10, 50],
                        }}
                        data-search-result
                        className="NavBar_left-search-menu-result"
                      >
                        <Link
                          onClick={() => {
                            setProfileId(user._id);
                            // console.log(user.id);
                          }}
                          to={`/HomePage/Profile/${user._id}`}
                        >
                          <Avatar>{Initials}</Avatar>
                          <p>
                            {user.firstName} {user.lastName}
                          </p>
                        </Link>
                      </motion.div>
                    }
                  />
                );
              })
            : null}
        </Card>
      </Collapse>
    </div>
  );
}

export default SearchMenu;
