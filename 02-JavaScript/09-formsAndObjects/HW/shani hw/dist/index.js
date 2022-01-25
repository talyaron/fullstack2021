var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
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
    addPainting: function (nameOfPainting, artist, madeIn) {
        this.listOfPaintings.push({ nameOfPainting: nameOfPainting, artist: artist, madeIn: madeIn, id: id });
    },
    removePainting: function (nameOfPainting) {
        //   const newArray=this.listOfPaintings.filter(painting=>painting.nameOfPainting!==nameOfPainting)   
        //     //return newArray
        //     console.log(newArray)
        //or i use what i did up there without the return to show the list of the new array after stuff were removed
        this.listOfPaintings = this.listOfPaintings.filter(function (painting) { return painting.nameOfPainting !== nameOfPainting; });
    }
};
// myPaintings.sortByAscending(myPaintings);
// myPaintings.sortByDescending(myPaintings);
//moved them to the bottom so it sort also the added paintings
myPaintings.addPainting("The Mona Lisa", "Leonardo Da Vinci", 1503, id);
myPaintings.addPainting("Viva la Vida, Watermelons", "Frida Kahlo", 1954, id);
myPaintings.sortByAscending(myPaintings);
myPaintings.sortByDescending(myPaintings);
myPaintings.removePainting("Wheat Field with Cypresses");
console.log(myPaintings);
