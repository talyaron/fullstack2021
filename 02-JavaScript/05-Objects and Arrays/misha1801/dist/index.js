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
        section.push(item);
    }
};
var rootHtml = document.getElementById('root');
function submitType(ev) {
    var html = '';
    if (ev.value === 'guitars') {
        myHome.guitars.forEach(function (guitar) {
            var keyHTML = "<h2>" + guitar.brand + ": " + guitar.yearmade + "</h2>";
            html += keyHTML;
        });
    }
    rootHtml.innerHTML = html;
}
var section = myHome.guitars;
var item = { brand: 'Ibanez', yearmade: 2002 };
myHome.addItems(section, item);
console.log(myHome);
// function renderHome(obj, element) {
//     let html: string = '';
//     obj.forEach(section => {
//         let sectionHTML = `<div class='card'><h2>${section[0]}<h2>`
//         sectionHTML += '</div>';
//         html += sectionHTML;
//     })
// element.innerHTML = html;
// }
// renderHome(myHome, rootHtml);
