const express = require('express')
const app = express()
const port = process.env.PORT ||3000;
 
app.use(express.static('public'))//middleware
app.get('/getMe' , (req , res )=>{
    res.send({name:'yoel' , id:1230});
})
app.get('/getMyFriend' , (req , res) =>{
    res.send({name:'mordi' , id:7940})
}) 
app.listen(port, () =>{
    console.log(`your port is ${port}`);
})
