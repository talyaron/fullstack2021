var myMovies = {
    Movies: [
        {
            name: "spiderman"
        },
        {
            name: "doctor strange"
        },
        {
            name: "venom"
        },
        {
            name: "spiderman 2"
        },
        {
            name: "doctor strange 2"
        },
        {
            name: "venom 2"
        },
        {
            name: "spiderman 3"
        },
        {
            name: "doctor strange 3"
        },
        {
            name: "venom 2"
        },
        {
            name: "thor 2"
        },
        {
            name: "hulk 2"
        },
        {
            name: "batman 2"
        },
        {
            name: "thor"
        },
        {
            name: "hulk"
        },
        {
            name: "batman"
        },
    ]
};
function handleSearchMovie(ev) {
    var search = ev.target.value;
    var regex = new RegExp(search, 'i');
    var root = document.querySelector('#root');
    root.innerHTML = "";
    if (search) {
        for (var i in myMovies.Movies) {
            if (regex.test(myMovies.Movies[i].name)) {
                root.innerHTML += "<p>" + myMovies.Movies[i].name + "</p>";
            }
        }
    }
}
