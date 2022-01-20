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
            year: 2016
        },
        {
            name: 'Frozen',
            year: 2013
        }
    ],
    addItem: function (item) {
        this.movies.push(item);
    }
};
// myHome.clothes.push('socks')
myHome.addItem({ name: 'Tangled', year: 2010 });
console.log(myHome);
function handleAddItem(ev) {
    ev.preventDefault();
    console.log(ev);
    var name = ev.target.elements.name.value;
    var year = ev.target.elements.year.valueAsNumber;
    console.log(name, year);
    myHome.addItem({ name: name, year: year });
    var root = document.querySelector('#root');
    renderHome(myHome, root);
    ev.target.reset();
}
function renderHome(myhome, domElement) {
    var Html = '';
    // let mybooks = `<div> <h1>My Books </h1> </div>`
    // myhome.books.forEach(book => {
    //     let bookHtml = `<div class="book">
    //  <h2> ${book.name}</h2>
    // <p> year of publication: ${book.year} </p>
    // </div>`
    //     Html += bookHtml
    // })
    // mybooks + Html
    // domElement.innerHTML = Html;
    myhome.movies.forEach(function (movie) {
        var movieHtml = "<div class=\"movie\">\n    <h2> " + movie.name + "</h2>\n    <P> year of publication: " + movie.year + " </p>\n    </div>";
        Html += movieHtml;
    });
    domElement.innerHTML = Html;
}
var root = document.querySelector('#root');
renderHome(myHome, root);
