// console.log("hi");

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public')) //middlware

//route
app.get('/', function (req, res) {
  res.send('check')
});

app.get('/getUser',(req, res) => {
    res.send({name: "andrew", id: 56345});
});

app.listen(port, ()=> console.log('server listen on port', port))