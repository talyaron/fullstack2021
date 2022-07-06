import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import RoomChat from "./Pages/RoomChat";
import Rooms from "./Pages/Rooms";

const Router = () => {
  const [userName, setUserName] = useState<any>("");

  //   console.log(userName);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App setUserName={setUserName} userName={userName} />}
        />
        <Route path="rooms" element={<Rooms userName={userName} />} />
        <Route path=":roomId" element={<RoomChat userName={userName} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
