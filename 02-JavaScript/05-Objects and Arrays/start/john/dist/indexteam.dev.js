"use strict";

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
}];
var seventhTeam = footballTeams.filter(function (team) {
  return team.place == 7;
});
seventhTeam.forEach(function (team) {
  console.log(indexOf(team.teamName));
});