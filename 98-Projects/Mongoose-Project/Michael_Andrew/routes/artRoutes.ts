import express from "express";
const router = express.Router();
import {
  addArtToUser,
  getMyArt,
  putArtOnSale,
  cancelSale,
} from "../conroler/artCont";

router
  .post("/add-art", addArtToUser)
  .get("/get-user-art", getMyArt)
  .patch("/putArtOnSale", putArtOnSale)
  .patch("/cancelSale", cancelSale)

export default router;