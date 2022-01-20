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
  addItems(book, cloth, mov) {
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

myHome.addItems ('born','away','today')
// myHome.removeItems([1,0],[1],[2]);


let x=document.getElementById('root');
function printDom () {
x.innerHTML = `<h2>
<div>${myHome.books}</div>
<div>${myHome.clothes}</div>
<div>${myHome.movies}</div>
</h2>`

}

printDom()


console.log(myHome.addItems('born', 'away', 'today'));
// console.log(myHome.removeItems([0],[1],[2]));