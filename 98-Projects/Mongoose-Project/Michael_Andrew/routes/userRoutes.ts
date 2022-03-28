import express from "express";
const router = express.Router();
import {
  addUser,
  findUser,
  updateUser,
 
} from "../conroler/userCont";

router
  .post("/add-user", addUser)
  .get("/log-user", findUser)
  .patch("/update-user", updateUser)


export default router;
