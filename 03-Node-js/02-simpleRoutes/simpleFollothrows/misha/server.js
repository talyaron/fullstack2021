const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/getUsers', (req, res) => {
    res.send({name:"Misha", id:12345})
})

app.listen(port, () => {
    console.log('server listen on port', port);
})