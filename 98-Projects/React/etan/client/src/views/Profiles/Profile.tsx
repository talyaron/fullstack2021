import React, { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import FeedSk from "../components/FeedSk";

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
interface ProfileProps {
  usersPersonalInfo: any;
  loggedIn: boolean;
  postsList: Array<PostInfoProps>;
  theme: any;
  setPostsList: Function;
  othersPostsList:any;
  setOthersPostsList: Function;
  lightTheme: any;
  darkTheme: any;
  userId: any;
  profileId:string;
}
function Profile(props: ProfileProps) {
  const {
    usersPersonalInfo,
    loggedIn,
    darkTheme,
    lightTheme,
    theme,
    postsList,
    setPostsList,
    setOthersPostsList,
    othersPostsList,
    profileId
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
      <div className="wrapper_profile">
        <div className="wrapper_profile-left">
          <p>
            'not yours!'
          </p>
        </div>
      </div>
      <FeedSk
      profileId={profileId}
        userId={profileId}
        loggedIn={loggedIn}
        setOthersPostsList={setOthersPostsList}
    othersPostsList={othersPostsList}
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

export default Profile;
