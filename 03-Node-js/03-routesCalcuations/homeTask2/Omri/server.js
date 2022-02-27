const express = require('express')
const app = express()
cosnt port = process.env.PORT || 3007

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => {console.log('server listen to port',port)})