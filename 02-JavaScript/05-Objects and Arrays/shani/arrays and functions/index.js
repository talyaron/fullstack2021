const movies = [{title:"Monty Python and the Holy Grail", director:"Terry Jones", ranking: 8.2 ,year:1975}, 
                {title:"Forrest Gump", director:"Robert Zemeckis", ranking: 8.8 ,year:1994},
                {title:"WALL·E", director:"Andrew Stanton", ranking: 8.4 ,year:2008},
                {title:"Toy Story", director:"John Lasseter", ranking: 8.3 ,year:1995},
                {title:"Some Like It Hot", director:"Billy Wilder", ranking: 8.2 ,year:1959},
                {title:"The Princess Bride", director:"Rob Reiner", ranking: 8.1 ,year:1987} ];






//create a function that sorts the movies according to their ranking

movies.sort((a, b) => b.ranking - a.ranking);


console.log("Movies Ranking List:")

for ( let i=0;i<movies.length;i++){

    console.log(`${movies[i].title} ${movies[i].ranking}`)
        
}

//create a function that sorts the movies according to their year of publication

movies.sort((a, b) => a.year - b.year);

console.log("Movies List top 6 from oldest to the newest:")

movies.forEach(movie =>{
    console.log(`${movie.title} ${movie.year}`)}
)

/*Create a function that finds the movie according to its title, and changes its ranking to the new ranking which was set
 to the function (function changeRanking(title, newRanking){})*/

 function changeRanking(title, newRanking)



  movies.filter( movie =>{ movie.title   })

  console.log("Forrest Gump",4.5)

