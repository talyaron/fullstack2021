"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userCont_1 = require("../controlers/userCont");
router
    .get('/get-user', userCont_1.getUser)
    .post('/add-user', userCont_1.addUser)
    .delete('/delete-user', userCont_1.deleteUser);
exports.default = router;
