import express from 'express';
const app = express();
const port = process.env.PORT || 4000;
import mysql from 'mysql';

app.use(express.static('public')) //middlware

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "12345678"
})

connection.connect(err=>{
  try {
    if(err) throw err;

    console.info('🔥 MySQL is connected 🛢 ');

  } catch (error) {
    
  }
})

app.listen(port, () => {
  return console.log(`Server is listening at port:${port} 🔥`);
});