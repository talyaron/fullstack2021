var rootBook = document.getElementById('rootBook');
var rootMusic = document.getElementById('rootMusic');
var rootMovie = document.getElementById('rootMovie');
;
;
;
var marinaHome = {
    books: [],
    songs: [],
    movies: [],
    AddBook: function (book) {
        this.books.push(book);
    },
    RemoveBook: function (bookTitle) {
        var index = this.books.findIndex(function (book) { return book.title === bookTitle; });
        if (index >= 0) {
            this.books.splice(index, 1);
        }
    },
    renderBooks: function (domElement) {
        var html = '';
        this.books.forEach(function (book) {
            html += "<div class = \"books\">\n            <p>Your last added book</p>\n            <h3>" + book.title + "</h3>\n            by <h4>" + book.author + "</h4></div>";
        });
        // console.log(html);
        domElement.innerHTML = html;
    },
    AddSong: function (song) {
        this.songs.push(song);
        console.log(song);
    },
    RemoveSong: function (songTitle) {
        var index = this.songs.findIndex(function (song) { return song.title === songTitle; });
        if (index >= 0) {
            this.songs.splice(index, 1);
        }
    },
    renderMusic: function (domElement) {
        var html = '';
        this.songs.forEach(function (song) {
            html += "<div class = \"songs\">\n            <p>Your last added song</p>\n            <h3>" + song.title + "</h3> \n            by <h4>" + song.performer + "</h4></div>";
        });
        // console.log(html);
        domElement.innerHTML = html;
    },
    AddMovie: function (movie) {
        this.movies.push(movie);
        console.log(movie);
    },
    RemoveMovie: function (movieTitle) {
        var index = this.movies.findIndex(function (movie) { return movie.title === movieTitle; });
        if (index >= 0) {
            this.movies.splice(index, 1);
        }
    },
    renderMovie: function (domElement) {
        var html = '';
        this.movies.forEach(function (movie) {
            html += "<div class = \"movies\">\n            <p>Your last added song</p>\n            <h3>" + movie.title + "</h3> \n            by <h4>" + movie.director + "</h4></div>";
        });
        // console.log(html);
        domElement.innerHTML = html;
    }
};
function handleSubmit(e) {
    e.preventDefault();
    console.dir(e.target.elements.bookName.value);
    var rootBook = document.getElementById('rootBook');
    var title = e.target.elements.bookName.value;
    var author = e.target.elements.bookAuthor.value;
    marinaHome.AddBook({ title: title, author: author });
    marinaHome.renderBooks(rootBook);
    e.target.reset();
}
function handleSubmit(e) {
    e.preventDefault();
    // console.dir(e.target.elements.songName.value);
    var rootMusic = document.getElementById('rootMusic');
    var title = e.target.elements.songName.value;
    var performer = e.target.elements.songPerformer.value;
    marinaHome.AddSong({ title: title, performer: performer });
    marinaHome.renderMusic(rootMusic);
    e.target.reset();
}
function handleSubmit(e) {
    e.preventDefault();
    // console.dir(e.target.elements.movieName.value);
    var rootMovie = document.getElementById('rootMovie');
    var title = e.target.elements.movieName.value;
    var director = e.target.elements.movieDirector.value;
    marinaHome.AddMovie({ title: title, director: director });
    marinaHome.renderMovie(rootMovie);
    e.target.reset();
}
marinaHome.AddBook({ title: 'The Monday starts on Saturday', author: 'Strugazkie' });
marinaHome.AddBook({ title: 'The Phantom of the Opera', author: 'Gaston Leroux' });
marinaHome.AddBook({ title: 'Way Station', author: 'Saimak Klifford' });
marinaHome.AddSong({ title: 'Miami Vice ', performer: 'Jan Hammer' });
marinaHome.AddSong({ title: 'Child in time', performer: 'Deep Purple' });
marinaHome.AddSong({ title: 'Vision', performer: 'Frank Duval' });
marinaHome.AddMovie({ title: 'All is lost', director: 'Chandor' });
marinaHome.AddMovie({ title: '8 femmes', director: 'François Ozon' });
marinaHome.AddMovie({ title: 'Manhattan Murder Mystery ', director: 'Woody Allen' });
marinaHome.renderBooks(rootBook);
marinaHome.renderMusic(rootMusic);
marinaHome.renderMovie(rootMovie);
