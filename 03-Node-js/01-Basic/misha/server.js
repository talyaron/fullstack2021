const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})



app.listen(port, () => {console.log('server listen on port', port)})

function sayHello(Hello){
    for(let i = 0; i<10; i++){
    console.log('hello '+ Hello)
    }
}

sayHello("Misha") 