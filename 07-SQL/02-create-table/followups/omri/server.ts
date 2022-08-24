import express from "express";
const app = express();
const port = process.env.PORT || 4000;
import mysql from "mysql";

app.use(express.static("public")); //middlware
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "password",
  database: "testDB1"
});

connection.connect((err) => {
  try {
    if (err) throw err;

    console.info("🔥 MySQL is connected 🛢 ");
  } catch (error) {
    console.error(error);
  }
});

import route from './routes/route';
app.use('/testDB1', route)

app.post("/api/create-databse", (req, res) => {
  console.log('/api/create-databse')
  const query = `CREATE DATABASE TestDB1;`;
  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;

      console.log(results);
      console.log(fields);
      res.send({ ok: true })
    } catch (error) {
      console.error(error);
      res.send({ ok: false, error: error.message });
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
      res.send({ ok: true })
    } catch (error) {
      console.error(error);
      res.send({ ok: false, error: error.message });
    }
  });
});

app.post('/api/add-car', (req, res) => {
  const { licensePlate, manufacturer, type, year } = req.body;

  if (!licensePlate || !manufacturer || !type || !year) throw new Error('car data is missing');
  const query = `INSERT INTO cars (licensePlate, manufacturer,type, year) VALUES ("${licensePlate}", "${manufacturer}", "${type}", "${year}");`;
  connection.query(query, (err, results, fields) => {
    try {
      if (err) throw err;
      res.send({ ok: true, message: 'car data added' })
    } catch (error) {
      console.error(error);
      res.send({ ok: false, error: error.message });
    }
  })

})

app.listen(port, () => {
  return console.log(`Server is listening at port:${port} 🔥`);
});
