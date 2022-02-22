"use strict";

var express = require('express');

var app = express();
var port = process.env.port || 3000;
app.use(express["static"]('public/dist'));
app.get('/getMe', function (req, res) {
  res.send([{
    name: "Omri",
    age: "33"
  }]);
}); // app.get('/getMyFriend', (req,res) => {
//     res.send([{name:"Rotem" , age:"34"}])
// })

app.listen(port, function () {
  console.log('server listen on port', port);
});