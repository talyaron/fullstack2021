import { Outlet } from "react-router-dom";
import App from "../../../App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Navbar />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
};

export default Navbar;
