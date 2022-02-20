const express = require('express')
const app = express()
const port = process.env.PORT || 8080


app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/get-user',(req, res) => {
    req.header('user-agent')
    res.send(`This is the name of the browser: ${req.query.username}`)
})
app.post('/login', (req,res)=>{
    req.header('user-agent')
})
app.listen(port,()=>{console.log(`server listen on port`, port)})

