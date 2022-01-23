"use strict";

var TheGodFather = {
  name: "The Godfather",
  year: 1972,
  rating: 9.1
};
var Interstellar = {
  name: "Interstellar",
  year: 2014,
  rating: 8.5
};
var LOTR1 = {
  name: 'Lord Of The Rings 1',
  year: 2001,
  rating: 8.8
};
var LOTR2 = {
  name: "Lord Of The Rings 2",
  year: 2002,
  rating: 8.7
};
var LOTR3 = {
  name: 'Lord Of The Rings 3',
  year: 2003,
  rating: 8.9
};
var Thematrix = {
  name: "The matrix",
  year: 1999,
  rating: 8.6
};
var Movies = [Thematrix, LOTR3, LOTR2, LOTR1, Interstellar, TheGodFather]; //1

Movies.sort(function (a, b) {
  return b.rating - a.rating;
});

for (Movie in Movies) {
  console.log("".concat(Movies[Movie].name, " - ").concat(Movies[Movie].rating));
}

2; //

Movies.sort(function (a, b) {
  return a.year - b.year;
});

for (i in Movies) {
  console.log("".concat(Movies[i].name, " - ").concat(Movies[i].year));
}

3; //

var NewMovieR = window.prompt("Movie Name");
var NewR = window.prompt('Type new rating');
NewR = parseFloat(NewR);
var Chrat = changerating(NewMovieR, NewR);

function changerating(name, NewR) {
  var objIndex = Movies.findIndex(function (obj) {
    return obj.name == name;
  });
  Movies[objIndex].rating = NewR;
  return objIndex;
}

console.log("".concat(Movies[Chrat].name, " - ").concat(Movies[Chrat].rating));