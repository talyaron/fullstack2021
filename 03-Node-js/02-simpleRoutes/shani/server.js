var express = require('express');
var app = express();
var port = process.env.PORT || 3058;

app.use(express.static('public')) //connects the public folder 


app.get('/getMe', function (req, res) {
    res.send('Hello World it is meeeee');
});
app.get('/getMyFriend', function (req, res) {
    res.send('Hello World I am the one and only friend');
});


app.listen(port,()=>{
    return console.log(`Express is listening at http://localhost:${port}`);
});
