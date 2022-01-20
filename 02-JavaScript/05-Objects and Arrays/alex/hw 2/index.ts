interface myStuff {
  books: Array<string>;
  clothes: Array<string>;
  movies: Array<string>;
  addItems?: any;
  removeItems?: any;
}

const myHome: myStuff = {
  books: ["darkness", " apocalypse", "darling days"],
  clothes: ["shirt", "pants", "leggings"],
  movies: ["where the wild things are", "anger", "soundless"],
  addItems: function (book, cloth, mov) {
    this.books.push(book);
    this.clothes.push(cloth);
    this.movies.push(mov);
    return this;
  },

  removeItems: function (book, cloth, mov) {
    this.books.splice(book);
    this.clothes.splice(cloth);
    this.movies.splice(mov);
    return this;
  },


};



let x=document.getElementById('root');
function goo () {
x.innerHTML = `<h2>
<div>${myHome.books}</div>
<div>${myHome.clothes}</div>
<div>${myHome.movies}</div>
</h2>`

}

goo()
console.log(myHome.addItems('born', 'away', 'today'));
// console.log(myHome.removeItems([0],[1],[2]));