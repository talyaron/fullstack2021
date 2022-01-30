var myHome = {
    books: ['Dora', 'Pinokio', 'Bible'],
    clothes: ['socks', 'shirt', 'underwear'],
    movies: ['In', 'Out', 'In-side-out'],
    addItems: function (cat, name) {
        this[cat].push(name);
    },
    removeItems: function (cat, name) {
        this[cat] = this[cat].filter(function (item) { return !name.includes(item); });
    }
};
// myHome.addItems('aa','dd')
// myHome.removeItems('aa','dd')
// SUBMIT ITEM
function handleMyHome(e) {
    e.preventDefault();
    var select;
    var newName;
    for (var _i = 0, _a = e.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.id == "select") {
            select = field.value;
        }
        if (field.id == "add") {
            newName = field.value;
        }
    }
    myHome.addItems(select, newName);
    document.getElementById(select).innerHTML +=
        "<div>" + newName + "</div>";
}
// PRINT CARD
for (var i = 0; i < myHome.books.length; i++) {
    document.getElementById('books').innerHTML +=
        "<div>" + myHome.books[i] + "</div>";
}
for (var i = 0; i < myHome.clothes.length; i++) {
    document.getElementById('clothes').innerHTML +=
        "<div>" + myHome.clothes[i] + "</div>";
}
for (var i = 0; i < myHome.movies.length; i++) {
    document.getElementById('movies').innerHTML +=
        "<div>" + myHome.movies[i] + "</div>";
}
console.log(myHome);
