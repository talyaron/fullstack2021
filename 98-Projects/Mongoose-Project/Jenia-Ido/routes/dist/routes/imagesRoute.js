"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const imagesCont_1 = require("../controlers/imagesCont");
router
    .get('/get-images', imagesCont_1.getImages)
    .post('/add-images', imagesCont_1.addImages);
exports.default = router;
