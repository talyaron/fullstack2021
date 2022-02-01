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
    addItems: function (name, price, department, gender, type, id) {
        console.log(this);
        this.items.push({ name: name, price: price, department: department, gender: gender, type: type });
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
            html += "<div class='result-card'>\n        <p> item : " + product.name + " , price :  " + product.price + "$</p>\n        </div>";
        });
        domElement.innerHTML = html;
    },
    renderAllitems: function (domElement) {
        var items = this.items;
        this.render(items, domElement);
    }
};
function handleShowItems() {
    console.log(gucci.items);
}
gucci.getData();
function handleShowClothes() {
    gucci.getData();
    var root = document.getElementById("root");
    gucci.renderAllitems(root);
}
function handleAddItems(ev) {
    ev.preventDefault();
    console.dir(ev.target[4].value);
    var name = ev.target.name.value;
    var price = ev.target.price.value;
    var department = ev.target[2].value;
    var gender = ev.target[3].value;
    var type = ev.target[4].value;
    var id = uid;
    gucci.addItems(name, price, department, gender, type, id);
    console.log(gucci.items);
    gucci.storeData();
}
function handleRemoveItems(ev) {
    ev.preventDefault();
    var name = ev.target.elements.remove.value;
    gucci.removeItems(name);
    var root = document.getElementById('root');
    gucci.renderAllitems(root);
    gucci.storeData();
}
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
