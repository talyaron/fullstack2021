let movie1={
    title:'The Matrix',
    yaer:1999,
    ranking:8.6
}

let movie2={
    title:'Rocky',
    yaer:1976,
    ranking:8.0
}

let movie3={
    title:'The Lion King',
    yaer:1994,
    ranking:8.5
}

let movie4={
    title:'Avengers: Infinity war',
    yaer:2018,
    ranking:8.4
}

let movie5={
    title:'Toy Story',
    yaer:1995,
    ranking:8.3
}

let movie6={
    title:'Million Dollar Baby ',
    yaer:2004,
    ranking:8.1
}


//----------------------------------------------------------------------------------------------------------

let movies=[movie1,movie2,movie3,movie4,movie5,movie6];

movies.sort((a,b)=>{
    return(a.ranking-b.ranking)
});

console.log(`The list of movies sorted by their ranking:`)
movies.forEach((movie)=>{
    console.log(`${movie.title} ${movie.ranking}`)
});

//----------------------------------------------------------------------------------------------------------
movies.sort((a,b)=>{
    return(a.yaer-b.yaer)
});

console.log(`The list of movies sorted by year of publication:`)
movies.forEach((movie)=>{
    console.log(`${movie.title} ${movie.yaer}`)
});

//----------------------------------------------------------------------------------------------------------
function changeRanking(title,newRanking){
    movies.forEach((movie)=>{
        if (movie.title==title){
            movie.ranking=newRanking;
        }
    })
}

//  changeRanking('Toy Story',9)

//  movies.forEach((movie)=>{
//          if (movie.title=='Toy Story'){
//         console.log(movie.ranking);
//     }
// })
