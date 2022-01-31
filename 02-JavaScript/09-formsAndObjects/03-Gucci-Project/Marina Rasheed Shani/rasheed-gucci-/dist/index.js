var gucci = {
    items: [],
    storeData: function () {
        localStorage.setItem("storeData", JSON.stringify(this.items));
    },
    getData: function () {
        var clothesStorage = JSON.parse(localStorage.getItem("storeData"));
        if (Array.isArray(clothesStorage)) {
            this.items = clothesStorage;
        }
    },
    addClothes: function (name, price, type, department, gender, id) {
        console.log(this);
        this.items.push({ name: name, price: price, type: type, department: department, gender: gender, id: id });
        this.storeData();
    },
    removeItems: function (itemName) {
        var index = this.items.findIndex(function (item) { return item.name === itemName; });
        if (index >= 0) {
            this.items.splice(index, 1);
        }
    },
    render: function (list, domElement) {
        var html = "";
        list.forEach(function (product) {
            html += "<div class='result-card'>\n        <p> item : " + product.name + " , <img src=\"\" id=\"imgDisplay\">  " + product.price + "$</p>\n        \n        </div>";
        });
        domElement.innerHTML = html;
    },
    renderAllitems: function (domElement) {
        var items = this.items;
        this.render(items, domElement);
    }
};
function handleShowClothes() {
    gucci.getData();
    var root = document.getElementById("root");
    gucci.renderAllitems(root);
}
function handleAddclothes(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var name = ev.target.name.value;
    var price = ev.target.price.value;
    var department = ev.target[2].value;
    var gender = ev.target[3].value;
    var type = ev.target[4].value;
    var id = uid;
    gucci.addClothes(name, price, department, gender, type, id);
    console.log(gucci.items);
    ev.target.reset();
    gucci.storeData();
}
function handleRemoveItems(ev) {
    ev.preventDefault();
    var name = ev.target.elements.remove.value;
    gucci.removeItems(name);
    var root = document.getElementById('root');
    gucci.storeData();
    gucci.renderAllitems(root);
    console.log(gucci.items);
    ev.target.reset();
}
function loadImage(event) {
    var image = document.getElementById("imgDisplay");
    image.src = URL.createObjectURL(event.target.files[0]);
}
gucci.getData();
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
