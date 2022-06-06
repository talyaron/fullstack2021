import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import AllArticles from "./views/Pages/AllArticles";
import { AnimatePresence } from "framer-motion";
import HomePage from "./views/Pages/HomePage";
import Login from "./views/Pages/Login";
import User from "./views/Pages/User";
import Article from "./views/Pages/Article";
import axios from "axios";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  workSpace: string;
  _id: string;
}

function AnimatedRoutes() {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  const [userList, setUserList] = useState<Array<User>>([]);
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
      setUserList(data.userList)
    } catch (error) {
      console.log({error});
      
    }
  }
  function handleOpenUser(id: string) {
    try {
      navigate(`/User/${id}`);
    } catch (error) {
      console.error(error);
    }
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
            />
          }
        />
        <Route path="User">
          <Route path=":userId" element={<User />}></Route>
        </Route>
        <Route path="allArticles" element={<AllArticles />}>
          <Route path=":articleId" element={<Article />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
