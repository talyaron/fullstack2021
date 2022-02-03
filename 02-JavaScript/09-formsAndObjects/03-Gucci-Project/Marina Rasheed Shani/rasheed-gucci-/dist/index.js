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
    addItems: function (name, price, img, department, gender, type) {
        var id = uid();
        this.items.push({ name: name, price: price, img: img, department: department, gender: gender, type: type, id: id });
        this.storeData();
    },
    removeItems: function (itemName) {
        var index = this.items.findIndex(function (item) { return item.name === itemName; });
        if (index >= 0) {
            this.items.splice(index, 1);
            this.storeData();
        }
    },
    filterMaxPrice: function (price) {
        return this.items.filter(function (item) { return item.price < price; });
    },
    renderMaxPrice: function (filtered, domElement) {
        this.render(filtered, domElement);
    },
    updateItems: function (id, newPrice, itemName) {
        itemName = this.items.name;
        var index = this.items.findIndex(function (item) { return item.id === id; });
        if (index >= 0) {
            this.items[index].price = newPrice;
            // this.items[index].name = itemName;
            this.storeData();
        }
    },
    render: function (list, domElement) {
        var html = "";
        list.forEach(function (product) {
            html += "<div class=\"items\">\n        <p>" + product.name + "</p>\n        <img class=\"img\" src=\"" + product.img + "\" >\n        <p>" + product.price + "$</p>\n        <input onclick=\"handleAddToCart()\" id=\"addToCart\" type=\"button\" value=\"ADD TO CART\">\n        </div>";
        });
        domElement.innerHTML = html;
    },
    renderAllitems: function (domElement) {
        var items = this.items;
        this.render(items, domElement);
    },
    sortByAscending: function (price) {
        this.items.sort(function (a, b) {
            return a.price - b.price;
        });
    },
    sortByDescending: function (price) {
        this.items.sort(function (a, b) {
            return b.price - a.price;
        });
    }
};
function handleUpdate(ev, id) {
    ev.preventDefault();
    var root = document.getElementById('root');
    gucci.renderAllitems(root);
    var itemName = ev.target.elements.itemName.value;
    var NewPrice = ev.target.elements.update.value;
    gucci.updateItems(id, NewPrice, itemName);
    gucci.storeData();
}
function handleShowItems() {
    console.log(gucci.items);
}
function handleAddItems(ev) {
    ev.preventDefault();
    var name = ev.target.name.value;
    var price = ev.target.price.value;
    var img = ev.target[2].value;
    var department = ev.target[3].value;
    var gender = ev.target[4].value;
    var type = ev.target[5].value;
    var id = uid;
    gucci.addItems(name, price, img, department, gender, type, id);
    var root = document.getElementById('root');
    gucci.renderAllitems(root);
    console.log(gucci.items);
    gucci.storeData();
    ev.target.reset();
}
function handleRemoveItems(ev) {
    ev.preventDefault();
    var name = ev.target.elements.remove.value;
    gucci.removeItems(name);
    var root = document.getElementById('root');
    gucci.renderAllitems(root);
    gucci.storeData();
    ev.target.reset();
}
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
function handlePriceAsc(price) {
    gucci.sortByAscending(price);
    var root = document.getElementById('root');
    gucci.renderAllitems(root);
}
function handlePriceDesc(price) {
    gucci.sortByDescending(price);
    var root = document.getElementById('root');
    gucci.renderAllitems(root);
}
function handleFilterByPrice(ev) {
    ev.preventDefault();
    var price = ev.target.valueAsNumber;
    var root = document.querySelector("#root");
    if (price) {
        var filtered = gucci.filterMaxPrice(price);
        gucci.renderMaxPrice(filtered, root);
    }
    else {
        gucci.renderAllitems(root);
    }
}
var navBar = document.querySelectorAll('.container__navBar__catergory');
navBar.forEach(function (item) {
    item.addEventListener('mouseover', handleNavMouseover);
});
var dropDown = document.querySelector('.container__dropdawn');
function handleNavMouseover() {
    dropDown.classList.toggle('visible');
}
navBar.forEach(function (item) {
    item.addEventListener('mouseleave', handleNavMouseleave);
});
function handleNavMouseleave() {
    dropDown.classList.toggle('hidden');
}
gucci.getData();
var root = document.getElementById('root');
gucci.renderAllitems(root);
