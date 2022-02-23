"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3001;
var pictures = [{
  name: "leo",
  type: "art",
  year: "1872",
  url: "https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}, {
  name: "picaso",
  type: "nature",
  year: "1890",
  url: "https://images.pexels.com/photos/962312/pexels-photo-962312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}];
app.use(express["static"]("public"));
app.get('/get-pictures', function (req, res) {
  var type = req.query.pic;

  if (type === "nature" || "art") {
    var filterpic = pictures.filter(function (pic) {
      return pic.type === type;
    });
    res.send(filterpic);
  } else if (type === "all") {
    res.send(pictures);
  }
}); // app.listen(port,()=>{console.log(`server listen on port`);});

app.listen(port, function () {
  return console.log('server listening at port', port);
});