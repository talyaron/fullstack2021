const movies = [

    {
        title: "the matrix",
        director: "Lana Wachowski",
        rating: "8.7",
        releaseDate: "1999"
    },

    {
        title: "the godfather",
        director: "Francis Ford Coppola",
        rating: "9.2",
        releaseDate: "1972"
    },


    {
        title: "fight club",
        director: "David Fincher",
        rating: "8.8",
        releaseDate: "1999"
    },


    {
        title: "inception",
        director: "Christopher Nolan",
        rating: "8.8",
        releaseDate: "2010"
    },


    {
        title: "interstellar",
        director: "Christopher Nolan",
        rating: "8.6",
        releaseDate: "2014"
    },


    {
        title: "back to the future",
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

console.log("-------------by title and rank change------------------")


let changeMovie = window.prompt("which movie rank do you want to change?")
let newRate = window.prompt('What is your new rank?')


const updatedRate = changeRating(changeMovie, newRate);

function changeRating(title, newRating) {


    const objIndex = movies.findIndex((obj => obj.title == changeMovie));
    movies[objIndex].rating = newRating;
    return objIndex;
}

console.log(`${movies[updatedRate].title} - ${movies[updatedRate].rating}`);









