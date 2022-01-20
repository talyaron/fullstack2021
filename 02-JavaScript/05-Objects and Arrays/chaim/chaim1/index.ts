
interface Obj {
    books: Array<string>
    clothes: Array<string>
    movies: Array<string>
    addItems?: any
    removeitems?: any
}

let myHome: Obj = {
    books: ["tora", "mishna", "gmara"],
    clothes: ["tishert"],
    movies: ["tom & jerry", 'world'],


    addItems: function () {
        this.books.push("tehilim")
        this.clothes.push("jacket")
        this.movies.push("fairman sami")
        return this
    },

    removeitems: function () {
        this.movies.splice([1])
        return this
    }
}
console.log(myHome)
myHome.addItems()
myHome.removeitems()


function print (myHomeobj: domElement: any) {
        let html: string = '';

    myHome.books.forEach(books => {
        let bookshtml = `<div class= 'home'><h2> ${myHome.books}</h2>`
        
       bookshtml='</div>';
        html += bookshtml;

        domElement.innerHTML = html;
    });
}