interface myHome {
    books: string[];
    clothes: string[];
    movies: string[];
    addItems: any
    removeItems: any
}

const myHome: myHome = {
    books: ['Dora', 'Pinokio', 'Bible'],
    clothes: ['socks', 'shirt', 'underwear'],
    movies: ['In', 'Out', 'In-side-out'],

    addItems(cat: string, name: string) {
        this[cat].push(name)
    },
    removeItems(cat: string, name: string) {
        this[cat] = this[cat].filter(item => !name.includes(item))
    },
}
// myHome.addItems('aa','dd')
// myHome.removeItems('aa','dd')


// SUBMIT ITEM
function handleMyHome(e) {
    e.preventDefault();
    let select;
    let newName;
    for (let field of e.target) {
        if (field.id == "select") {
            select = field.value;
        }
        if (field.id == "add") {
            newName = field.value;
        }
    }
    myHome.addItems(select, newName);
    document.getElementById(select).innerHTML +=
        `<div>${newName}</div>`
}

// PRINT CARD

for (let i = 0; i < myHome.books.length; i++) {
    document.getElementById('books').innerHTML +=
        `<div>${myHome.books[i]}</div>`
}
for (let i = 0; i < myHome.clothes.length; i++) {
    document.getElementById('clothes').innerHTML +=
        `<div>${myHome.clothes[i]}</div>`
}
for (let i = 0; i < myHome.movies.length; i++) {
    document.getElementById('movies').innerHTML +=
        `<div>${myHome.movies[i]}</div>`
}




console.log(myHome)
