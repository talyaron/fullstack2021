import express from "express";
const router = express.Router();
import {getItems} from "../controllers/itemController";

router
.get("/getItems", getItems);

export default router;