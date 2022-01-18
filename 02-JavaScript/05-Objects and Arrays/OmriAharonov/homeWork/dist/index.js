var myHome = {
    books: [],
    movies: [],
    cloths: [],
    addItem: function (category, item) {
        category.push(item);
        return this;
    },
    removeItem: function (category, item) {
        var index = category.indexOf(item);
        category.splice(index);
        return this;
    }
};
myHome.addItem(myHome.books, 'Troubled Blood');
myHome.addItem(myHome.books, 'Orphan X');
console.log(myHome);
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
