var myHome = {
    books: [
        { arrayTitle: 'Books' },
        {
            name: 'Troubled Blood',
            numberOfPages: 869,
            author: 'Robert Galbraith'
        },
        {
            name: 'Orphan X',
            numberOfPages: 368,
            author: 'Gregg Hurwitz'
        }
    ],
    movies: [
        { arrayTitle: 'Movies' },
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
        { arrayTitle: 'TV-Shows' },
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
            this.books.push({ name: newtitle, numberOfPages: category1, author: category2 });
        }
        else if (this.movies === item) {
            this.movies.push({ title: newtitle, director: category1, lenghtMinutes: category2 });
        }
        else {
            this.tvShows.push({ title: newtitle, seasons: category1, topRate: category2 });
        }
        return this;
    }
};
myHome.addItem(myHome.books, 'The chemist', 480, 'Stephenie Meyer');
myHome.addItem(myHome.movies, 'Forrest Gump', 'Robert Zemeckis', 142);
myHome.addItem(myHome.tvShows, 'Breaking bad', 5, 10);
console.log(myHome);
function renderMyHome(obj, domElem) {
    var html = '';
    for (var array in myHome) {
    }
    domElem.innerHTML = html;
}
var homeRoot = document.getElementById('rootHome');
