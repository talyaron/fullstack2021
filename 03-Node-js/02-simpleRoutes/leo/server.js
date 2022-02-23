const express = require('express')
const app = express()
const port=process.env.PORT||3002
app.use(express.static('public'))
app.get('/getMe', function (req, res) {
    res.send('Hello me')
  })
  app.get('/getMyFriend', function (req, res) {
    res.send('Hello friend')
  })
app.listen(port,()=>{
    console.log(`server listen on port`,port)
});
