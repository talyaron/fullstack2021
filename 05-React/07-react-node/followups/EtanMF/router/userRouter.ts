import express from "express";
const router = express.Router();

import { login} from "../controller/userCont";

router
  .post("/login", login)
export default router;
