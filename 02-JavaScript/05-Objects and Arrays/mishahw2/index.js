const movies = [
    {name: 'spiderman',director: 'Sam Raimi', rank: 4, year: 2012},
    {name: 'matrix',director: 'Wachowskis', rank: 5, year: 1999},
    {name: 'ankanto',director: 'Paul Anka', rank: 1, year: 2021},
    {name: 'perfect strangers',director: 'Paolo Genovese', rank: 2, year: 2018},
    {name: 'adams family',director: 'Barry Sonnenfeld', rank: 3, year: 2010}
]

const byrank = movies.sort(movies.rank);
console.log(byrank);