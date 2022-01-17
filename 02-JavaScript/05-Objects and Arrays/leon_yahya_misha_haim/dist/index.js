//create an object with 3 movies
var obj = {
    movies: [
        {
            title: 'spiderman',
            imgSrc: 'img/download.jpg',
            avarageScore: 9.7,
            price: 40
        },
        {
            title: 'superman',
            imgSrc: 'img/superman.jpg',
            avarageScore: 8.6,
            price: 45
        },
        {
            title: 'batman',
            imgSrc: 'img/batman.jpg',
            avarageScore: 9.3,
            price: 47
        }
    ],
    //create an internal function which increase price by X% for all movies
    increasePrices: function (percentage) {
        //  this.movies.forEach( movie => {
        //      this.movie.price += ( this.movie.price * percentage ) / 100 ;
        //  });
        for (var i in this.movies) {
            this.movies[i].price += (this.movies[i].price * percentage) / 100;
        }
    }
};
obj.increasePrices(-30);
console.log(obj);
