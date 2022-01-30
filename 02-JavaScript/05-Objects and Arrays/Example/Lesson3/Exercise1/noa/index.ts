interface Home {
    books: Array<Books>
    clothes: Array<string>
    movies: Array<Movies>
    addItem: any
}


interface Books {
    name: string
    year: number
    pages: number
}

interface Movies {
    name: string
    year: number
}

const myHome: Home = {
    books: [{
        name: 'Harry Potter',
        year: 1997,
        pages: 351
    },
    {
        name: 'Secret Garden',
        year: 1911,
        pages: 304
    }

    ],
    clothes: ['pants', 'shirts', 'shoes'],
    movies: [
        {
            name: 'Moana',
            year: 2016
        },
        {
            name: 'Frozen',
            year: 2013
        }
    ],

    addItem: function (item) {
        this.movies.push(item)

    }
}

// myHome.clothes.push('socks')
myHome.addItem({ name: 'Tangled', year: 2010 })
console.log(myHome)


function handleAddItem(ev) {
    ev.preventDefault();

    console.log(ev)
    const name = ev.target.elements.name.value;
    const year = ev.target.elements.year.valueAsNumber;

    console.log(name, year)

    myHome.addItem({ name, year });

    const root = document.querySelector('#root');
    renderHome(myHome, root)

    ev.target.reset()
}




function renderHome(myhome: Home, domElement: any) {
    let Html: string = ''

    // let mybooks = `<div> <h1>My Books </h1> </div>`
    // myhome.books.forEach(book => {
    //     let bookHtml = `<div class="book">
    //  <h2> ${book.name}</h2>
    // <p> year of publication: ${book.year} </p>
    // </div>`

    //     Html += bookHtml
    // })
    // mybooks + Html
    // domElement.innerHTML = Html;

    myhome.movies.forEach(movie => {
        let movieHtml = `<div class="movie">
    <h2> ${movie.name}</h2>
    <P> year of publication: ${movie.year} </p>
    </div>`

        Html += movieHtml
    })

    domElement.innerHTML = Html;

}
const root = document.querySelector('#root');
renderHome(myHome, root)