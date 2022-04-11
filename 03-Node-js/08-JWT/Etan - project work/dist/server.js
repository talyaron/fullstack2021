"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require('dotenv').config();
const uri = process.env.MONGODB_URI;
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(cookie_parser_1.default());
mongoose_1.default
    .connect(uri)
    .then(() => {
    console.log("connected to Mongoose");
})
    .catch((err) => {
    console.log("Failed to connect to Mongoose:");
    console.log(err.message);
});
// app.post('/show-user'), async (req, res) => {
// }
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
app.use("/users", userRoutes_1.default);
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
app.use("/tasks", taskRoutes_1.default);
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
