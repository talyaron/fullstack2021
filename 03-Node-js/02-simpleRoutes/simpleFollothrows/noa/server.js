const express = require('express')
const app = express()
const port=process.env.PORT ||3000

app.use(express.static('public'))

app.get('/getMe', function (req, res) {
  res.send({name:'noa',age:21})
})

app.get('/getMyFriends', function (req, res) {
    res.send([{name:'zofia',age:20},{name:'orit',age:25}])
  })

app.listen(port,()=>{
    console.log(`Express is listening at http://localhost:${port}`)
})