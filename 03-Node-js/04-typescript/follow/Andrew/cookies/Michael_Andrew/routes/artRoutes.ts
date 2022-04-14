import express from "express";
const router = express.Router();
import {
  addArtToUser,
  getMyArt,
  putArtOnSale,
  cancelSale,
  getForSale,
  buyAndSell,
} from "../conroler/artCont";
import { hasFunds } from '../middleware/hasFunds';
router
  .post("/add-art", addArtToUser)
  .get("/get-user-art", getMyArt)
  .patch("/putArtOnSale", putArtOnSale)
  .patch("/cancelSale", cancelSale)
  .get("/art-for-sale", getForSale)
  .patch('/buy-and-sell',hasFunds, buyAndSell)

export default router;