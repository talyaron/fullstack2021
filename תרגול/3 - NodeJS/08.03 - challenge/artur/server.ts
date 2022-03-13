import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());


app.get('/', (req, res) => {
  // res.sendFile("index.html")
  res.send("dsfsf")
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
