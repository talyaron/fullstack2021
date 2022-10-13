import express from "express";
const app = express();
const port = process.env.PORT || 4001;
import mysql from "mysql";

app.use(express.static("public")); //middlware

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "password",
});

connection.connect((err) => {
  try {
    if (err) throw err;

    console.info("🔥 MySQL is connected 🛢 ");
  } catch (error) {
    console.error(error);
  }
});

app.post("/api/create-databse", (req, res) => {
  console.log('/api/create-databse')
  const query = `CREATE DATABASE testDB1;`;
  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;

      console.log(results);
      console.log(fields);
      res.send({ok:true})
    } catch (error) {
      console.error(error);
      res.send({ok:false, error:error.message});
    }
  });
});

app.delete("/api/delete-databse", (req, res) => {
  console.log('/api/delete-databse')
  const query = `DROP DATABASE testDB1;`;
  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;

      console.log(results);
      console.log(fields);
      res.send({ok:true})
    } catch (error) {
      console.error(error);
      res.send({ok:false, error:error.message});
    }
  });
});

app.listen(port, () => {
  return console.log(`Server is listening at port:${port} 🔥`);
});
