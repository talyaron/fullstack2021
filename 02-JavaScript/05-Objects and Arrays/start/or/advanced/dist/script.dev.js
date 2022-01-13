"use strict";

// function multi(a,b){
//     return a*b
// }
// const multi1 = function (a,b){
//     return a*b
// }
// const multi2 = (a,b) => a*b
// console.log(multi2(5,7))
// const singers = ['Eyal Golan', 'Omer Adam', 'Eden Chason', 'Maroon 5']
// for (let i = 0; i < singers.length; i++) {
//     console.log(singers[i])
// }
// for (let i in singers) {
//     console.log(singers[i])
// }
// for (let singer of singers) {
//     console.log(singer)
// }
// singers.forEach(singer => {
//     console.log(singer)
// })
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
var topTeams = footballTeams.findIndex(function (team) {
  return team.place == 7;
});
console.log(topTeams);