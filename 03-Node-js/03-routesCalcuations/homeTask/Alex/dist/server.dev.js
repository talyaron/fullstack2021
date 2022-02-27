"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 3000;
var data = [{
  url: "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80",
  id: 1,
  topic: "Nature"
}, {
  url: "https://picsum.photos/200/300",
  id: 2,
  topic: "Nature"
}, {
  url: "https://picsum.photos/200/300",
  id: 3,
  topic: "Objects"
}];
app.use(express["static"]("public"));
app.get("/get-users", function (req, res) {
  console.log(req.query);
  var pictures = req.query.data;
  setTimeout(function () {
    if (pictures) {
      console.log(pictures);
      var filterdData = data.filter(function (user) {
        return user.pictures === pictures;
      });
      res.send(filterdData);
    } else {
      res.send(data);
    }
  }, 1000);
});
app.listen(port, function () {
  return console.log("express is listening at http://localhost:".concat(port));
});