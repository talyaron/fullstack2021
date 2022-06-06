import { useEffect, useTransition } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { createBrowserHistory } from "history";
import NewArticle from "../Components/NewArticle";
import AllUsers from "../Components/AllUsers";
import Back from "../Components/Back";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  workSpace: string;
  _id: string;
}

interface HomePageProps {
  handleGetUsers: Function;
  handleOpenUser: Function;
  userList: Array<User>;
  mounted: Boolean;
  setMounted: Function;
}

function HomePage(props: HomePageProps) {
  const { mounted, setMounted, userList, handleOpenUser, handleGetUsers } =
    props;
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    return () => {
      startTransition(() => {
        handleGetUsers();
      });
    };
  }, []);
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // transition={{ duration: 2 }}
    >
      <div className="wrapper__HomePage">
        <Back/>
        <NewArticle />
        {isPending && <p>loading...</p>}
        {userList && (
          <AllUsers userList={userList} handleOpenUser={handleOpenUser} />
        )}
        <Outlet />
      </div>
    </motion.div>
  );
}

export default HomePage;
