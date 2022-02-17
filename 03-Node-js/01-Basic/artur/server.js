const express = require('express')
const app = express()
const port = process.env.port

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/get-user',(req, res)=>{}

app.listen(port,()=>{console.log('serverr listen on port' .port)})