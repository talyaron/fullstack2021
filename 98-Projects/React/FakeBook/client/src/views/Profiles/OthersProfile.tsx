import React, {useEffect} from "react";
import {CssBaseline} from "@mui/material"
import {motion} from "framer-motion"
import { useParams, useNavigate } from "react-router-dom";

interface OthersProfileProps {
  usersPersonalInfo: any;
  loggedIn: boolean;
}
function OthersProfile(props: OthersProfileProps) {
  const { usersPersonalInfo, loggedIn } = props;
const {firstName,lastName} = usersPersonalInfo;
const navigate= useNavigate();

useEffect(() => {
  if (!loggedIn) {
    navigate("/");
  }
}, []);

  const params = useParams();
  const { userId } = params;
  return (

    
      <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      transition={{ duration:.8}}
      className="wrapper"
      >
      <CssBaseline />
      <div className="wrapper_profile-self">
      <p style={{position: "absolute", top: "150px"}}>
      {firstName}
      {lastName}
      </p>
      {userId}
      </div>
    </motion.div>

  );
}

export default OthersProfile;
