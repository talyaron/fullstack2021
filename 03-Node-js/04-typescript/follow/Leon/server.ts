import express from 'express';
const app = express();
const port = 3000;
const students=[{name:`leo`,id:1}]
app.get('/get-all-data', (req, res) => {
  const students
    res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
