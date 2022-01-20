interface Home {

    books: Array<{
        title: string
        author: string
    }>;

    shoes: Array<{
        brand: string
        price: number
    }>;

    guitars: Array<{
        brand: string
        yearmade: number
    }>;

    addItems(section, item);
    removeItems(section, item);

}


let myHome: Home = {

    books: [
        {
            title: 'The Silent Treatment',
            author: 'Alex Michalids'
        },
        {
            title: 'Last Mikve in Sibir',
            author: 'Eshkol Nevo'
        },
        {
            title: 'Bakery Names Passion',
            author: 'Tomer Kaufman'
        }
    ],


    shoes: [
        {
            brand: 'Adidas',
            price: 350
        },
        {
            brand: 'Reebok',
            price: 250
        },
        {
            brand: 'Timberland',
            price: 700
        },


    ],

    guitars: [

        {
            brand: 'Fender',
            yearmade: 2008
        },
        {
            brand: 'Yamaha',
            yearmade: 2015
        },
    ],

    addItems(ev) {
        ev.preventDefault();
        if(ev.target.name === 'guitar'){
            this.guitars.push(ev.target.value);
        }
        else if(ev.target.name === 'books'){
            this.guitars.push(ev.target.value);
        }
        else if(ev.target.name === 'shoes'){
            this.guitars.push(ev.target.value);
        }
    },
    removeItems(section, item) {
        section.slice(item)
    }

}

function renderHome (obj, rootElement){
    let html: string = '<h1>My Home</h1><h2>Guitars</h2>';
    let movieHTML = '';

    obj.guitars.forEach(item =>{
        movieHTML = `<div class='card'><h2>Brand: ${item.brand} - Year Made: ${item.yearmade}<h2>`
        movieHTML += '</div>';
        html += movieHTML;
    })

    html += `<h2>Books</h2>`;
    obj.books.forEach(item =>{
        let movieHTML = `<h2>Title: ${item.title} - Author: ${item.author}<h2>`
        movieHTML += '</div>';
        html += movieHTML;
    })

    html += `<h2>Shoes</h2>`;
    obj.shoes.forEach(item =>{
        let movieHTML = `<h2>Brand: ${item.brand} - Price: ${item.price}<h2>`
        movieHTML += '</div>';
        html += movieHTML;
    })

    rootElement.innerHTML = html;
}


let root = document.getElementById('root')

renderHome(myHome,root);