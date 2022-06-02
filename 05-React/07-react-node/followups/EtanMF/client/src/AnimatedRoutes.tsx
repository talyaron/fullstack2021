import { Routes, Route } from "react-router-dom";
import AllArticles from "./views/Pages/AllArticles";
import { AnimatePresence } from "framer-motion";
import HomePage from "./views/Pages/HomePage";
import Login from "./views/Pages/Login";
import User from "./views/Pages/User";
import Article from "./views/Pages/Article";

// Function notes:
// Make a function that sends a request to the server to get the articles depending on the id that was sent.
// to get all articles, send an empty Id so the Article.find() returns all articles.
// to get specific user article, send a user Id so the Article.find(ownerId:userId) returns only specific user articles.

function AnimatedRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<HomePage />} />
        <Route path=":userId" element={<User />}>
          <Route path=":articleId" element={<Article />} />
        </Route>
        <Route path="allArticles" element={<AllArticles />}>
          <Route path=":articleId" element={<Article />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
