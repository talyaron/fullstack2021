const express = require('express')
const app = express()
const port=process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/get-user', function (req, res) {
    res.send('Hello jhghjvhjd')
  })

app.listen(port,()=>{
    console.log(`server listen on port`,port);
})

