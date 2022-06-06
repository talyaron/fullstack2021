import { useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Back from "../Components/Back";
function User() {
  const params = useParams();
  const { userId } = params;
  const navigate = useNavigate();

  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Back />

      {userId}
      <p>here</p>
      <Outlet />
    </motion.div>
  );
}

export default User;
