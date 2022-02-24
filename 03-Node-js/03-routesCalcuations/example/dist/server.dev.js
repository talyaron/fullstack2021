"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 3000;
var data = [{
  name: "Moshe",
  id: 1,
  gender: "male"
}, {
  name: "Ahron",
  id: 2,
  gender: "male"
}, {
  name: "Miriam",
  id: 3,
  gender: "female"
}];
app.use(express["static"]("public")); //middlware

app.get("/get-users", function (req, res) {
  //route
  console.log(req.query);
  var gender = req.query.gender;
  setTimeout(function () {
    if (gender) {
      console.log(gender); //send back only users with this gender

      var filterdUsers = data.filter(function (user) {
        return user.gender === gender;
      });
      res.send(filterdUsers);
    } else {
      res.send(data);
    }
  }, 1000);
});
app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});