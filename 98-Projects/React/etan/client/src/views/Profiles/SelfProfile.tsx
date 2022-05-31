import React, { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import Feed from "../components/Feed";

// new posts must
interface PostInfoProps {
  ownerId: string;
  content: string;
  time: boolean;
  _id: string;
  ownerFirstName: string;
  ownerLastName: string;
}

//receiving props:
interface SelfProfileProps {
  usersPersonalInfo: any;
  loggedIn: boolean;
  postsList: Array<PostInfoProps>;
  theme: any;
  setPostsList: Function;
  lightTheme: any;
  darkTheme: any;
  userId: any;
}
function SelfProfile(props: SelfProfileProps) {
  const {
    usersPersonalInfo,
    loggedIn,
    darkTheme,
    lightTheme,
    theme,
    postsList,
    setPostsList,
  } = props;
  const { firstName, lastName } = usersPersonalInfo;
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    }
  }, []);

  const params = useParams<string>();
  const { userId } = params;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="wrapper"
    >
      <CssBaseline />
      <div className="wrapper_profile-self">
        <div className="wrapper_profile-self-left">
          <p>
            {firstName}
            {lastName}
          </p>
        </div>
      </div>
      <Feed
        userId={userId}
        loggedIn={loggedIn}
        usersPersonalInfo={usersPersonalInfo}
        setPostsList={setPostsList}
        postsList={postsList}
        theme={theme}
        lightTheme={lightTheme}
        darkTheme={darkTheme}
      />
    </motion.div>
  );
}

export default SelfProfile;
