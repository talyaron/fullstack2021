import express from "express";
const router = express.Router();
import {
  addArtToUser
} from "../conroler/artCont";

router
  .post("/add-art-to-owner", addArtToUser);

export default router;