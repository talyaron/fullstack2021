interface MyHome {
    books: Array<string>;
    clothes: Array<string>;
    movies: Array<string>;
    addItems?: any;
    removeItem?: any;
}

const myHome: MyHome = {
    books: [],
    clothes: [],
    movies: [],
    addItems: function () {

        this.books.push("harry , potter , meod")
        this.clothes.push("shoe , tshirt , nose")
        this.movies.push("movie1 , movie2 , movie3")

        return this;
    },
    removeItem: function (item) {
        this.books.forEach((element: string, i: number) => {
            if (item == element)
                return this.books.splice(i, 1)
        });
        this.clothes.forEach((element, i) => {
            if (item == element)
                return this.books.splice(i, 1)
        });
        this.movies.forEach((element, i) => {
            if (item == element)
                return this.books.splice(i, 1)
        });
        return this;

    }
}
// myHome.addItems();

// myHome.removeItem('potter')
const root = document.getElementById('root')
function renderObj(objMyHome, root) {
    let html: string = '';

    objMyHome.books.forEach(book => {
        let bookss = `<div class = 'card' > <h2>${book}`

        objMyHome.clothes.forEach(cloth => {
            let clothes = `<div class = 'card' > <h2>${cloth}`
        })
        objMyHome.movies.forEach(movie => {
            let movies = `<div class = 'card' > <h2>${movie}`
        })

    })


}