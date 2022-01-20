var myHome = {
    books: [
        {
            title: 'Troubled Blood',
            numberOfPages: 869,
            author: 'Robert Galbraith'
        },
        {
            title: 'Orphan X',
            numberOfPages: 368,
            author: 'Gregg Hurwitz'
        }
    ],
    movies: [
        {
            title: 'The Pianist',
            director: 'Roman Polanski',
            lenghtMinutes: 142
        },
        {
            title: 'The Shawshank Redemption',
            director: 'Frank Darabont',
            lenghtMinutes: 150
        }
    ],
    tvShows: [
        {
            title: 'Narcos',
            seasons: 3,
            topRate: 9.5
        },
        {
            title: 'Money Heist',
            seasons: 3,
            topRate: 9.4
        }
    ],
    addItem: function (item, newtitle, category1, category2) {
        if (this.books === item) {
            this.books.push({ title: newtitle, numberOfPages: category1, author: category2 });
        }
        else if (this.movies === item) {
            this.movies.push({ title: newtitle, director: category1, lenghtMinutes: category2 });
        }
        else {
            this.tvShows.push({ title: newtitle, seasons: category1, topRate: category2 });
        }
        return this;
    },
    removeItem: function (item, titleToRemove) {
        if (this.books === item) {
            for (var i = 1; i < this.books.length; i++) {
                if (this.books[i].title === titleToRemove) {
                    this.books.splice(i, 1);
                }
            }
        }
        else if (this.movies === item) {
            for (var i = 1; i < this.movies.length; i++) {
                if (this.movies[i].title === titleToRemove) {
                    this.movies.splice(i, 1);
                }
            }
        }
        else {
            for (var i = 1; i < this.tvShows.length; i++) {
                if (this.tvShows[i].title === titleToRemove) {
                    this.tvShows.splice(i, 1);
                }
            }
        }
        return this;
    }
};
myHome.addItem(myHome.books, 'The chemist', 480, 'Stephenie Meyer');
myHome.addItem(myHome.movies, 'Forrest Gump', 'Robert Zemeckis', 142);
myHome.addItem(myHome.tvShows, 'Breaking bad', 5, 10);
// console.log(myHome['movies'][0].arrayTitle);
// myHome.removeItem(myHome.books, 'Orphan X');
// myHome.removeItem(myHome.tvShows, 'Breaking bad');
// console.log(myHome);
function renderMyHome(obj, domElem) {
    var html = '';
    var _loop_1 = function (array) {
        if (obj[array][0] !== undefined) {
            var arrayHtml_1 = "<div class = 'card'> <h2> " + [array] + ": </h2>";
            obj[array].forEach(function (item, i) {
                arrayHtml_1 += "<h4> " + obj[array][i].title + " </h4>";
            });
            arrayHtml_1 += "</div>";
            html += arrayHtml_1;
        }
    };
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var array = _a[_i][0];
        _loop_1(array);
    }
    domElem.innerHTML = html;
}
var homeRoot = document.querySelector('#rootHome');
console.log(myHome);
renderMyHome(myHome, homeRoot);
