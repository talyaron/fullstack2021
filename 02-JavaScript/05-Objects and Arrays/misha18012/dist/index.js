var myHome = {
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
    addItems: function (ev) {
        ev.preventDefault();
        if (ev.target.name === 'guitar') {
            this.guitars.push(ev.target.value);
        }
        else if (ev.target.name === 'books') {
            this.guitars.push(ev.target.value);
        }
        else if (ev.target.name === 'shoes') {
            this.guitars.push(ev.target.value);
        }
    },
    removeItems: function (section, item) {
        section.splice(item);
    }
};
function renderHome(obj, rootElement) {
    var html = '<h1>My Home</h1><h2>Guitars</h2>';
    var movieHTML = '';
    obj.guitars.forEach(function (item) {
        movieHTML = "<div class='card'><h2>Brand: " + item.brand + " - Year Made: " + item.yearmade + "<h2>";
        movieHTML += '</div>';
        html += movieHTML;
    });
    html += "<h2>Books</h2>";
    obj.books.forEach(function (item) {
        var movieHTML = "<h2>Title: " + item.title + " - Author: " + item.author + "<h2>";
        movieHTML += '</div>';
        html += movieHTML;
    });
    html += "<h2>Shoes</h2>";
    obj.shoes.forEach(function (item) {
        var movieHTML = "<h2>Brand: " + item.brand + " - Price: " + item.price + "<h2>";
        movieHTML += '</div>';
        html += movieHTML;
    });
    rootElement.innerHTML = html;
}
var root = document.getElementById('root');
renderHome(myHome, root);
