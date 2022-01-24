var tech = document.getElementById("container_Tech");
var newItem;
var container = document.querySelectorAll('[id*="container_"]');
function Item(name, model, description, price, deliveryPrice, category) {
    this.name = name;
    this.model = model;
    this.description = description;
    this.price = price;
    this.deliveryPrice = deliveryPrice;
    this.category = category;
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
        this.items.push(item);
    },
    renderThis: function (array) {
        var html = "";
        array.forEach(function (Item) {
            html = "<div price='" + Item.price + "' id='card' class='" + Item.category + "'>\n                    <h1>" + Item.name + "</h1>\n                    <p class=\"model\">" + Item.model + "</p>\n                    <p class=\"description\">" + Item.description + "</p>\n                    <p class=\"price\">" + (Item.price || "") + "$</p>\n                    <p>" + (Item.deliveryPrice || "") + " Shipping</p>";
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
        if (e.target.value === 'all') {
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
var maxPrice = Math.max.apply(Math, zap.items.map(function (item) {
    return item.price;
}));
// document.getElementById('maxPrice').innerHTML = maxPrice
var minPrice = Math.min.apply(Math, zap.items.map(function (item) {
    return item.price;
}));
function handleAB(ev) {
    ev.preventDefault();
    var a = ev.target.elements.a.valueAsNumber;
    var b = ev.target.elements.b.valueAsNumber;
    if (a < b) {
        return a - b;
    }
    else {
        b - a;
    }
}
// document.getElementById('minPrice').innerHTML = minPrice
// let vals = [{name: `e`, price: 5},{name:'d', price: 4},{name: `i`, price: 9},{name: `b`, price: 2},{name: `a`, price: 2}];
// vals = vals.price.filter(x => x % 2 === 0);
// console.log(vals);
// let filteredZip = zap.items.filter((num, i) => zap.items.indexOf(num) === i)
// console.dir(filteredZip);
