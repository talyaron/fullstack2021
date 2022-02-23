const express = require('express')
const app = express()
const port = process.env.port || 3000

app.use(express.static('public/dist'))

app.get('/getMe', (req,res) => {
    res.send([{name:"Omri" , age:"33"}])
})

// app.get('/getMyFriend', (req,res) => {
//     res.send([{name:"Rotem" , age:"34"}])
// })

app.listen(port, () => {console.log('server listen on port',port)})