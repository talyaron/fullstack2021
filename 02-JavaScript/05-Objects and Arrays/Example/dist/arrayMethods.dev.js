"use strict";

// method = function
var footballTeams = [{
  teamName: 'Macabi Tel-Aviv',
  place: 16
}, {
  teamName: 'Beitar Jeruslam',
  place: 7
}, {
  teamName: 'Hapoel Haifa',
  place: 5
}, {
  teamName: 'Bnei-Sachnin',
  place: 6
}]; //filter

var topTeams = footballTeams.filter(function (team) {
  return team.place <= 6;
});
topTeams.forEach(function (team) {
  console.log(team.teamName);
}); // more methods
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//exercise: find the location in the array of the team that is located in the 7th place (place 1)