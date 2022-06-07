import { useEffect, useTransition } from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { createBrowserHistory } from "history";
import NewArticle from "../Components/NewArticle";
import AllUsers from "../Components/AllUsers";
import Back from "../Components/Back";
import AllArticles from "../Components/AllArticles";
import { ArticleInfoParams } from "../../AnimatedRoutes";
import ArticleSearch from "../Components/ArticleSearch"

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
  handleSearchTerm: Function;
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
  const {
    mounted,
    setMounted,
    userList,
    handleOpenUser,
    handleGetUsers,
    handleCreateNewArticle,
    getAllArticles,
    articleList,
    handleSetSingleArticle,
    handleSearchTerm
  } = props;
  const [isPending, startTransition] = useTransition();
  useEffect(() => {

    startTransition(() => {
      handleGetUsers();
      getAllArticles();
    });
    return () => {};
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
        {/* <ArticleSearch /> */}
        <NewArticle handleCreateNewArticle={handleCreateNewArticle} />
        {isPending && <p>loading...</p>}
        <div className="wrapper__HomePage-lists">
          {userList && (
            <AllUsers userList={userList} handleOpenUser={handleOpenUser} />
          )}

          {articleList && (
            <AllArticles
              articleList={articleList}
              handleSetSingleArticle={handleSetSingleArticle}
              handleSearchTerm={handleSearchTerm}
            />
          )}
        </div>
        <Outlet />
      </div>
    </motion.div>
  );
}

export default HomePage;
