interface myHome {
    Books: Array<string>;
    Movies: Array<string>;
    Cloths: Array<string>;
    addItem: any;
    removeItem: any;
}



const myHome = {
    books: [],
    movies: [],
    cloths: [],

    addItem: function (category:Array<string>, item:string):myHome{
        category.push(item);
        return this;
    },

    removeItem: function (category:Array<string>, item:string):myHome{
        let index = category.indexOf(item)
        category.splice(index);
        return this;
    }

}

myHome.addItem(myHome.books, 'Troubled Blood');
myHome.addItem(myHome.books, 'Orphan X');
console.log(myHome)
// myHome.removeItem(myHome.books, 'Orpahn X')
// console.log(myHome)

























// books: [

//     {
//         name: 'Troubled Blood',
//         numberOfPages: 869,
//         author: 'Robert Galbraith'
//     },

//     {
//         name: 'Orphan X',
//         numberOfPages: 368,
//         author: 'Gregg Hurwitz'
//     }
// ]

//     movies: [

//         {
//             title: 'The Pianist',
//             director: 'Roman Polanski',
//             lenghtMinutes: 142
//         },

//         {
//             title: 'The Shawshank Redemption',
//             director: 'Frank Darabont',
//             lenghtMinutes: 150
//         }
//     ]