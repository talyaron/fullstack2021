import express from "express";
const app = express();
import mysql from "mysql";
const port: number = 9875;

app.use(express.static("client/build"));
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123123",
  database: "reactwithsql"
});

connection.connect((err) => {
  try {
    if (err) throw err;

    console.info("🔥 MySQL is connected ");
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/show-all-users", (req, res) => {

  const query = `SELECT * FROM users;`;

  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;

      res.send({ ok: true, results })
    } catch (error) {
      console.error(error);
      res.send({ ok: false, error: error.message });
    }
  });
});

app.post("/api/add-new-user", (req, res) => {
  // console.log('/api/add-new-user')
  console.log(req.body)
  const { name, age } = req.body

  const query = `INSERT INTO users (name, age) VALUES ("${name}", ${age});`;

  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;

      console.log(results);

      res.send({ ok: true, results })

    } catch (error) {
      console.error(error);
      res.send({ ok: false, error: error.message });
    }
  });
});

app.listen(port, () => {
  return console.log(`Server is listening at http://localhost:${port}`);
});
