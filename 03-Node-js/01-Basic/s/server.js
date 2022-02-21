const express = require('express')
const app = express()

const port= process.env.PORT || 3000

app.get('/', function (req, res) {
  res.send('Hello World Shani')
})

app.get('/get-user',function(req,res){
     res.send('hello this is the get-user route')
 });
//to get into it you do localhost:3000/get-user 

app.listen(port,()=>{
    console.log('server listen on port', port);
});
//app.listen listens to the port

