var listOfMovies = {
    movies: [
        {
            title: 'jhjhj',
            imgSrc: 'ngjn',
            avarageScore: 15,
            price: 18
        },
        {
            title: 'jhjhj',
            imgSrc: 'ngjn',
            avarageScore: 15,
            price: 18
        },
        {
            title: 'jhjhj',
            imgSrc: 'ngjn',
            avarageScore: 15,
            price: 18
        }
    ],
    increasePrices: function (percent) {
        for (var i in this.movies) {
            this.movies[i].price *= (percent / 100) + 1;
            console.log(this.movies[i].price);
        }
    }
};
listOfMovies.increasePrices(5);
console.log(listOfMovies);
