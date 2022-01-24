interface Home {
    books: Array<object>;
    clothes: Array<object>;
    movies: Array<object>;
    pushBook(name: string);
    pushClothes(brand: string);
    pushMovie(name: string);
    removeBook(name: string);
    removeClothes(brand: string);
    removeMovie(name: string);
    rendermovie(domElement: any);
    renderbook(domElement: any);
    renderclothing(domElement: any);
}


const home: Home = {
    books: [{ name: `book1` }, { name: `book2` }, { name: `book3` }, { name: `book4` }],
    clothes: [{ brand: `pants1` }, { brand: `pants1` }, { brand: `pants1` }, { brand: `pants1` }],
    movies: [{ name: `movie1` }, { name: `movie2` }, { name: `movie3` }, { name: `movie4` }],
    pushBook: function (name: string) {
        let inHome = this.books.push({ name: name })

        return inHome
    },
    pushClothes: function (name: string) {
        let inHome = this.clothes.push({ brand: name })

        return inHome
    },
    pushMovie: function (name: string) {
        let inHome = this.movies.push({ name: name })

        return inHome
    },
    // removeBook: function (name: string) {
    //     let outHome = this.books.splice(name, 1)
    //     return outHome
    // },
    // removeClothes: function (name: string) {
    //     let outHome = this.clothes.splice(name, 1)
    //     return outHome
    // },
    // removeMovie: function (name: string) {
    //     let outHome = this.movies.splice(name, 1)
    //     return outHome
    // },
    rendermovie(domElement) {
        let html = '';
        this.movies.forEach(movie => {
            html += `<div class='card'>
            <p>${movie.name}</p></div>`

        })
        //  console.log(html);
        domElement.innerHTML = html
    },
    renderbook(domElement) {
        let html = ``
        this.books.forEach(book => {
            html += `<div class='card2'>
            <p>${book.name}</p></div>`

        })
        domElement.innerHTML = html
    },
    renderclothing(domElement) {
        let html = ``
        this.clothes.forEach(clothes => {
            html += `<div class = 'card3'>
            <p>${clothes.brand}</p></div>`

        })
        domElement.innerHTML = html
    }


}
function functionformovie(ev) {
    ev.preventDefault();
    console.dir(ev.target)
    const name = ev.target.elements.title.value;

    home.pushMovie(name);
    const rootMovie = document.getElementById(`rootMovies`);
    home.rendermovie(rootMovie);

    ev.target.reset();

}
function functionforbook(ev) {
    ev.preventDefault();
    console.dir(ev.target)
    const name = ev.target.elements.bookName.value;

    home.pushBook(name);
    const rootBook = document.getElementById(`rootBook`);
    home.renderbook(rootBook);

    ev.target.reset()
}
function functionforclothes(ev){
    ev.preventDefault();
    console.dir(ev.target)
    const brand = ev.target.elements.brand.value;

    home.pushClothes(brand)
    const rootClothing = document.getElementById(`rootClothing`);
    home.renderclothing(rootClothing);
    ev.target.reset()
}

    home.pushBook(`book5`)



console.log(home);






