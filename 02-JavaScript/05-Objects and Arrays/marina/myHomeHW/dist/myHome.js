var root = document.getElementById('listRoot');
;
;
;
var myHome = {
    Books: [{ name: 'The Monday starts on Saturday', author: 'Strugazkie' }, { name: 'The Phantom of the Opera', author: 'Gaston Leroux' }],
    MyMusic: [{ name: 'Miami Vice ', performer: 'Jan Hammer' }, { name: 'Vision', performer: 'Frank Duval' }],
    MyMovies: [{ name: 'All is lost', director: 'Chandor' }, { name: '8 femmes', director: 'François Ozon' }],
    // Adding items to the list
    AddBook: function (name, author) {
        var newItem = this.Books.push({ name: name, author: author });
        var lastItem = this.Books.at(-1);
        var html = "<div class=\"listAddition\">\n        <p>The book you have added:</p>\n        <h3>" + lastItem.name + "</h3>\n        <p>by</p>\n        <h4> " + lastItem.author + "</h4>\n        </div>";
        root.innerHTML += html;
        return newItem;
    },
    AddMusic: function (name, performer) {
        var newItem = this.MyMusic.push({ name: name, performer: performer });
        var lastItem = this.MyMusic.at(-1);
        var html = "<div class=\"listAddition\">\n        <p>The song you have added:</p>\n        <h3>" + lastItem.name + "</h3>\n        <p>by</p>\n        <h4> " + lastItem.performer + "</h4>\n        </div>";
        root.innerHTML += html;
        return newItem;
    },
    AddMovie: function (name, director) {
        var newItem = this.MyMovies.push({ name: name, director: director });
        var lastItem = this.MyMovies.at(-1);
        var html = "<div class=\"listAddition\">\n        <p>The movie you have added:</p>\n        <h3>" + lastItem.name + "</h3>\n        <p>by</p>\n        <h4> " + lastItem.director + "</h4>\n        </div>";
        root.innerHTML += html;
        return newItem;
    },
    // 2. removing items from the list
    RemovedBook: function (name, author) {
        var removedBook = this.Books.pop();
        var html = "<div class=\"listRemoving\">\n        <p>The book you have removed:</p>\n        <h3>" + removedBook.name + "</h3>\n        <p>by</p>\n        <h4> " + removedBook.author + "</h4>\n        </div>";
        root.innerHTML += html;
        return removedBook;
    },
    RemovedMusic: function (name, performer) {
        var removedMusic = this.MyMusic.splice(0, 1);
        var lastRemovedMusic = this.MyMusic.at();
        var html = "<div class=\"listRemoving\">\n        <p>The song you have removed:</p>\n        <h3>" + lastRemovedMusic.name + "</h3>\n        <p>by</p>\n        <h4> " + lastRemovedMusic.performer + "</h4>\n        </div>";
        root.innerHTML += html;
        return removedMusic;
    },
    RemoveMovie: function (name, director) {
        var removedMovie = this.MyMovies.splice(0, 1);
        var lastRemovedMovie = this.MyMovies.at();
        var html = "<div class=\"listRemoving\">\n        <p>The movie you have removed:</p>\n        <h3>" + lastRemovedMovie.name + "</h3>\n        <p>by</p>\n        <h4> " + lastRemovedMovie.director + "</h4>\n        </div>";
        root.innerHTML += html;
        return removedMovie;
    }
};
myHome.AddBook('Way Station', 'Saimak Klifford');
myHome.AddMusic('Child in time', 'Deep Purple');
myHome.AddMovie('Manhattan Murder Mystery ', 'Woody Allen');
myHome.RemoveMovie('', '');
myHome.RemovedMusic('', '');
myHome.RemovedBook(" ", " ");
console.log(myHome);
// 3. Optional part (not working)
