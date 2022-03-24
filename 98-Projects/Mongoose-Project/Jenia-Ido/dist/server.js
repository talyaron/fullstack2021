"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import mongoose from "mongoose";
const app = express_1.default();
const port = process.env.PORT || 3003;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.patch('/get-addNewUser', (req, res) => {
    const newUser = req.body;
    console.log(newUser);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
