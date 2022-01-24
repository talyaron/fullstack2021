var Movies = {
    movies: [
        {
            title: 'Spiderman',
            avarageScore: 8.2,
            price: 54
        },
        {
            title: 'Iron Man',
            avarageScore: 9.2,
            price: 60
        },
        {
            title: 'Superman',
            avarageScore: 9,
            price: 50
        },
    ],
    // increasePrices(precentage: number) {
    //     for (let i = 0; i < this.movies.length; i++){
    //         this.movies[i].price *= (precentage / 100) + 1; 
    //     }
    // }
    increasePrices: function (precentage) {
        this.movies.forEach(function (movie) {
            movie.price *= (precentage / 100) + 1;
        });
    }
};
Movies.increasePrices(17);
console.log(Movies);
