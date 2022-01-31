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
        this.items.push({ name: name, price: price, type: type, department: department, gender: gender });
        this.storeData();
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
gucci.getData();
function handleShowClothes() {
    gucci.getData();
    var root = document.getElementById("root");
    gucci.renderAllitems(root);
}
function handleAddclothes(ev) {
    ev.preventDefault();
    var name = ev.target.name.value;
    var price = ev.target.price.value;
    var department = ev.target.value;
    var gender = ev.target.value;
    var type = ev.target.value;
    var id = uid;
    gucci.addClothes(name, price, department, gender, type, id);
    console.log(gucci.items);
    gucci.storeData();
}
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
