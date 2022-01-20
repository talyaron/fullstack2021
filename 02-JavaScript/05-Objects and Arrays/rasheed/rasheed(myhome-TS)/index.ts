



interface Obj {
    books: Array<{ name: string, author: string, pages: number }>,
    clothing: Array<{ item: string, color: string, size: number }>,
    movies: Array<{ name: string, director: string, rate: number }>,
    addMoreBooks: any,
    removeBooks: any,
    addMoreClothing: any,
    removeClothing: any,
    addMoreMovies: any,
    removeMovies: any


};



const myHome: Obj = {
    books: [
        { name: 'Harry Potter ', author: 'J. K. Rowling ', pages: 223 },
        { name: 'Da Vinci Code ', author: 'Dan Brown ', pages: 689 },
        { name: 'Lord of The Rings ', author: 'J. R. R. Tolkien ', pages: 479 }
    ],
    clothing: [
        { item: 'Shirt', color: 'Green', size: 10 },
        { item: 'Pants', color: 'Red', size: 32 },
        { item: 'Shoes', color: 'Black', size: 41 }
    ],
    movies: [
        { name: 'The Hobbit', director: 'J. K. Rowling', rate: 9.5 },
        { name: 'The Matrix', director: 'Lana Wachowski', rate: 9.3 },
        { name: 'Harry Potter', director: 'J. K. Rowling', rate: 9.6 }
    ],

    addMoreBooks: function (bookName: string, bookAurther: string, bookPages: number) {
        let addNewBook = this.books.push({ name: bookName, author: bookAurther, pages: bookPages })
        return this

    },
    removeBooks: function () {
        let addNewBook = this.books.shift()
        return this

    },
    addMoreClothing: function (clothingItem: string, clothingColor: string, clothingSize: number) {
        let addNewClothing = this.clothing.push({ item: clothingItem, color: clothingColor, size: clothingSize })
        return this
    },
    removeClothing: function () {
        let addNewBook = this.clothing.shift()
        return this
    },
    addMoreMovies: function (movieName: string, movieDirector: string, moviesRate: number) {
        let addNewMovie = this.movies.push({ name: movieName, director: movieDirector, rate: moviesRate })
        return this
    },
    removeMovies: function () {
        let addNewBook = this.movies.shift()
        return this
    },
}

function myHomeDome(myHome: any, domElement: any) {
    let html: string = '';

    let bookName = `<h2> My Books. `
    bookName += '</h2>';
    html += bookName;
    myHome.books.forEach(book => {
        let bookHtml = `<div class= 'card'><p>Name : ${book.name} , Author : ${book.author}, Total Pages : ${book.pages}<p>`;
        bookHtml += '</div>';
        html += bookHtml;
    })

    let clothingName = `<h2> My Clothes. `
    clothingName += '</h2>';
    html += clothingName;
    myHome.clothing.forEach(wear => {
        let clothingHtml = `<div class= 'card'><p>Item :${wear.item} , Color : ${wear.color} , Size : ${wear.size}<p>`;
        clothingHtml += '</div>';
        html += clothingHtml;
    })
    let movieName = `<h2> My Movies. `
    movieName += '</h2>';
    html += movieName;
    myHome.movies.forEach(movie => {
        let movieHtml = `<div class= 'card'><p>Name : ${movie.name} , Director : ${movie.director}, Rate : ${movie.rate}<p>`;
        movieHtml += '</div>';

        html += movieHtml;
    })
    domElement.innerHTML = html;

}
const root = document.querySelector('.renderForm');

myHome.removeBooks()
myHome.removeClothing()
myHome.removeMovies()
myHomeDome(myHome.addMoreBooks('Osho ', ' O.Sho ', 556), root);
myHomeDome(myHome.addMoreClothing('T-Shirt ', ' Black ', 32), root);
myHomeDome(myHome.addMoreMovies('inception ', ' will marks ', '5.6'), root);
console.log(myHome)





