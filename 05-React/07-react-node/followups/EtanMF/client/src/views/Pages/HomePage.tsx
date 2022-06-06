import { useEffect, useTransition } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { createBrowserHistory } from "history";
import NewArticle from "../Components/NewArticle";
import AllUsers from "../Components/AllUsers";
import Back from "../Components/Back";
import AllArticles from "../Components/AllArticles";
import { ArticleInfoParams } from '../../AnimatedRoutes'

interface HomePageProps {
  handleGetUsers: Function;
  handleOpenUser: Function;
  userList: Array<UserInfo>;
  mounted: Boolean;
  setMounted: Function;
  handleCreateNewArticle: Function;
  getAllArticles: Function;
  articleList: Array<ArticleInfoParams>;
  handleSetSingleArticle: Function;
}

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  workSpace: string;
  _id: string;
}

function HomePage(props: HomePageProps) {
  const { mounted, setMounted, userList, handleOpenUser, handleGetUsers, handleCreateNewArticle, getAllArticles, articleList, handleSetSingleArticle } =
    props;
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    console.log("home mounting");
    
    startTransition(() => {
      console.log("home unmounting");
      handleGetUsers();
      getAllArticles();
    });
    return () => {
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
        <Back />
        <NewArticle handleCreateNewArticle={handleCreateNewArticle} />
        {isPending && <p>loading...</p>}
        {userList && (
          <AllUsers userList={userList} handleOpenUser={handleOpenUser} />
        )}

        {articleList ? <AllArticles articleList={articleList} handleSetSingleArticle={handleSetSingleArticle} /> : <p>This User does not have any articles</p>}
        <Outlet />
      </div>
    </motion.div>
  );
}

export default HomePage;
