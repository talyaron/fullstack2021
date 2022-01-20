
const root = document.getElementById('listRoot');

interface Book { name: string, author: string };
interface Music { name: string, performer: string };
interface Movies { name: string, director: string };

interface AtHome {
    Books: Array<Book>,
    MyMusic: Array<Music>,
    MyMovies: Array<Movies>,
    AddBook(name: string, author: string),
    AddMusic(name: string, performer: string),
    AddMovie(name: string, director: string),
    RemovedBook(name: string, author: string),
    RemovedMusic(name: string, performer: string),
    RemoveMovie(name: string, director: string)

}


const myHome: AtHome = {
    Books: [{ name: 'The Monday starts on Saturday', author: 'Strugazkie' }, { name: 'The Phantom of the Opera', author: 'Gaston Leroux' }],
    MyMusic: [{ name: 'Miami Vice ', performer: 'Jan Hammer' }, { name: 'Vision', performer: 'Frank Duval' }],
    MyMovies: [{ name: 'All is lost', director: 'Chandor' }, { name: '8 femmes', director: 'François Ozon' }],

    // Adding items to the list
    AddBook: function (name: string, author: string) {
        let newItem = this.Books.push({ name: name, author: author });
        let lastItem = this.Books.at(-1);
        const html = `<div class="listAddition">
        <p>The book you have added:</p>
        <h3>${lastItem.name}</h3>
        <p>by</p>
        <h4> ${lastItem.author}</h4>
        </div>`
        
        root.innerHTML += html
        return newItem;
    },

    AddMusic: function (name: string, performer: string) {
        let newItem = this.MyMusic.push({ name: name, performer: performer });
        let lastItem = this.MyMusic.at(-1);
        const html = `<div class="listAddition">
        <p>The song you have added:</p>
        <h3>${lastItem.name}</h3>
        <p>by</p>
        <h4> ${lastItem.performer}</h4>
        </div>`

        root.innerHTML += html
        return newItem;
    },

    AddMovie: function (name: string, director: string) {
        let newItem = this.MyMovies.push({ name: name, director: director });
        let lastItem = this.MyMovies.at(-1);
        const html = `<div class="listAddition">
        <p>The movie you have added:</p>
        <h3>${lastItem.name}</h3>
        <p>by</p>
        <h4> ${lastItem.director}</h4>
        </div>`

        root.innerHTML += html
        return newItem;

    },

    // 2. removing items from the list
      RemovedBook: function (name: string, author: string) {
        let removedBook = this.Books.pop();
        const html = `<div class="listRemoving">
        <p>The book you have removed:</p>
        <h3>${removedBook.name}</h3>
        <p>by</p>
        <h4> ${removedBook.author}</h4>
        </div>`

        root.innerHTML += html;
          return removedBook;

    },

    RemovedMusic: function (name: string, performer: string) {
        let removedMusic = this.MyMusic.splice(0, 1);
        let lastRemovedMusic = this.MyMusic.at();
        const html = `<div class="listRemoving">
        <p>The song you have removed:</p>
        <h3>${lastRemovedMusic.name}</h3>
        <p>by</p>
        <h4> ${lastRemovedMusic.performer}</h4>
        </div>`

        root.innerHTML += html;
        return removedMusic;

    },

    RemoveMovie: function (name: string, director: string) {
        let removedMovie = this.MyMovies.splice(0, 1);
        let lastRemovedMovie = this.MyMovies.at();
        const html = `<div class="listRemoving">
        <p>The movie you have removed:</p>
        <h3>${lastRemovedMovie.name}</h3>
        <p>by</p>
        <h4> ${lastRemovedMovie.director}</h4>
        </div>`

        root.innerHTML += html;
        return removedMovie;
    }

}


myHome.AddBook('Way Station', 'Saimak Klifford');
myHome.AddMusic('Child in time', 'Deep Purple');
myHome.AddMovie('Manhattan Murder Mystery ', 'Woody Allen');
myHome.RemoveMovie('','');
myHome.RemovedMusic('', '');
myHome.RemovedBook(" ", " ");
console.log(myHome);


// 3. Optional part (not working)




