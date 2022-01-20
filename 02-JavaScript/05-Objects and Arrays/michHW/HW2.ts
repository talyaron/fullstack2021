interface Home {
    books: Array<object>;
    clothes: Array<object>;
    movies: Array<object>;
    pushBook(name: string);
    pushClothes(brand: string);
    pushMovie(name: string);
    removeBook(name:string);
    removeClothes(brand:string);
    removeMovie(name:string)
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
    removeBook:function (name:string){
        let outHome = this.books.splice(name)
        return outHome
    },
    removeClothes:function (name:string){
        let outHome = this.clothes.splice(name,1)
        return outHome
    },
    removeMovie:function (name:string){
        let outHome = this.movies.splice(name,1)
        return outHome
    }


}

home.pushBook(`book5`)
home.pushClothes(`shirt1`)
home.pushMovie(`movie5`)
home.removeBook(`book3`)

console.log(home);






