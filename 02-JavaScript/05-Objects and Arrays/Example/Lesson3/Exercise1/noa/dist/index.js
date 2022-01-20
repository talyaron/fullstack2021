var myHome = {
    books: [{
            name: 'Harry Potter',
            year: 1997,
            pages: 351
        },
        {
            name: 'Secret Garden',
            year: 1911,
            pages: 304
        }
    ],
    clothes: ['pants', 'shirts', 'shoes'],
    movies: [
        {
            name: 'Moana',
            rate: 8.7,
            year: 2016
        },
        {
            name: 'Frozen',
            rate: 9,
            year: 2013
        },
        {
            name: 'Tangled',
            rate: 8.9,
            year: 2010
        }
    ],
    addItem: function () {
        this.clothes.push('socks');
        this.movies.splice(2);
    }
};
// myHome.clothes.push('socks')
myHome.addItem();
console.log(myHome);
function renderHome(myhome, domElement) {
    var Html = '';
    var mybooks = "<div> <h1>My Books </h1> </div>";
    myhome.books.forEach(function (book) {
        var bookHtml = "<div class=\"book\">\n     <h2> " + book.name + "</h2>\n    <p> year of publication: " + book.year + " </p>\n    </div>";
        Html += bookHtml;
    });
    mybooks + Html;
    domElement.innerHTML = Html;
    myhome.movies.forEach(function (movie) {
        var movieHtml = "<div class=\"movie\">\n    <h2> " + movie.name + "</h2>\n    <p> rate: " + movie.rate + "* \n    <P> year of publication: " + movie.year + " </p>\n    </div>";
        Html += movieHtml;
    });
    domElement.innerHTML = Html;
}
var root = document.querySelector('#root');
renderHome(myHome, root);
