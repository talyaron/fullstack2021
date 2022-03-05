var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var myPaintings = {
    listOfPaintings: [
        { nameOfPainting: 'The Waterlily Pond:Green Harmony', artist: "Claude Monet", madeIn: 1899 },
        { nameOfPainting: "Wheat Field with Cypresses", artist: " Vincent van Gogh", madeIn: 1889 }
    ],
    sortByAscending: function (type) {
        var _this = this;
        document.getElementById('ascending').addEventListener("click", function () {
            _this.listOfPaintings.sort(function (a, b) {
                return a[type] - b[type];
            });
            myPaintings.renderListOfPaintings(myPaintings.listOfPaintings);
        });
    },
    sortByDescending: function () {
        var _this = this;
        document.getElementById('descending').addEventListener("click", function () {
            _this.listOfPaintings.sort(function (a, b) {
                return b.madeIn - a.madeIn;
            });
            myPaintings.renderListOfPaintings(myPaintings.listOfPaintings);
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
    },
    renderListOfPaintings: function (array) {
        var html = "";
        array.forEach(function (painting) {
            html += "<div class=\"painting\">\n        <p>Name of painting:" + painting.nameOfPainting + "</p>\n        <p>Artist:" + painting.artist + "</p>\n        <p>Year:" + painting.madeIn + "</p>\n        <button onclick=\"handleDelete('" + painting.id + "')\">DELETE</button>      \n        \n        </div>";
        });
        document.getElementById('root').style.backgroundImage = "url('img/frame.png')";
        document.getElementById('root').style.backgroundSize = "60vw 110vh";
        document.getElementById('root').style.backgroundRepeat = "no-repeat";
        document.getElementById('root').style.backgroundPosition = "center";
        document.getElementById('root').innerHTML = html;
    }
};
// myPaintings.sortByAscending(myPaintings);
// myPaintings.sortByDescending(myPaintings);
//moved them to the bottom so it sort also the added paintings
myPaintings.addPainting("The Mona Lisa", "Leonardo Da Vinci", 1503);
myPaintings.addPainting("Viva la Vida, Watermelons", "Frida Kahlo", 1954);
myPaintings.sortByAscending("madeIn");
myPaintings.sortByDescending(myPaintings);
myPaintings.removePaintingByName("Wheat Field with Cypresses");
//myPaintings.removePaintingById("kyumjh549hdf5s03hab")
//wont work at the moment cause the id is always changing
myPaintings.renderListOfPaintings(myPaintings.listOfPaintings);
console.log(myPaintings);
function handleSubmit(ev) {
    ev.preventDefault();
    var nameOfPainting = ev.target.elements.nameOfPainting.value;
    var artist = ev.target.elements.artist.value;
    var madeIn = ev.target.elements.madeIn.valueAsNumber;
    myPaintings.addPainting(nameOfPainting, artist, madeIn);
    //makes that the items that the user adds goes into the function of addPainting and each inputs value is taken and taken into the adding function
    myPaintings.renderListOfPaintings(myPaintings.listOfPaintings);
    //i do this in order to print the new list that is printed through the render and is taking the new list changed after the addPainting
    ev.target.reset();
}
//i dont understand how by me writing the renderlistpaintings it is updated with the item i erased
function handleDelete(id) {
    myPaintings.removePaintingById(id);
    myPaintings.renderListOfPaintings(myPaintings.listOfPaintings);
}
