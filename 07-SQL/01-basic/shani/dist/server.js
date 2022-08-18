"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 4000;
const mysql_1 = __importDefault(require("mysql"));
///--- wont let you delete or update cause of the safety to turn it back on do 1 instead of 0
// SHOW VARIABLES LIKE "sql_safe_updates";
// SET SQL_SAFE_UPDATES = 0;
app.use(express_1.default.static("public")); //middlware
const connection = mysql_1.default.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
});
connection.connect((err) => {
    try {
        if (err)
            throw err;
        console.info("🔥 MySQL is connected 🛢 ");
    }
    catch (error) {
        console.error(error);
    }
});
app.post("/api/create-database", (req, res) => {
    //in the query the name given in CREATE DATABASE XXX is the name of th db you make. refresh sql to see it
    const query = `CREATE DATABASE testDB3;`;
    connection.query(query, (err, results, fields) => {
        try {
            if (err)
                throw err;
            //console.log(results);
            // console.log(fields);
            //result is what we get and send as res.send
            res.send({ ok: true });
        }
        catch (error) {
            console.error(error);
            res.send({ ok: false, error: error.message });
        }
    });
});
// app.delete("/api/delete-databse", (req, res) => {
//   console.log('/api/delete-databse')
//   const query = `DROP DATABASE testDB1;`;
//   connection.query(query, (err, results, fields) => {
//     try {
//       if (err) throw err;
//       console.log(results);
//       console.log(fields);
//       res.send({ok:true})
//     } catch (error) {
//       console.error(error);
//       res.send({ok:false, error:error.message});
//     }
//   });
// });
app.listen(port, () => {
    return console.log(`Server is listening at port:${port} 🔥`);
});
