interface home {
    books: Array<{ name: string }>;
    movies: Array<{ name: string }>;
    spices: Array<{ name: string }>;
    addObj?: any;
    removeObj?: any;

}

const myHome: home = {
    books: [
        { name: `Tania` },
        { name: `Rashi` },
        { name: `siddur` }
    ],
    movies: [
        { name: `spider-man` },
        { name: `the blind side` },
        { name: `prestige` }
    ],
    spices: [
        { name: `paprika` },
        { name: `salt` },
        { name: `pepper` }
    ],
    addObj: function (obj: Array<string>, title): home {
        obj.push({ name: title })
        return this
    },
    removeObj: function (obj: Array<string>, title: string): home {
        let index = obj.indexOf(title);
        obj.splice(index)
        return this
    }
}
myHome.addObj(myHome.books, `Tehilim`);
myHome.removeObj(myHome.spices, `pepper`);
console.dir(myHome)

function renderHome(homeObj: home, domElement: any) {
    let HTML: string = `
    <h1>My Home</h1>
    <h1>books:</h1>`
    myHome.books.forEach(book => {

        let homeHtml = `<div class='card'><h2>${book.name}</h2> </div>`;
        HTML += homeHtml;
    })
    HTML += `<h1>movies:</h1>`
    myHome.movies.forEach(movie => {
        let homeHtml = `<div class='card'><h2>${movie.name}</h2> </div>`;
        HTML += homeHtml;
    })
    HTML += `<h1>spices:</h1>`
    myHome.spices.forEach(spice => {
        let homeHtml = `<div class='card'><h2>${spice.name}</h2> </div>`;
        HTML += homeHtml;
    })

    domElement.innerHTML = HTML;

}
const root = document.querySelector(`#rootHome`);
renderHome(myHome, root)