const rootBook = document.getElementById("rootBook");
const rootMusic = document.getElementById("rootMusic");
const rootMovie = document.getElementById("rootMovie");

interface Book {
  titleBook: string;
  author: string;
}
interface Music {
  titleMusic: string;
  performer: string;
}
interface Movies {
  titleMovies: string;
  director: string;
}

interface AtHome {
  books: Array<Book>;
  songs: Array<Music>;
  movies: Array<Movies>;
  AddBook(book: Book);
  AddSong(song: Music);
  AddMovie(movie: Movies);
  RemoveBook(bookTitle: string);
  RemoveSong(songTitle: string);
  RemoveMovie(movieTitle: string);
  renderBooks(domElement: any);
  renderMusic(domElement: any);
  renderMovie(domElement: any);
}

const marinaHome: AtHome = {
  books: [],
  songs: [],
  movies: [],

  AddBook(book: Book) {
    this.books.push(book);
  },

  RemoveBook(bookTitle: string) {
    const index = this.books.findIndex((book) => book.titleBook === bookTitle);
    if (index >= 0) {
      this.books.splice(index, 1);
    }
  },

  renderBooks(domElement) {
    let html = "";
    this.books.forEach((book) => {
      html += `<div class = "books">
            <p>Your last added book</p>
            <h3>${book.titleBook}</h3>
            by <h4>${book.author}</h4></div>`;
    });
    // console.log(html);
    domElement.innerHTML = html;
  },

  AddSong(song: Music) {
    this.songs.push(song);
    console.log(song);
  },

  RemoveSong(songTitle: string) {
    const index = this.songs.findIndex((song) => song.titleMusic === songTitle);
    if (index >= 0) {
      this.songs.splice(index, 1);
    }
  },

  renderMusic(domElement) {
    let html = "";
    this.songs.forEach((song) => {
      html += `<div class = "songs">
            <p>Your last added song</p>
            <h3>${song.titleMusic}</h3> 
            by <h4>${song.performer}</h4></div>`;
    });
    // console.log(html);
    domElement.innerHTML = html;
  },

  AddMovie(movie: Movies) {
    this.movies.push(movie);
    console.log(movie);
  },

  RemoveMovie(movieTitle: string) {
    const index = this.movies.findIndex((movie) => movie.titleMovies === movieTitle);
    if (index >= 0) {
      this.movies.splice(index, 1);
    }
  },

  renderMovie(domElement) {
    let html = "";
    this.movies.forEach((movie) => {
      html += `<div class = "movies">
            <p>Your last added song</p>
            <h3>${movie.titleMovies}</h3> 
            by <h4>${movie.director}</h4></div>`;
    });
    // console.log(html);
    domElement.innerHTML = html;
  },
};

function handleSubmit(e) {
  e.preventDefault();
  // console.dir(e.target.elements.songName.value);
  const rootMusic = document.getElementById("rootMusic");
  const titleMusic = e.target.elements.songName.value;
  const performer = e.target.elements.songPerformer.value;
  marinaHome.AddSong({ titleMusic, performer });
  marinaHome.renderMusic(rootMusic);

  const rootMovie = document.getElementById("rootMovie");
  const titleMovies = e.target.elements.movieName.value;
  const director = e.target.elements.movieDirector.value;
  marinaHome.AddMovie({ titleMovies, director });
  marinaHome.renderMovie(rootMovie);

  const rootBook = document.getElementById("rootBook");
  const titleBook = e.target.elements.bookName.value;
  const author = e.target.elements.bookAuthor.value;
  marinaHome.AddBook({ titleBook, author });
  marinaHome.renderBooks(rootBook);
  e.target.reset();
}


marinaHome.AddBook({
  titleBook: "The Monday starts on Saturday",
  author: "Strugazkie",
});
marinaHome.AddBook({
  titleBook: "The Phantom of the Opera",
  author: "Gaston Leroux",
});
marinaHome.AddBook({ titleBook: "Way Station", author: "Saimak Klifford" });

marinaHome.AddSong({ titleMusic: "Miami Vice ", performer: "Jan Hammer" });
marinaHome.AddSong({ titleMusic: "Child in time", performer: "Deep Purple" });
marinaHome.AddSong({ titleMusic: "Vision", performer: "Frank Duval" });

marinaHome.AddMovie({ titleMovies: "All is lost", director: "Chandor" });
marinaHome.AddMovie({ titleMovies: "8 femmes", director: "François Ozon" });
marinaHome.AddMovie({
  titleMovies: "Manhattan Murder Mystery ",
  director: "Woody Allen",
});

marinaHome.renderBooks(rootBook);
marinaHome.renderMusic(rootMusic);
marinaHome.renderMovie(rootMovie);
