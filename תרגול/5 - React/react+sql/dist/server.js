"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const mysql_1 = __importDefault(require("mysql"));
const port = 9875;
app.use(express_1.default.static("client/build"));
app.use(express_1.default.json());
const connection = mysql_1.default.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123123",
    database: "reactwithsql"
});
connection.connect((err) => {
    try {
        if (err)
            throw err;
        console.info("🔥 MySQL is connected ");
    }
    catch (error) {
        console.error(error);
    }
});
app.get("/api/show-all-users", (req, res) => {
    const query = `SELECT * FROM users;`;
    connection.query(query, (err, results, fields) => {
        try {
            if (err)
                throw err;
            res.send({ ok: true, results });
        }
        catch (error) {
            console.error(error);
            res.send({ ok: false, error: error.message });
        }
    });
});
app.post("/api/add-new-user", (req, res) => {
    // console.log('/api/add-new-user')
    console.log(req.body);
    const { name, age } = req.body;
    const query = `INSERT INTO users (name, age) VALUES ("${name}", ${age});`;
    connection.query(query, (err, results, fields) => {
        try {
            if (err)
                throw err;
            console.log(results);
            res.send({ ok: true, results });
        }
        catch (error) {
            console.error(error);
            res.send({ ok: false, error: error.message });
        }
    });
});
app.listen(port, () => {
    return console.log(`Server is listening at http://localhost:${port}`);
});
