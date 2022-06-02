import express from "express";
const router = express.Router();

import { login, create } from "../controller/userCont";

router
  .post("/login", login)
  .post('/add-user', create)

  
export default router;
