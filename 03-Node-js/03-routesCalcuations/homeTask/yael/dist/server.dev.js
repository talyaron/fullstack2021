"use strict";

//*******************SERVER*********************************************//
var express = require("express"); //used for the routing


var app = express(); //evoke express

var port = process.env.PORT || 3000; //creating a port for the listening

var data = [{
  name: "Whitney Houston",
  year: "80s",
  category: "music",
  photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Whitney_Houston_%28cropped3%29.JPEG/169px-Whitney_Houston_%28cropped3%29.JPEG"
}, {
  name: "Subaru",
  year: "80s",
  category: "cars",
  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbO7-4Dk9_KSGsT4CUzD-MtesS9sTTdxg37w&usqp=CAU"
}, {
  name: "Britney Spears",
  year: "90s",
  category: "music",
  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0-BNExBq_LWIYk8b-KtHIvDA1_9VMNVJGA&usqp=CAU"
}, {
  name: "Ford",
  year: "90s",
  category: "cars",
  photo: "https://pict1.reezocar.com/images/320/marktplaza.nl/RZCMKPLZ90886792/FORD-FOCUS-00.jpg"
}, {
  name: "Porsche",
  year: "2000s",
  category: "cars",
  photo: "https://images.unsplash.com/photo-1592853625601-bb9d23da12fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8MjAyMCUyMGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
}, {
  name: "Jenifer Lopez",
  year: "2000s",
  category: "music",
  photo: "https://wwd.com/wp-content/uploads/2020/08/jennifer-lopez-beauty-line.jpg"
}];
app.use(express["static"]('public')); //middleware

app.get('/getusers', function (req, res) {
  //route
  console.log(req.query);
  var year = req.query.year;
  var category = req.query.category;

  if (year) {
    console.log(year); //send back only users with this gender

    var filteredYears = data.filter(function (user) {
      return user.year === year;
    });
    res.send(filteredYears);
  } else if (category) {
    console.log(category); //send back only users with this gender

    var filteredcategory = data.filter(function (user) {
      return user.category === category;
    });
    res.send(filteredcategory);
  } else {
    res.send(data);
  }
});
app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});