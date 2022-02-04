var myHome = {
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
    }
};
// myHome.addItems('born', 'away', 'today')
// myHome.removeItems([1, 0], [1], [2]);
var x = document.getElementById('root');
// function printDom() {
//   x.innerHTML = `<h2>
// <div>${myHome.books}</div>
// <div>${myHome.clothes}</div>
// <div>${myHome.movies}</div>
// </h2>`
// }
// printDom()
//.תנסה להשקיע קצת יותר בהדפסה לדומ פעם הבאה, חשוב גם שההגשות יראו אסטטיות
//היה ניתן לעשות לולאה 
//FOREACH
x.innerHTML = "<h2> \n<div>" + myHome.books + "</div>\n<div>" + myHome.clothes + "</div>\n<div>" + myHome.movies + "</div>\n</h2>";
// console.log(myHome.addItems('born', 'away', 'today'));
console.log(myHome.removeItems([0], [1], [2]));
/*
!!!!!COMMENT!!!!!!!
אתה לא חייב להוסיף את
INNERHTML
לתוך פונקציה.
(printDom())
אם תכתוב:

 x.innerHTML = `<h2>
<div>${myHome.books}</div>
<div>${myHome.clothes}</div>
<div>${myHome.movies}</div>
</h2>`

בלי פונקציה, זה יעבוד אוטומטי
*/ 
