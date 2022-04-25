import express from "express";
const router = express.Router();
import {
  addArtToUser,
  getMyArt
} from "../conroler/artCont";

router
  .post("/add-art-to-owner", addArtToUser)
  .get("/get-user-art", getMyArt);

export default router;