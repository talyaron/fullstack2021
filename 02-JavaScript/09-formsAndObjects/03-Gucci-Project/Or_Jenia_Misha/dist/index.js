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
    renderDishesStore: function (list, domElement) {
        var html = "";
        list.forEach(function (item) {
            html += "<div class=\"dishes\"> \n      \n      <div class = \"dishes__title\"> \n         <h3 class =\"dishes__title__name\">" + item.name + "</h3> \n         <p class =\"dishes__title__price\">" + item.price + "</p>\n      </div>\n         <p class =\"dishes__desc\">" + item.description + "</p>\n      </div>";
        });
        domElement.innerHTML = html;
    },
    renderDishesERP: function (list, domElement) {
        var html = "<form onsubmit=\"handleDeleteDish(event)\"> <input type=\"submit\" value=\"delete\"></input>";
        list.forEach(function (item) {
            html += "<div class=\"dishesERP\"> \n        <input type=\"checkbox\"></input>\n         <h3 class =\"dishesERP__title__name\">" + item.name + "</h3> \n         <p class =\"dishesERP__desc\">" + item.description + "</p>\n         <p class =\"dishesERP__title__price\">" + item.price + "</p>\n         \n      </div>";
        });
        html += "</form>";
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
renderSushiMenu();
function renderSushiMenu() {
    var rootStore = document.getElementById("rootStore");
    var rootERP = document.getElementById("rootERP");
    if (rootStore) {
        sushiMenu.renderDishesStore(sushiMenu.dishes, rootStore);
    }
    if (rootERP) {
        sushiMenu.renderDishesERP(sushiMenu.dishes, rootERP);
    }
}
function handleAddDish(ev) {
    ev.preventDefault();
    var dishName = ev.target.elements.name.value;
    var dishPrice = ev.target.elements.price.valueAsNumber;
    var dishDesc = ev.target.elements.description.value;
    var dishCategory = document.getElementById("category")
        .value;
    sushiMenu.addDish(dishName, dishPrice, dishDesc, dishCategory);
    renderSushiMenu();
    ev.target.reset();
}
function handleDeleteDish(ev) {
    ev.preventDefault();
    console.log(ev);
    for (var i = 0; i < ev.target.length; i++) {
        console.dir(ev.target[i]);
    }
}
sushiMenu.getData();
// sushiMenu.renderDishesStore(sushiMenu.dishes, root);
// ---- CSS MANIPULATION --- //
function navSlide() {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".navtags");
    if (burger && nav) {
        burger.addEventListener("click", function () {
            nav.classList.toggle("navtags-active");
            burger.classList.toggle("burger-active");
        });
    }
}
navSlide();
