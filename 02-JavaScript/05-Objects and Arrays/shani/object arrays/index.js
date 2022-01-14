const singers=["ELO","Elton John","Queen"]

for(let i=0; i<singers.length; i++){
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

singers.forEach(singer=>{
    console.log(singer)
})

//while loop

let i = 0;
while(i<singers.length){
    console.log(singers[i++]);
}

/*
win_flag = false;
for(let turn_counter = 0; !win_flag ; turn_counter++){

    jkvrbtkv

    win_flag = goal();
}
*/





const students = [{ name: 'mira', grades: [100, 78, 43] }, { name: 'yoni', grades: [90, 89, 79, 76] }, { name: 'shani', grades: [95, 99, 100, 150] }]

for(let student of students){
    let sum = 0;
    for(let grade of student.grades)
        sum += grade;

    const n = student.grades.length;
    average = sum / n
    console.log(`${student.name} has an avarge of ${average.toFixed(2)}`);

}







//arraymethods

const footballTeams = [
    { teamName: 'Macabi Tel-Aviv', place: 16 },
    { teamName: 'Beitar Jeruslam', place: 7 },
    { teamName: 'Hapoel Haifa', place: 5 },
    { teamName: 'Bnei-Sachnin', place: 6 }
];


const seventhPlace = footballTeams.findIndex(team => team.place ===7);{
console.log(seventhPlace)
}
