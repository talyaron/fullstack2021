var myHome = {
    books: ['Dora', 'Pinokio', 'Bible'],
    clothes: ['socks', 'shirt', 'underwear'],
    movies: ['In', 'Out', 'In-side-out'],
    addItems: function (cat, name) {
        this[cat].push(name);
    },
    removeItems: function (cat, name) {
        this[cat] = this[cat].filter(function (item) { return !name.includes(item); });
    }
};
function handleMyHome(e) {
    e.preventDefault();
    var select;
    var newName;
    for (var _i = 0, _a = e.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.id == "select") {
            select = field.value;
        }
        if (field.id == "add") {
            newName = field.value;
        }
    }
    myHome.addItems(select, newName);
    document.getElementById(select).innerHTML +=
        "<div>" + newName + "</div>";
}
for (var i = 0; i < myHome.books.length; i++) {
    document.getElementById('books').innerHTML +=
        "<div>" + myHome.books[i] + "</div>";
}
for (var i = 0; i < myHome.clothes.length; i++) {
    document.getElementById('clothes').innerHTML +=
        "<div>" + myHome.clothes[i] + "</div>";
}
for (var i = 0; i < myHome.movies.length; i++) {
    document.getElementById('movies').innerHTML +=
        "<div>" + myHome.movies[i] + "</div>";
}
console.log(myHome);
//create an object with 3 movies
//create an internal function which increase price by X% for all movies
// const listMovies: Movies = {
//     movies: [
//         {
//             title: 'DATE MOVIE',
//             imgSrc: 'https://m.media-amazon.com/images/M/MV5BYjA3NDM3ZGYtMGQ4NS00N2U3LTg3MmYtYzFjODJjYzMxMjIwXkEyXkFqcGdeQXVyNzE2MTQyMzM@._V1_FMjpg_UX1000_.jpg',
//             avarageScore: 8.8,
//             price: 4
//         },
//         {
//             title: 'DORA',
//             imgSrc: 'https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg',
//             avarageScore: 8.3,
//             price: 6
//         },
//         {
//             title: 'KIKA',
//             imgSrc: 'https://cinemarama.files.wordpress.com/2013/07/11.jpg',
//             avarageScore: 9.0,
//             price: 5
//         }
//     ],
//     increasePrices(precent) {
//         for (let i in this.movies) {
//             this.movies[i].price *= precent / 100 + 1
//             document.getElementById('html').innerHTML +=
//             `<div id="pic" style="background-image: url('${this.movies[i].imgSrc}');">
//             <div id = "contain">
//             <div id = "movieTiltle" > ${this.movies[i].title} </div>
//             <div id = "movieTiltle" >IMDB Score &nbsp <span style = "color: red ;">${this.movies[i].avarageScore}</span> &nbsp Rating</div>
//             <div id= "movieTiltle"> New Price &nbsp <span style = "color: red ;">${this.movies[i].price} $</span> &nbsp !!</div>
//             </div>
//             </div>`;
//         }
//     }
// }
// listMovies.increasePrices(-10);
// console.log(listMovies)
