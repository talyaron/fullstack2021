import { useTransition, useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Back from "../Components/Back";
import { UserInfo } from "../../AnimatedRoutes";
import UserNavBar from "../Components/UserNavBar";
import { ArticleInfoParams } from "../../AnimatedRoutes";
import AllArticles from "../Components/AllArticles";

interface UserProps {
  handleGetUsers: Function;
  currentUser?: UserInfo;
  getAllArticles: Function;
  articleList: Array<ArticleInfoParams>;
  handleSetSingleArticle: Function;
  handleSearchTerm: Function;
  loginUserId: String;
  handleUpdateArticle: Function;
  handleDeleteArticle: Function;
}

function User(props: UserProps) {
  const [isPending, startTransition] = useTransition();
  const params = useParams();
  const { userId } = params;
  const navigate = useNavigate();
  const {
    handleGetUsers,
    currentUser,
    getAllArticles,
    articleList,
    handleSetSingleArticle,
    handleSearchTerm,
    loginUserId,
    handleUpdateArticle,
    handleDeleteArticle
  } = props;

  useEffect(() => {
    startTransition(() => {
      handleGetUsers(userId);
      getAllArticles(userId);
    });
    return () => {};
  }, []);

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

      {isPending ? (
        <p>Loading...</p>
      ) : (
        <AllArticles
        handleUpdateArticle={handleUpdateArticle}
        handleDeleteArticle ={handleDeleteArticle}
          articleList={articleList}
          handleSetSingleArticle={handleSetSingleArticle}
          handleSearchTerm={handleSearchTerm}
          currentUser={currentUser}
          loginUserId={loginUserId}
        />
      )}
    </motion.div>
  );
}

export default User;
