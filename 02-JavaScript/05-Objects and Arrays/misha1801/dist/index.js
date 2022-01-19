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
    addItems: function (section, item) {
        section.push(section[section.length] = item);
    }
};
var section = 'guitars';
var item = { brand: 'ibanez', yearmade: 2002 };
myHome.addItems(section, item);
console.log(myHome);
