import express from "express";
const router = express.Router();

import { login, create, getUsers } from "../controller/userCont";

router
  .post("/login", login)
  .post('/add-user', create)
  .post('/get-users', getUsers)

  
export default router;
