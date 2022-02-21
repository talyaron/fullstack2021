const express = require('express')
const app = express()
const port = process.env.PORT || 4000
app.use(express.static('public'))
app.get('/store',(req, res) => {
  res.render('Bookie', {status: 'good'})
})
app.get('/get-user',(req, res) => {
    res.send('This is the name of the user')
})
app.listen(port,()=>{console.log(`server listen on port`, port)})