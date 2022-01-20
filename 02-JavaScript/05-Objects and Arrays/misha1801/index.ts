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

    addItems(section, item)

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

    addItems(section, item) {
        section.push(item)
    }

}

let rootHtml = document.getElementById('root');

function submitType(ev){

    let html = '';

    if(ev.value === 'guitars'){
        myHome.guitars.forEach(guitar=>{
            let keyHTML = `<h2>${guitar.brand}: ${guitar.yearmade}</h2>`
            html += keyHTML;
        })
    }
    
    rootHtml.innerHTML = html;
}

const section = myHome.guitars;
let item = { brand: 'Ibanez', yearmade: 2002 }
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


