var movies = [
    {
        title: 'Spider-Man',
        year: 2021
    },
    {
        title: 'Star-Wars',
        year: 2017
    },
    {
        title: 'Matrix',
        year: 2021
    },
    {
        title: 'The lord of the rings',
        year: 2022
    },
    {
        title: 'All is lost',
        year: 2016
    },
    {
        title: 'Harry Potter',
        year: 2002
    },
    {
        title: 'Harry Potter2',
        year: 2005
    },
];
function handleSearchMovie(ev) {
    var search = ev.target.value;
    var regex = new RegExp(search, 'i');
    var root = document.querySelector('#root');
    root.innerHTML = '';
    if (search.length > 0) {
        movies.forEach(function (movie) {
            if (regex.test(movie.title)) {
                root.innerHTML += "<p>" + movie.title + " was created in " + movie.year + "</p>";
            }
        });
    }
}
