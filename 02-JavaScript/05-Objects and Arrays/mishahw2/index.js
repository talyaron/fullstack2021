const movies = [
    {name: 'spiderman', director: 'Sam Raimi', rank: 9, year: 2012},
    {name: 'matrix', director: 'Wachowskis', rank: 8.3, year: 1999},
    {name: 'ankanto', director: 'Paul Anka', rank: 9.2, year: 2021},
    {name: 'perfect strangers', director: 'Paolo Genovese', rank: 7.5, year: 2018},
    {name: 'adams family', director: 'Barry Sonnenfeld', rank: 9.4, year: 2010},
    {name: 'the dark knight', director: 'Christopher Nolan', rank: 8.7, year: 2010},
]

// BY RANK //

console.log('------ SORT BY RANK ------');
movies.sort((a,b) => {
    return b.rank - a.rank;
});

for(let i in movies){
    console.log(`${movies[i].name} - ${movies[i].rank}`);
};

// BY YEAR //

console.log('------ SORT BY YEAR ------');
movies.sort((a,b) => {
    return b.year - a.year;
});

for(let i in movies){
    console.log(`${movies[i].name} - ${movies[i].year}`);
};

let changemovie = window.prompt("which movie rank do you want to change?")
let newrank = window.prompt('What is your new rank?')

// newrank *= 1.0;
// or :
newrank = parseFloat(newrank);

const updrank = changeRanking(changemovie, newrank);

function changeRanking(title, newRanking){
 
    const objIndex = movies.findIndex((obj => obj.name == changemovie));
    movies[objIndex].rank = newRanking;
    return objIndex;
    
}
console.log(` ------- UPDATED RANK ------ `);
console.log(`${movies[updrank].name} - ${movies[updrank].rank}`);




