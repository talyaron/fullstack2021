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
  const [userList, setUserList] = useState<Array<User>>([
    {
      firstName: "e",
      lastName: "h",
      email: "e@h.n",
      position: "L",
      _id: "1",
      workSpace: "NVLLC",
    },
    {
      firstName: "e",
      lastName: "h",
      email: "e@h.n",
      position: "L",
      _id: "2",
      workSpace: "NVLLC",
    },
    {
      firstName: "e",
      lastName: "h",
      email: "e@h.n",
      position: "L",
      _id: "3",
      workSpace: "NVLLC",
    },
    {
      firstName: "e",
      lastName: "h",
      email: "e@h.n",
      position: "L",
      _id: "4",
      workSpace: "NVLLC",
    },
    {
      firstName: "e",
      lastName: "h",
      email: "e@h.n",
      position: "L",
      _id: "5",
      workSpace: "NVLLC",
    },
    {
      firstName: "e",
      lastName: "h",
      email: "e@h.n",
      position: "L",
      _id: "6",
      workSpace: "NVLLC",
    },
    {
      firstName: "e",
      lastName: "h",
      email: "e@h.n",
      position: "L",
      _id: "7",
      workSpace: "NVLLC",
    },
    {
      firstName: "e",
      lastName: "h",
      email: "e@h.n",
      position: "L",
      _id: "8",
      workSpace: "NVLLC",
    },
    {
      firstName: "e",
      lastName: "h",
      email: "e@h.n",
      position: "L",
      _id: "9",
      workSpace: "NVLLC",
    },
    {
      firstName: "e",
      lastName: "h",
      email: "e@h.n",
      position: "L",
      _id: "10",
      workSpace: "NVLLC",
    },
    {
      firstName: "e",
      lastName: "h",
      email: "e@h.n",
      position: "L",
      _id: "11",
      workSpace: "NVLLC",
    },
    {
      firstName: "e",
      lastName: "h",
      email: "e@h.n",
      position: "L",
      _id: "12",
      workSpace: "NVLLC",
    },
    {
      firstName: "e",
      lastName: "h",
      email: "e@h.n",
      position: "L",
      _id: "13",
      workSpace: "NVLLC",
    },
  ]);
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
            <HomePage userList={userList} handleOpenUser={handleOpenUser} />
          }
        />
        <Route path="User">
          <Route path=":userId" element={<User />}>
          </Route>
        </Route>
        <Route path="allArticles" element={<AllArticles />}>
          <Route path=":articleId" element={<Article />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
