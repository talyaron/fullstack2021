const express = require('express')
const app = express()
const port = process.env.port || 3000;

app.get('/', function (req, res) {
    res.send('Hello tamir')

})

app.listen(port, () => {console.log('server listen on port', port)})