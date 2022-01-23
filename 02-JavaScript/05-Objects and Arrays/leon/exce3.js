const footballTeams = [
    { teamName: 'Macabi Tel-Aviv', place: 16 },
    { teamName: 'Beitar Jeruslam', place: 7 },
    { teamName: 'Hapoel Haifa', place: 5 },
    { teamName: 'Bnei-Sachnin', place: 6 }
];

const index = footballTeams.findIndex( (element) => element.place === '7');
console.log(index)