

const express = require('express')
const app = express()
const port=process.env.PORT || 3058

app.use(express.static('public'))

app.get('/getHello', function (req, res) {
  res.send('Hello World')
})

app.listen(port,()=>{
    return console.log(`Express is listening to localhost:${port}`)
})