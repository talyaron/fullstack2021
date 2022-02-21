"use strict";

var players = [{
  url: 'http://static.footeo.com/uploads/cspp/Medias/ballon_dor.jpg',
  name: 'Luís Figo',
  year: 2000
}, {
  url: 'https://i.pinimg.com/originals/8a/36/a2/8a36a2462eee20469867e75d9009b29d.jpg',
  name: 'Michael Owen',
  year: 2001
}, {
  url: 'https://pbs.twimg.com/media/ELlCAvFXkAAffuH.jpg',
  name: 'Ronalo',
  year: 2002
}, {
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNm-yTMmJzi5V_kqjHuR-dZCvwws_A9yMC3g&usqp=CAU',
  name: 'Pavel Nedvěd',
  year: 2003
}, {
  url: 'https://pbs.twimg.com/media/ELqqfGTWkAEdiod?format=jpg&name=large',
  name: 'Andriy Shevchenko',
  year: 2004
}, {
  url: 'https://www.challenges.fr/assets/afp/2018/01/17/98222dd4a009e514508e0d99f5c3d63e35cbc116.jpg',
  name: 'Ronaldinho ',
  year: 2005
}, {
  url: 'https://preview.redd.it/yzf334toimlz.jpg?width=640&crop=smart&auto=webp&s=c7d75519991a2bdbcc179a5dd4bae3f587135365',
  name: 'Fabio Cannavaro',
  year: 2006
}, {
  url: 'https://pbs.twimg.com/media/EoOWLAOXUAEl91o.jpg',
  name: 'Kaká',
  year: 2007
}, {
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4N57p89RzyGJNa3-OdmbERk2LUAKw2c1jwy3zrg_9H953l4msy76qgZDpugh43AS3lM&usqp=CAU',
  name: 'Cristiano Ronaldo',
  year: 2008
}, {
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPe_ImZ4BxLbvdUaOFTfjvGZM9tuSRMCSHe4qPBggjn34B-xyE9J99w-cnZ6cRGcPln6E&usqp=CAU',
  name: 'Lionel Messi',
  year: 2009
}, {
  url: 'https://media.minutemediacdn.com/process?url=https%3A%2F%2F90min-images-original.s3.amazonaws.com%2Fproduction%2Fbarcelona-s-argentinian-forward-lionel-m-5de652706bb2ba3900000004.jpg&filters%5Bcrop%5D%5Bw%5D=0.9629629629629629&filters%5Bcrop%5D%5Bh%5D=1.0&filters%5Bcrop%5D%5Bo_x%5D=0.02263374485596708&filters%5Bcrop%5D%5Bo_y%5D=0.0&filters%5Bquality%5D%5Btarget%5D=80&type=.jpg&filters%5Bresize%5D%5Bw%5D=630&filters%5Bresize%5D%5Bh%5D=472',
  name: 'Lionel Messi',
  year: 2010
}];

var express = require('express');

var app = express();
var port = 4000;
app.use(express["static"]('public'));
app.get('/player', function (req, res) {
  console.log(req.query);
  res.send();
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});