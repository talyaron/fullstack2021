const express = require('express')
const app = express();

const port = process.env.PORT || 3000;


app.get('/get-user',(req,res)=>{
    res.send('this is the rasheed');
})

app.listen(port, () => {console,log('server listen on port',port)});

// route
app.get('/', function (req, res) {
    res.send('Hello World')
  })