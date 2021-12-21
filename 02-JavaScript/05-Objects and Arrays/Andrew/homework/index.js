const movies = [
    { title: "The Good, the Bad and the Ugly", director: "Sergio Leone", rating: "8.8", year: "1966" },
    { title: "Fight Club", director: "David Fincher", rating: "8.8", year: "1999" },
    { title: "Apocalypse Now", director: "Francis Ford Coppola", rating: "8.4", year: "1979" },
    { title: "The Matrix", director: "Lana and Lilly Wachowski", rating: "8.6", year: "1999" },
    { title: "Léon: The Professional", director: "Luc Besson", rating: "8.5", year: "1994" },
    { title: "Back to the Future", director: "Robert Zemeckis", rating: "8.5", year: "1985" }

];

//create a function that sorts the movies according to their ranking

let ranking = (movies) => {
    movies.sort(function (a, b) { return (b.rating) - (a.rating) });
};

ranking(movies);
let moviesRanked = "";
for (i = 0; i < movies.length; i++) {
    moviesRanked += `${movies[i].title} ${movies[i].rating}. `;
}
alert(`the movies in ranked order are: ${moviesRanked}`)

//create a function that sorts the movies according to their year of publication

let yearOf = (movies) => {
    movies.sort(function (a, b) { return (a.year) - (b.year) });
};

yearOf(movies);
let moviesByYear = "";
for (i = 0; i < movies.length; i++) {
    moviesByYear += `${movies[i].title} ${movies[i].year}. `;
}
alert(`the movies by year order are: ${moviesByYear}`)

//Create a function that finds the movie according to its title,
//and changes its ranking to the new ranking which was set to the function
//(function changeRanking(title, newRanking){})

function changeRanking(title, newRanking) {
    let wantedMovie = movies.findIndex(movie => movie.title == title);
    movies[wantedMovie].rating = newRanking;
};


let check = true;
while (check == "yes" || check == "y" || check == "1" || check == "true" ){
    let movieName = window.prompt("Please enter the name of the movie:")
    let newRating = window.prompt("Please enter the new ranking of the movie:")

    changeRanking(movieName, newRating);

    ranking(movies);
    moviesRanked = "";
    for (i = 0; i < movies.length; i++) {
        moviesRanked += `${movies[i].title} ${movies[i].rating}. `;
    }
    alert(`the new ranked order is: ${moviesRanked}`)

    check = window.prompt("Would you like to change another movie?")
}



