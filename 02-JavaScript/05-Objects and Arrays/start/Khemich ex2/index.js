const TheGodFather = {
    name: `The Godfather`,
    year: 1972,
    rating: 9.1,
}

const Interstellar = {
    name: `Interstellar`,
    year: 2014,
    rating: 8.5,
}

const LOTR1 = {
    name: 'Lord Of The Rings 1',
    year: 2001,
    rating: 8.8,
}

const LOTR2 = {
    name: `Lord Of The Rings 2`,
    year: 2002,
    rating: 8.7,
}
const LOTR3 = {
    name: 'Lord Of The Rings 3',
    year: 2003,
    rating: 8.9,
}

const Thematrix = {
    name: `The matrix`,
    year: 1999,
    rating: 8.6,
}

const Movies = [Thematrix, LOTR3, LOTR2, LOTR1,Interstellar, TheGodFather]

//1
Movies.sort((a,b)=>{
    return b.rating-a.rating;
});
for( Movie in Movies) {
    console.log(`${Movies[Movie].name} - ${Movies[Movie].rating}`);
}

2//

Movies.sort((a,b)=>{
    return a.year-b.year
});

for( i in Movies) {
    console.log(`${Movies[i].name} - ${Movies[i].year}`);
}

3//
let NewMovieR=window.prompt("Movie Name")
let NewR=window.prompt('Type new rating')

NewR = parseFloat(NewR);

const Chrat = changerating(NewMovieR,NewR);

function changerating(name,NewR){
    const objIndex = Movies.findIndex((obj => obj.name == name));
    Movies[objIndex].rating = NewR;
    return objIndex;
}

console.log(`${Movies[Chrat].name} - ${Movies[Chrat].rating}`);



