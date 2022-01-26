var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var myPaintings = {
    listOfPaintings: [
        { nameOfPainting: 'The Waterlily Pond: Green Harmony', artist: "Claude Monet", madeIn: 1899 },
        { nameOfPainting: "Wheat Field with Cypresses", artist: " Vincent van Gogh", madeIn: 1889 }
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
        var id = uid();
        this.listOfPaintings.push({ nameOfPainting: nameOfPainting, artist: artist, madeIn: madeIn, id: id });
    },
    removePaintingByName: function (nameOfPainting) {
        //const newArray=this.listOfPaintings.filter(painting=>painting.nameOfPainting!==nameOfPainting)   
        //return newArray
        //console.log(newArray)
        //or i use what i did up there without the return to show the list of the new array after stuff were removed.
        //here i did that it will update the original array i made
        this.listOfPaintings = this.listOfPaintings.filter(function (painting) { return painting.nameOfPainting !== nameOfPainting; });
    },
    removePaintingById: function (id) {
        this.listOfPaintings = this.listOfPaintings.filter(function (painting) { return painting.id !== id; });
    }
};
// myPaintings.sortByAscending(myPaintings);
// myPaintings.sortByDescending(myPaintings);
//moved them to the bottom so it sort also the added paintings
myPaintings.addPainting("The Mona Lisa", "Leonardo Da Vinci", 1503);
myPaintings.addPainting("Viva la Vida, Watermelons", "Frida Kahlo", 1954);
myPaintings.sortByAscending(myPaintings);
myPaintings.sortByDescending(myPaintings);
myPaintings.removePaintingByName("Wheat Field with Cypresses");
//myPaintings.removePaintingById("kyumjh549hdf5s03hab")
//wont work at the moment cause the id is always changing
console.log(myPaintings);
