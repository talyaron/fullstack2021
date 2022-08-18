"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 4000;
const mysql_1 = __importDefault(require("mysql"));
app.use(express_1.default.static('public')); //middlware
const connection = mysql_1.default.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345678"
});
connection.connect(err => {
    try {
        if (err)
            throw err;
        console.info('🔥 MySQL is connected 🛢 ');
    }
    catch (error) {
    }
});
app.listen(port, () => {
    return console.log(`Server is listening at port:${port} 🔥`);
});
