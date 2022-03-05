const express = require('express')
const app = express()
const port = process.env.port || 3000;

app.use(express.static('public'))

app.get('/me', function (req, res) {
    res.send({name:'tamir',age:'24'})
})
app.get('/friend', function (req, res) {
    res.send({name:'yanir',age:'25'})
})

app.listen(port, () => {console.log('server listen on port', port)})