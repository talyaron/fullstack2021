import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HomePage from "./views/Pages/HomePage";
import Login from "./views/Pages/Login";
import User from "./views/Pages/User";
import Article from "./views/Pages/Article";
import axios from "axios";

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  workSpace: string;
  _id: string;
}

export interface ArticleInfoParams {
  firstName: string;
  lastName: string;
  position: string;
  workSpace: string;
  _id: string;
  ownerId: string;
  title: string;
  content: string;
}

function AnimatedRoutes() {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [userList, setUserList] = useState<Array<UserInfo>>([]);
  const [currentUser, setCurrentUser] = useState<UserInfo>();
  const [articleList, setArticleList] = useState<Array<ArticleInfoParams>>([]);
  const [article, setArticle] = useState<ArticleInfoParams>()

  async function handleCreate(e: any) {
    try {
      e.preventDefault();

      let { firstName, password, lastName, email, position, workSpace } =
        e.target.elements;
      firstName = firstName.value;
      lastName = lastName.value;
      password = password.value;
      email = email.value;
      position = position.value;
      workSpace = workSpace.value;

      if (
        !firstName ||
        !lastName ||
        !password ||
        !email ||
        !position ||
        !workSpace
      )
        throw new Error(
          "One of the arguments are not provided in handleCreate in AnimatedRoutes"
        );

      const newUser = {
        firstName,
        lastName,
        password,
        email,
        position,
        workSpace,
      };

      const { data } = await axios.post("/api/users/add-user", newUser);
      const { ok } = data;
      if (!ok) throw new Error("ok is not true");
      navigate("/Home");
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  }
  async function handleLogin(e: any) {
    try {
      e.preventDefault();
      let { email, password }: any = e.target.elements;
      email = email.value;
      password = password.value;
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      const { ok } = data;
      if (!ok) throw new Error("ok is not true");
      navigate("/Home");
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleGetUsers(id?: string) {
    try {
      const { data } = await axios.post("/api/users/get-users", { id });
      // console.log(data.userList);
      if (data.userList) {
        setUserList(data.userList)
        return
      }
      if (data.thisUser) {
        setCurrentUser(data.thisUser)
        return
      }

    } catch (error) {
      console.log({ error });

    }
  }
  function handleOpenUser(id: string) {
    try {
      navigate(`/User/${id}`);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCreateNewArticle(e: any) {

    try {

      e.preventDefault();

      const title = e.target.newArticleTitle.value;
      const content = e.target.newArticleContent.value;

      const { data } = await axios.post("/api/articles/create", { title, content });
      console.log(data);

      if (!data.error) {
        e.target.reset();

      }




    } catch (error) {

      console.error(error);


    }
  }

  async function getAllArticles(ownerId?: string) {

    try {

      const { data } = await axios.post("/api/articles/get-articles", { ownerId })
      setArticleList(data.result)
      console.log(data.result);
      


    } catch (error) {

      console.error(error);

    }
  }

  function handleSetSingleArticle(article: ArticleInfoParams) {

    setArticle(article);
    navigate(`/Article/${article._id}`)

  }


  return (
    <AnimatePresence>
      <Routes>
        <Route
          path="/"
          element={
            <Login handleLogin={handleLogin} handleCreate={handleCreate} />
          }
        />
        <Route
          path="Home"
          element={
            <HomePage
              mounted={mounted}
              setMounted={setMounted}
              userList={userList}
              handleGetUsers={handleGetUsers}
              handleOpenUser={handleOpenUser}
              handleCreateNewArticle={handleCreateNewArticle}
              getAllArticles={getAllArticles}
              articleList={articleList}
              handleSetSingleArticle={handleSetSingleArticle}
            />
          }
        />
        <Route path="User">
          <Route path=":userId" element={<User handleGetUsers={handleGetUsers} currentUser={currentUser}
            getAllArticles={getAllArticles} articleList={articleList} handleSetSingleArticle={handleSetSingleArticle}
          />}></Route>
        </Route>
        <Route path="Article">
          <Route path=":articleId" element={<Article article={article} />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
