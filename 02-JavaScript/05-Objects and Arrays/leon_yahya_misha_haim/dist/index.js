//create an object with 3 movies
var obj = {
    movies: [
        {
            title: 'spiderman',
            imgSrc: 'img/download.jpeg',
            avarageScore: 9.7,
            price: 40
        },
        {
            title: 'superman',
            imgSrc: 'img/superman.jpeg',
            avarageScore: 8.6,
            price: 45
        },
        {
            title: 'batman',
            imgSrc: 'img/batman.jpeg',
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
function renderMovies(obj, rootElement) {
    var html = '';
    obj.movies.forEach(function (movie) {
        var movieHTML = "<div class='card'><h2>" + movie.title + "<h2>\n        <p>" + movie.price + "</p>\n        <img src='" + movie.imgSrc + "'>";
        movieHTML += '</div>';
        html += movieHTML;
    });
    rootElement.innerHTML = html;
}
var roothtml = document.getElementById('root');
obj.increasePrices(-30);
renderMovies(obj, roothtml);
console.log(obj);
