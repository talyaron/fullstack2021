import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Item from "./Item";
import Layout from "./Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path=":product" element={<Item />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
