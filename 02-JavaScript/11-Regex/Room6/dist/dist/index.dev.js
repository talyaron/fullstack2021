"use strict";

var movies = ["Reacher", "Dont Look Up", "Attack on Titan", "Nightmare Alley"];
var i;

if (movies[i] > movies.length) {
  console.log(movies[1]);
}

function handleSearch(event) {
  try {
    var search = /o/;
    var sound = event.target.value;

    if (movies[i]) {
      console.log(sound, search.test(search, movies[i]));
    }
  } catch (error) {
    console.error(error);
  }
}