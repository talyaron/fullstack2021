

const express = require('express')
const app = express()
const port=process.env.PORT || 3058


const data=[{imgUrl:"",topic:"beach",year:0},{imgUrl:"",topic:"mountains",year:1},{imgUrl:"",topic:"desert",year:2},
{imgUrl:"",topic:"city",year:0},{imgUrl:"",topic:"beach",year:0},{imgUrl:"",topic:"field",year:0},];

app.use(express.static('public'))

app.get('/getPics', function (req, res) {
  res.send(data)
})

app.listen(port,()=>{
    return console.log(`Express is listening to localhost:${port}`)
})