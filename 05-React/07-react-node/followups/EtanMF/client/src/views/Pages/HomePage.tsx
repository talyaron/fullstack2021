import React from "react";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import NewArticle from "../Components/NewArticle";
import AllUsers from "../Components/AllUsers";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  workSpace: string;
  _id: string;
}

interface HomePageProps {
  handleOpenUser:Function;
  userList: Array<User>;
}

function HomePage(props: HomePageProps) {
  const { userList, handleOpenUser } = props;
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="wrapper__HomePage">
        <NewArticle />
        {userList && <AllUsers userList={userList} handleOpenUser={handleOpenUser}/>}
        <Outlet />
      </div>
    </motion.div>
  );
}

export default HomePage;
