const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = process.env.PORT || 3000;
app.use(express.static('public'))

app.get('/getMe', function (req, res) {
  res.send([{name: 'Etan', age: 23}])
})
app.get('/getFriend', function (req, res) {
  res.send({name: 'Bar', age: 21})
})

app.listen(port, ()=> {console.log('server listen on port',port)})