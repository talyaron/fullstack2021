import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function AllArticles() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:2}}>
      AllArticles
      <Outlet />
    </motion.div>
  );
}

export default AllArticles;
