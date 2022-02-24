"use strict";

var data = [{
  url: 'http://static.footeo.com/uploads/cspp/Medias/ballon_dor.jpg',
  name: 'Luís Figo',
  year: '2000',
  nationality: ' Portugal'
}, {
  url: 'https://i.pinimg.com/originals/8a/36/a2/8a36a2462eee20469867e75d9009b29d.jpg',
  name: 'Michael Owen',
  year: '2001',
  nationality: ' England'
}, {
  url: 'https://pbs.twimg.com/media/ELlCAvFXkAAffuH.jpg',
  name: 'Ronaldo',
  year: '2002',
  nationality: ' Brazil'
}, {
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNm-yTMmJzi5V_kqjHuR-dZCvwws_A9yMC3g&usqp=CAU',
  name: 'Pavel Nedvěd',
  year: '2003',
  nationality: ' Czech Republic'
}, {
  url: 'https://pbs.twimg.com/media/ELqqfGTWkAEdiod?format=jpg&name=large',
  name: 'Andriy Shevchenko',
  year: '2004',
  nationality: 'Ukraine'
}, {
  url: 'https://www.challenges.fr/assets/afp/2018/01/17/98222dd4a009e514508e0d99f5c3d63e35cbc116.jpg',
  name: 'Ronaldinho ',
  year: '2005',
  nationality: 'Brazil'
}, {
  url: 'https://preview.redd.it/yzf334toimlz.jpg?width=640&crop=smart&auto=webp&s=c7d75519991a2bdbcc179a5dd4bae3f587135365',
  name: 'Fabio Cannavaro',
  year: '2006',
  nationality: 'Italy'
}, {
  url: 'https://pbs.twimg.com/media/EoOWLAOXUAEl91o.jpg',
  name: 'Kaká',
  year: '2007',
  nationality: ' Portugal'
}, {
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4N57p89RzyGJNa3-OdmbERk2LUAKw2c1jwy3zrg_9H953l4msy76qgZDpugh43AS3lM&usqp=CAU',
  name: 'Cristiano Ronaldo',
  year: '2008',
  nationality: 'Portugal'
}, {
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPe_ImZ4BxLbvdUaOFTfjvGZM9tuSRMCSHe4qPBggjn34B-xyE9J99w-cnZ6cRGcPln6E&usqp=CAU',
  name: 'Lionel Messi',
  year: '2009',
  nationality: 'Argentina'
}];

var express = require('express');

var app = express();
var port = 3000;
app.use(express["static"]('public'));
app.get('/get-player', function (req, res) {
  var year = req.query.year;

  if (year) {
    var filteredPlayers = data.filter(function (player) {
      return player.year === year;
    });
    res.send(filteredPlayers);
  }
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});