
const root = document.getElementById('listRoot');

interface Book { title: string, author: string };
interface Music { title: string, performer: string };
interface Movies { title: string, director: string };

interface AtHome {
    books: Array<Book>,
    music: Array<Music>,
    movies: Array<Movies>,
    AddBook(book: Book),
    // AddMusic(music:Music ),
    // AddMovie(movies: Movies),
    // RemoveBook(bookTitle: string),
    // RemoveMusic(songTitle: string),
    // RemoveMovie(movieTitle: string),
    renderBooks(domElement: any);

}

const marinaHome: AtHome = {
    books: [],
    music: [],
    movies: [],

    AddBook(book: Book) {
        this.books.push(book);
    },

    // RemoveBook(bookTitle: string) {
    //       const index = this.books.findIndex(movie => book.title === bookTitle);
    //       if(index >= 0) {
    //           this.books.splice(index, 1);
    //       }
    // },

    renderBooks(domElement) {
        let html = '';
        this.books.forEach(book => {
            html += `<div class="books">
            <p>${book.title}, ${book.author}</p></div>`
        });
        console.log(html);
        domElement.innerHTML = html;
    }

}


function handleSubmit(e){
    e.preventDefault;
    console.dir(e.target);
    const root = document.getElementById('listRoot');
    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;

    marinaHome.AddBook({ title, author});
    marinaHome.renderBooks(root);
}

marinaHome.AddBook({ title: 'The Monday starts on Saturday', author: 'Strugazkie' });
marinaHome.AddBook({ title: 'The Phantom of the Opera', author: 'Gaston Leroux'  });
marinaHome.AddBook({ title: 'Way Station',  author: 'Saimak Klifford' });


// const myHome: AtHome = {
//     Books: [{ name: 'The Monday starts on Saturday', author: 'Strugazkie' }, { name: 'The Phantom of the Opera', author: 'Gaston Leroux' }],
//     MyMusic: [{ name: 'Miami Vice ', performer: 'Jan Hammer' }, { name: 'Vision', performer: 'Frank Duval' }],
//     MyMovies: [{ name: 'All is lost', director: 'Chandor' }, { name: '8 femmes', director: 'François Ozon' }],

//     // Adding items to the list
//     AddBook: function (name: string, author: string) {
//         let newItem = this.Books.push({ name: name, author: author });
//         let lastItem = this.Books.at(-1);
//         const html = `<div class="listAddition">
//         <p>The book you have added:</p>
//         <h3>${lastItem.name}</h3>
//         <p>by</p>
//         <h4> ${lastItem.author}</h4>
//         </div>`
        
//         root.innerHTML += html
//         return newItem;
//     },

//     AddMusic: function (name: string, performer: string) {
//         let newItem = this.MyMusic.push({ name: name, performer: performer });
//         let lastItem = this.MyMusic.at(-1);
//         const html = `<div class="listAddition">
//         <p>The song you have added:</p>
//         <h3>${lastItem.name}</h3>
//         <p>by</p>
//         <h4> ${lastItem.performer}</h4>
//         </div>`

//         root.innerHTML += html
//         return newItem;
//     },

//     AddMovie: function (name: string, director: string) {
//         let newItem = this.MyMovies.push({ name: name, director: director });
//         let lastItem = this.MyMovies.at(-1);
//         const html = `<div class="listAddition">
//         <p>The movie you have added:</p>
//         <h3>${lastItem.name}</h3>
//         <p>by</p>
//         <h4> ${lastItem.director}</h4>
//         </div>`

//         root.innerHTML += html
//         return newItem;

//     },

//     // 2. removing items from the list
//       RemovedBook: function (name: string, author: string) {
//         let removedBook = this.Books.pop();
//         const html = `<div class="listRemoving">
//         <p>The book you have removed:</p>
//         <h3>${removedBook.name}</h3>
//         <p>by</p>
//         <h4> ${removedBook.author}</h4>
//         </div>`

//         root.innerHTML += html;
//           return removedBook;

//     },

//     RemovedMusic: function (name: string, performer: string) {
//         let removedMusic = this.MyMusic.splice(0, 1);
//         let lastRemovedMusic = this.MyMusic.at();
//         const html = `<div class="listRemoving">
//         <p>The song you have removed:</p>
//         <h3>${lastRemovedMusic.name}</h3>
//         <p>by</p>
//         <h4> ${lastRemovedMusic.performer}</h4>
//         </div>`

//         root.innerHTML += html;
//         return removedMusic;

//     },

//     RemoveMovie: function (name: string, director: string) {
//         let removedMovie = this.MyMovies.splice(0, 1);
//         let lastRemovedMovie = this.MyMovies.at();
//         const html = `<div class="listRemoving">
//         <p>The movie you have removed:</p>
//         <h3>${lastRemovedMovie.name}</h3>
//         <p>by</p>
//         <h4> ${lastRemovedMovie.director}</h4>
//         </div>`

//         root.innerHTML += html;
//         return removedMovie;
//     }

// }


// myHome.AddBook('Way Station', 'Saimak Klifford');
// myHome.AddMusic('Child in time', 'Deep Purple');
// myHome.AddMovie('Manhattan Murder Mystery ', 'Woody Allen');
// myHome.RemoveMovie('','');
// myHome.RemovedMusic('', '');
// myHome.RemovedBook(" ", " ");
// console.log(myHome);







