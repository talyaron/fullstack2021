const RMplayers = [{url : '' , name : ''},{url : '' , name : ''},{url : '' , name : ''},
{url : '' , name : ''},{url : '' , name : ''},{url : '' , name : ''},{url : '' , name : ''},
{url : '' , name : ''},{url : '' , name : ''},{url : '' , name : ''},{url : '' , name : ''},
{url : '' , name : ''},{url : '' , name : ''},{url : '' , name : ''},{url : '' , name : ''},
{url : '' , name : ''},{url : '' , name : ''},{url : '' , name : ''},{url : '' , name : ''},]

const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'))

app.get('/details',(req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



