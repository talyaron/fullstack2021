"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var photos = [{
  year: "1991",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015705/family-takes-a-picture-every-year-for-22-years.png.webp'
}, {
  year: "1992",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015707/family-takes-a-picture-every-year-for-22-years-2.png.webp'
}, {
  year: "1993",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015709/family-takes-a-picture-every-year-for-22-years-3.png.webp'
}, {
  year: "1994",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015711/family-takes-a-picture-every-year-for-22-years-4.png.webp'
}, {
  year: "1995",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015713/family-takes-a-picture-every-year-for-22-years-5.png.webp'
}, {
  year: "1996",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015717/family-takes-a-picture-every-year-for-22-years-6.png.webp'
}, {
  year: "1997",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015720/family-takes-a-picture-every-year-for-22-years-7.png.webp'
}, {
  year: "1998",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015722/family-takes-a-picture-every-year-for-22-years-8.png.webp'
}, {
  year: "1999",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015724/family-takes-a-picture-every-year-for-22-years-9.png.webp'
}, {
  year: "2000",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015727/family-takes-a-picture-every-year-for-22-years-10.png.webp'
}, {
  year: "2001",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015730/family-takes-a-picture-every-year-for-22-years-11.png.webp'
}, {
  year: "2002",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015732/family-takes-a-picture-every-year-for-22-years-12.png.webp'
}, {
  year: "2003",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015734/family-takes-a-picture-every-year-for-22-years-13.png.webp'
}, {
  year: "2004",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015736/family-takes-a-picture-every-year-for-22-years-14.png.webp'
}, {
  year: "2005",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015738/family-takes-a-picture-every-year-for-22-years-15.png.webp'
}, {
  year: "2006",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015741/family-takes-a-picture-every-year-for-22-years-16.png.webp'
}, {
  year: "2007",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015744/family-takes-a-picture-every-year-for-22-years-17.png.webp'
}, {
  year: "2008",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015747/family-takes-a-picture-every-year-for-22-years-18.png.webp'
}, {
  year: "2009",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015749/family-takes-a-picture-every-year-for-22-years-19.png.webp'
}, {
  year: "2010",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015751/family-takes-a-picture-every-year-for-22-years-20.png.webp'
}, {
  year: "2011",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015753/family-takes-a-picture-every-year-for-22-years-21.png.webp'
}, {
  year: "2012",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015755/family-takes-a-picture-every-year-for-22-years-22.png.webp'
}, {
  year: "2013",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015757/family-takes-a-picture-every-year-for-22-years-23.png.webp'
}, {
  year: "2014",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015759/family-takes-a-picture-every-year-for-22-years-24.png.webp'
}, {
  year: "2015",
  url: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/11/11015801/family-takes-a-picture-every-year-for-22-years-25.png.webp'
}];
app.use(express["static"]('public')); //connects the public folder 

app.get('/get-photos', function (req, res) {
  res.send(photos);
});
app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});