var zapAfterDelete;
var tech = document.getElementById("container_Tech");
var newItem;
var container = document.querySelectorAll('[id*="container_"]');
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
function Item(name, model, description, price, deliveryPrice, category, id) {
    this.name = name;
    this.model = model;
    this.description = description;
    this.price = price;
    this.deliveryPrice = deliveryPrice;
    this.category = category;
    this.id = uid();
}
var zap = {
    items: [
        new Item("Bestand", "Gray", "", 3, "Free", "Books"),
        new Item("Bestand Laptop", "Gray", "", 28, "Free", "Tech"),
        new Item("Bestand Laptop", "Gray", "", 23, "Free", "Tech"),
        new Item("Among US", "Nintendo switch", "Impostor Edition", 49.99, "Free", "Games"),
        new Item("Bestand Laptop", "Gray", "", 49.99, "Free", "Books"),
        new Item("Sony PlayStation 5", "White", "standard", 659, "Free", "Tech"),
        new Item("Nintendo switch console ", "Red/Black", "standard", 349.99, "Free", "Tech"),
        new Item("Black Card Revoked", "Original flavor", "Original", 14.49, "+10", "Games"),
    ],
    addNewItem: function (item) {
        var id = uid();
        this.items.push(id, item);
    },
    deleteItem: function (id) {
        var zapAfterDelete = this.items;
        this.items = this.items.filter(function (item) { return item.id !== id; });
        console.dir(zapAfterDelete);
        zap.clear();
        this.renderThis(zapAfterDelete);
    },
    renderThis: function (array) {
        var html = "";
        array.forEach(function (Item) {
            html = "<div price='" + Item.price + "' id='card' class='" + Item.category + "'>\n      <i class=\"fa fa-times\" onclick=\"handleDeleteItem('" + Item.id + "')\"></i>\n                    <h1 contenteditable=\"true\">" + Item.name + "</h1>\n                    <p class=\"model\">" + Item.model + "</p>\n                    <p class=\"description\">" + Item.description + "</p>\n                    <p class=\"price\">" + (Item.price || "") + "$</p>\n                    <p>" + (Item.deliveryPrice || "") + " Shipping</p>";
            if (Item.category === "Tech") {
                document.getElementById("container_Tech").innerHTML += html;
            }
            else if (Item.category === "Books") {
                document.getElementById("container_Books").innerHTML += html;
            }
            else if (Item.category === "Games") {
                document.getElementById("container_Games").innerHTML += html;
            }
            else {
                document.getElementById("container_---").innerHTML += html;
            }
        });
    },
    clear: function () {
        container.forEach(function (field) {
            field.innerHTML = "";
        });
    },
    ascNow: function () {
        zap.clear();
        zap.items.sort(asc);
        zap.renderThis(this.items);
        console.log(zap);
    },
    descNow: function () {
        zap.clear();
        zap.items.sort(desc);
        zap.renderThis(this.items);
        console.log(zap);
    },
    reset: function () {
        zap.clear();
        zap.renderThis(this.items);
    },
    maxFiltered: function (e) {
        var ZapItemsFiltered = this.items;
        if (e.value == "") {
            this.clear();
            this.renderThis(this.items);
            return;
        }
        else {
            ZapItemsFiltered = this.items.filter(function (item) { return item.price <= e.value; });
            zap.clear();
            this.renderThis(ZapItemsFiltered);
        }
        console.log(ZapItemsFiltered);
        console.log(this.items);
    },
    minFiltered: function (e) {
        var ZapItemsFiltered = this.items;
        if (e.value == "") {
            this.clear();
            this.renderThis(this.items);
            return;
        }
        else {
            ZapItemsFiltered = this.items.filter(function (item) { return item.price >= e.value; });
            zap.clear();
            this.renderThis(ZapItemsFiltered);
        }
    },
    categoryFiltered: function (e) {
        if (e.target.value === "all") {
            this.clear();
            this.renderThis(this.items);
            return;
        }
        else {
            var zapItemsFiltered = this.items;
            console.dir(e.target);
            zapItemsFiltered = this.items.filter(function (item) { return item.category === e.target.value; });
            zap.clear();
            this.renderThis(zapItemsFiltered);
        }
    }
};
function handleSubmit(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    newItem = new Item(ev.target.elements.name.value, ev.target.elements.model.value, ev.target.elements.description.value, ev.target.elements.price.valueAsNumber, ev.target.elements.deliveryPrice.value, ev.target.elements.category.value);
    ev.target.reset();
    zap.addNewItem(newItem);
    zap.clear();
    zap.renderThis(zap.items);
    console.log(zap);
}
zap.renderThis(zap.items);
function asc(a, b) {
    return a.price - b.price;
}
function desc(a, b) {
    return b.price - a.price;
}
function reset(a, b) {
    return a.addDate - b.addDate;
}
var min = document.getElementById("min");
function handleDeleteItem(id) {
    zap.deleteItem(id);
}
var maxPrice = Math.max.apply(Math, zap.items.map(function (item) {
    return item.price;
}));
// document.getElementById('maxPrice').innerHTML = maxPrice
var minPrice = Math.min.apply(Math, zap.items.map(function (item) {
    return item.price;
}));
console.log(maxPrice);
console.log(minPrice);
function handleAB(ev) {
    ev.preventDefault();
    var a = ev.target.elements.a.valueAsNumber;
    var b = ev.target.elements.b.valueAsNumber;
    var dif = 0;
    ev.target.reset();
    if (a > b) {
        dif = a - b;
        console.log("num1 = " + a + ", num2 = " + b + " and their diffrence is: " + dif);
        if (dif < a && dif < b) {
            console.log("These two are very close!");
        }
        else {
            return;
        }
    }
    else if (a < b) {
        dif = b - a;
        console.log("num1 = " + a + ", num2 = " + b + ", and their diffrence is: " + dif);
        if (dif < a && dif < b) {
            console.log("These two are very close!");
        }
        else {
            return;
        }
    }
    else {
        console.log(a + " & " + b + " are even.");
    }
}
