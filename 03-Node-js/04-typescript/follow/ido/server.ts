import express from 'express';
const app = express();
const port = 3003;

app.get('/', (req, res) => {
  res.send(console.log('hello'))
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});