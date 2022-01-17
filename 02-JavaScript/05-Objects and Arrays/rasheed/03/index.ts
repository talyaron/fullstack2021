interface Movies {
    movies: Array<Movie>;
    increasePrices(number): any
}

interface Movie {
    title: string;
    imgSrc?: string;
    avarageScore: number;
    price: number;
}

//create an object with 3 movies
//create an internal function which increase price by X% for all movies

const moviesList: Movies = {
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
        this.movies.forEach(movie => {
            movie.price += (movie.price * increase) / 100;

        });
        return this;
    }

}

console.log(moviesList.increasePrices(50));
