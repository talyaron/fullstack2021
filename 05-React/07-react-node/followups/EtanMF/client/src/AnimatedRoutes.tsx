import { Routes, Route } from "react-router-dom";
import AllArticles from "./views/Pages/AllArticles";
import { AnimatePresence } from "framer-motion";
import HomePage from "./views/Pages/HomePage";
import Login from "./views/Pages/Login";
import User from "./views/Pages/User";
import Article from "./views/Pages/Article";





function AnimatedRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<HomePage />}>
          <Route path=":userId" element={<User/>} >
              <Route path=":articleId" element={<Article/>}/>
          </Route>
        </Route>
        <Route path="allArticles" element={<AllArticles />}>
              <Route path=":articleId" element={<Article/>}/>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
