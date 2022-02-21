const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/getUser', (req,res) => {
    let x = mathPow(5)
    res.send(`${x}`);
})

app.listen(port, () => {console.log('server listen on port',port)})

function mathPow(number) {
    const powNum = number * number;
    return powNum
}