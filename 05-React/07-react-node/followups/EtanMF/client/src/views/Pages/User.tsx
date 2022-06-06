import { useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Back from "../Components/Back";
import { UserInfo } from "../../AnimatedRoutes"
import UserNavBar from "../Components/UserNavBar";

interface UserProps {
  handleGetUsers: Function;
  currentUser?: UserInfo;
}

function User(props: UserProps) {
  const params = useParams();
  const { userId } = params;
  const navigate = useNavigate();
  const { handleGetUsers, currentUser } = props;
  

  useEffect(() => {
    return () => {

      handleGetUsers(userId)

    }
  }, [])


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Back />

      <UserNavBar currentUser={currentUser} />


      {userId}
      <p>here</p>



    </motion.div>
  );
}

export default User;
