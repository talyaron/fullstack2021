var moviesList = ['spider man', 'batman', 'forest gamp', 'justice league'];
function handleSearchMovie(ev) {
    var searchedMovie = ev.target.value;
    var root = document.querySelector('#root');
    var regex = new RegExp(searchedMovie, 'i');
    moviesList.forEach(function (movie) {
        if (regex.test(movie)) {
            root.innerHTML = "" + movie;
        }
        else {
            root.innerHTML = searchedMovie + " does not exist";
        }
    });
}
