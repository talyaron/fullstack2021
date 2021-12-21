const movies = [
    {name: 'spiderman', director: 'Sam Raimi', rank: 9, year: 2012},
    {name: 'matrix', director: 'Wachowskis', rank: 8.3, year: 1999},
    {name: 'ankanto', director: 'Paul Anka', rank: 9.2, year: 2021},
    {name: 'perfect strangers', director: 'Paolo Genovese', rank: 7.5, year: 2018},
    {name: 'adams family', director: 'Barry Sonnenfeld', rank: 9.4, year: 2010},
    {name: 'the dark knight', director: 'Christopher Nolan', rank: 8.7, year: 2010},
]

movies.sort((a,b) => {
    return b.rank - a.rank;
});

for(let i in movies){
    console.log(`${movies[i].name} - ${movies[i].rank}`);
};

