const singers=["ELO","Elton John","Queen"]

for ( let i=0; i<singers.length;i++){
    console.log(singers[i])
}

//in loop 

for (let i in singers){
    console.log(singers[i])

}

//of loop

for(let myFav of singers){
    console.log(myFav)
}

//for each







//arraymethods

const footballTeams = [
    { teamName: 'Macabi Tel-Aviv', place: 16 },
    { teamName: 'Beitar Jeruslam', place: 7 },
    { teamName: 'Hapoel Haifa', place: 5 },
    { teamName: 'Bnei-Sachnin', place: 6 }
];


const seventhPlace = footballTeams.indexOf(team => team.place ===7);{
console.log(seventhPlace)
}
