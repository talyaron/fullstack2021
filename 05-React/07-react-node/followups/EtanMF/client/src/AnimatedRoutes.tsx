import { Routes, Route, useNavigate } from "react-router-dom";
import AllArticles from "./views/Pages/AllArticles";
import { AnimatePresence } from "framer-motion";
import HomePage from "./views/Pages/HomePage";
import Login from "./views/Pages/Login";
import User from "./views/Pages/User";
import Article from "./views/Pages/Article";
import axios from "axios";

function AnimatedRoutes() {
  const navigate = useNavigate();
  async function handleLogin(e: any) {
    try {
      e.preventDefault();
      let {email, password}:any = e.target.elements;
      email = email.value;
      password = password.value;
      const {data} = await axios.post('/api/users/login', {email, password});
      const {ok} = data;
      if(!ok) throw new Error("ok is not true")
      navigate('/Home')
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
      const {ok} = data;
      if(!ok) throw new Error("ok is not true")
      navigate('/Home')
      e.target.reset();
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
        <Route path="Home" element={<HomePage />}>
          <Route path=":userId" element={<User />}>
            <Route path=":articleId" element={<Article />} />
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
