const movies = [

    {
        title: "The Matrix",
        director: "Lana Wachowski",
        rating: "8.7",
        releaseDate: "1999"
    },

    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        rating: "9.2",
        releaseDate: "1972"
    },


    {
        title: "Fight Club",
        director: "David Fincher",
        rating: "8.8",
        releaseDate: "1999"
    },


    {
        title: "Inception",
        director: "Christopher Nolan",
        rating: "8.8",
        releaseDate: "2010"
    },


    {
        title: "Interstellar",
        director: "Christopher Nolan",
        rating: "8.6",
        releaseDate: "2014"
    },


    {
        title: "Back to the Future",
        director: "Robert Zemeckis",
        rating: "8.5",
        releaseDate: "1985"
    },

];

console.log("-------------by rating------------------")

const moviesByRating = movies.sort((a, b) =>
    (b.rating - a.rating));

for (let i in movies) {
    console.log(`${movies[i].title} - ${movies[i].rating}`)
}

console.log("-------------by releaseDate------------------")


movies.sort(function (a, b) {
    let dateA = (a.releaseDate), dateB = (b.releaseDate);
    return dateB - dateA;
});

for (let i in movies) {
    console.log(`${movies[i].title} - ${movies[i].releaseDate}`)
}









