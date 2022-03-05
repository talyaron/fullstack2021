var moviesList = {
    movies: [
        {
            title: "Looper",
            avarageScore: 7.5,
            price: 10
        },
        {
            title: "Fight Club",
            avarageScore: 8.8,
            price: 30
        },
        {
            title: "The GodFather",
            avarageScore: 9.2,
            price: 20
        }
    ],
    increasePrices: function (precentage) {
        this.movies.forEach(function (movie) {
            movie.price += (movie.price * precentage) / 100;
        });
        return this;
    }
};
function renderMovie(movieOBj, domElement) {
    var HTML = '';
    movieOBj.movies.forEach(function (movie) {
        var MovieHTML = "<div class='card'><h2>" + movie.title + "</h2>\n           <p>The avarage score:" + movie.avarageScore + "</p>\n           <p>The price:" + movie.price + "$</p></div>";
        HTML += MovieHTML;
    });
    domElement.innerHTML = HTML;
}
var root = document.querySelector('#RootMovies');
renderMovie(moviesList, root);
function HandleForm(ev) {
    ev.preventDefault();
    var x = document.querySelector('#precentage').value;
    console.log(moviesList.increasePrices(x));
    renderMovie(moviesList, root);
}
