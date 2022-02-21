const express = require('express')
const app = express();
const port = process.env.PORT||3000;

app.use(express.static('public'))

app.get('/getMe', function (req, res) {
  res.send({name:"wil",age:23})
})

app.get('/getFriends', function (req, res) {
  res.send({name:"Artur",age:25})
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});