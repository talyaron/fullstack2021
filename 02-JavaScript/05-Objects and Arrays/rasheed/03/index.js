//create an object with 3 movies
//create an internal function which increase price by X% for all movies
var moviesList = {
    movies: [
        {
            title: 'halo',
            avarageScore: 5.6,
            price: 100
        },
        {
            title: 'halo',
            avarageScore: 4.8,
            price: 200
        },
        {
            title: 'halo',
            avarageScore: 9.6,
            price: 300
        }
    ],
    increasePrices: function (increase) {
        this.movies.forEach(function (movie) {
            movie.price += (movie.price * increase) / 100;
        });
        return this;
    }
};
console.log(moviesList.increasePrices(50));
