//create an object with 3 movies
//create an internal function which increase price by X% for all movies
var listMovies = {
    movies: [
        {
            title: 'DATE MOVIE',
            imgSrc: 'https://m.media-amazon.com/images/M/MV5BYjA3NDM3ZGYtMGQ4NS00N2U3LTg3MmYtYzFjODJjYzMxMjIwXkEyXkFqcGdeQXVyNzE2MTQyMzM@._V1_FMjpg_UX1000_.jpg',
            avarageScore: 8.8,
            price: 4
        },
        {
            title: 'DORA',
            imgSrc: 'https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg',
            avarageScore: 8.3,
            price: 6
        },
        {
            title: 'KIKA',
            imgSrc: 'https://cinemarama.files.wordpress.com/2013/07/11.jpg',
            avarageScore: 9.0,
            price: 5
        }
    ],
    increasePrices: function (precent) {
        for (var i in this.movies) {
            this.movies[i].price *= precent / 100 + 1;
            document.getElementById('html').innerHTML +=
                "<div id=\"pic\" style=\"background-image: url('" + this.movies[i].imgSrc + "');\">\n            <div id = \"contain\">\n            <div id = \"movieTiltle\" > " + this.movies[i].title + " </div>\n            <div id = \"movieTiltle\" >IMDB Score &nbsp <span style = \"color: red ;\">" + this.movies[i].avarageScore + "</span> &nbsp Rating</div>\n            <div id= \"movieTiltle\"> New Price &nbsp <span style = \"color: red ;\">" + this.movies[i].price + " $</span> &nbsp !!</div>\n            </div>\n            </div>";
        }
    }
};
listMovies.increasePrices(-10);
console.log(listMovies);
