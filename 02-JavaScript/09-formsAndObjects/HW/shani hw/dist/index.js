var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36);
};
var id = uid();
var myPaintings = {
    listOfPaintings: [
        { nameOfPainting: 'The Waterlily Pond: Green Harmony', artist: "Claude Monet", madeIn: 1899, id: id },
        { nameOfPainting: "Wheat Field with Cypresses", artist: " Vincent van Gogh", madeIn: 1889, id: id }
    ],
    sortByAscending: function () {
        this.listOfPaintings.sort(function (a, b) {
            return a.madeIn - b.madeIn;
        });
    },
    sortByDescending: function () {
        this.listOfPaintings.sort(function (a, b) {
            return b.madeIn - a.madeIn;
        });
    },
    addPainting: function (nameOfPainting, artist, madeIn, id) {
        this.listOfPaintings.push({ nameOfPainting: nameOfPainting, artist: artist, madeIn: madeIn, id: id });
    }
};
console.log(myPaintings);
myPaintings.sortByAscending(myPaintings);
myPaintings.sortByDescending(myPaintings);
//moved them to the bottom so it sort also the added paintings
myPaintings.addPainting("The Mona Lisa", "Leonardo Da Vinci", 1503, id);
myPaintings.sortByAscending(myPaintings);
myPaintings.sortByDescending(myPaintings);
