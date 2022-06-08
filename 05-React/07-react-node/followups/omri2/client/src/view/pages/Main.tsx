import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {

  return (
    <div className="App__header">
      <h1>TechBlogs</h1>
      <Outlet />
    </div>
  )
}

export default Main