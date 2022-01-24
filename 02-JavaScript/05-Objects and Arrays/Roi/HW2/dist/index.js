var myHome = {
    books: [{ name: 'Harry Potter' }, { name: 'Moby Dick' }, { name: 'The Great Gatsby' }, { name: 'Ulysses' },],
    bands: [{ name: 'U2' }, { name: 'Iron Maiden' }, { name: 'The Smiths' }, { name: 'Blind Faith' },],
    movies: [{ name: 'Jaws' }, { name: 'The Godfather' }, { name: 'The Dark Knight' }, { name: "Schindler's List" },],
    addItems: function (obj, title) {
        this.books.push({ name: title });
        return this;
    },
    removeItem: function (obj, title) {
        var index = obj.indexOf(title);
        obj.splice(index);
        return this;
    }
};
// myHome.addItems(myHome.books, `xxx`);
// myHome.removeItem(myHome.bands, `Blind Faith`);
console.dir(myHome);
