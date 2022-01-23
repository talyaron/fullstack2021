
interface home {
    books: Array<{ name: string }>,
    clothes: Array<{ name: string }>,
    movies: Array<{ name: string }>,
    addItems?: any
    removeitems?: any

}

const myhome: home = {
    books: [
        { name: "tora" },
        { name: "mishna" },
        { name: "gmara" }
    ],

    clothes: [
        { name: "tishert" },
        { name: "hats" }
    ],

    movies: [
        { name: "national jeografick" },
        { name: 'world' }
    ],

    addItems: function () {
        this.books.push("tehilim")
        this.clothes.push("jacket")
        this.movies.push("fairman sami")
        return this
    },

    removeitems: function () {
        this.books.splice([2])
        this.clothes.splice([1])
        this.movies.splice([1])
        return this
    }
}

myhome.addItems()//הפונקציות לא עובדות
myhome.removeitems()
console.log(myhome)

function renderhome(myhome, domElement: any) {
    let html: string =
        `<h1>myhome</h1>`

    html += `<h2>books</h2>`
    myhome.books.forEach(books => {
        const homehtml = `<div class= 'staff'><h3> ${books.name}</h3></div>`;
        html += homehtml;
    })
    html += `<h2>clothes:</h2>`
    myhome.clothes.forEach(clothes => {
        const homehtml = `<div class= 'staff'><h3> ${clothes.name}</h3></div>`;
        html += homehtml;
    })
    html += `<h2>movies:</h2>`
    myhome.movies.forEach(movies => {
        const homehtml = `<div class= 'staff'><h3> ${movies.name}</h3></div>`;
        html += homehtml;
    })
    domElement.innerHTML = html;
}
const root = document.querySelector(`#roothome`);
renderhome(myhome, root)