// 1) create an object by the name myHome with three arrays: books, clothes, and movies.
var myHome = {
    books: ['234', '2315', '1235'],
    clothes: [],
    movies: [],
    // //  create in the object methods for adding items to the arrays. remove an item from an array, by name of the item.
    addone: function () {
        myHome.books.push('sd', 'dsg');
        return this;
    },
    removone: function () {
        this.books.splice(4);
        return this;
    }
};
console.log(myHome.addone());
console.log(myHome.removone());
// function rendermyhome(classobj: Obj) {
//     let html: string = '';
//     classobj.books.forEach(book=>{
//         const bookhtml=`<div class ='card'>`
//         `<h2>${book}<h2>`;
//     })
// }
// console.log(rendermyhome(myHome))
