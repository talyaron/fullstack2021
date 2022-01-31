var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var sushiMenu = {
    dishes: [
        {
            id: "a1",
            name: "Maguro Nigiri",
            price: 70,
            description: "Rice fingers with red tuna tataki with foie gras and a drizzle of teriyaki. 5 pcs",
            category: "firsts"
        },
    ],
    addDish: function (name, price, description, category) {
        var id = uid();
        this.dishes.push({ id: id, name: name, price: price, description: description, category: category });
        this.storeData();
        this.getData();
    },
    removeDish: function (id) {
        this.dishes = this.dishes.filter(function (dish) { return dish.id !== id; });
    },
    updateDish: function (id, newDish) {
        var index = this.dishes.findIndex(function (dish) { return dish.id === id; });
        if (index >= 0) {
            this.dishes[index] = newDish;
        }
    },
    renderDishes: function (list, domElement) {
        var html = "";
        list.forEach(function (item) {
            html += "<div class=\"card\">" + item.name + ", " + item.price + "," + item.category + "</div>";
        });
        domElement.innerHTML = html;
    },
    storeData: function () {
        localStorage.setItem("storeData", JSON.stringify(this.dishes));
    },
    getData: function () {
        var dishes = JSON.parse(localStorage.getItem("storeData"));
        if (dishes && Array.isArray(dishes)) {
            this.dishes = dishes;
        }
    }
};
var root = document.getElementById("root");
sushiMenu.renderDishes(sushiMenu.dishes, root);
function handleAddDish(ev) {
    ev.preventDefault();
    var dishName = ev.target.elements.name.value;
    var dishPrice = ev.target.elements.price.valueAsNumber;
    var dishDesc = ev.target.elements.description.value;
    var dishCategory = document.getElementById("category")
        .value;
    sushiMenu.addDish(dishName, dishPrice, dishDesc, dishCategory);
    var root = document.getElementById("root");
    sushiMenu.renderDishes(sushiMenu.dishes, root);
    ev.target.reset();
}
sushiMenu.getData();
// sushiMenu.renderDishes(sushiMenu.dishes, root);
