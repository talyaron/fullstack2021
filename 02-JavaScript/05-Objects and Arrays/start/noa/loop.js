// const singers=['idan raichel','natan goshen', 'idan amedi', 'eden ben-zaken']

// for(let i=0; i<singers.length; i++){
//     console.log(singers[i]);
// }

// for(let i in singers){
//     console.log(singers[i]);
// }

// for(let singer of singers){
//     console.log(singer)
// }

// singers.forEach(singer =>{
//     console.log(singer)
// }
// )


const footballTeams = [
    { teamName: 'Macabi Tel-Aviv', place: 16 },
    { teamName: 'Beitar Jeruslam', place: 7 },
    { teamName: 'Hapoel Haifa', place: 5 },
    { teamName: 'Bnei-Sachnin', place: 6 }
];

// footballTeams.forEach(team => console.log(team.place))

let pos = footballTeams.findIndex(team => team.place === 7)
console.log(pos);