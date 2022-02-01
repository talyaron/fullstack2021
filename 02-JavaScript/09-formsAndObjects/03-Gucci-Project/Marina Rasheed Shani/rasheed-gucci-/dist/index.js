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
    addItems: function (name, price, img, department, gender, type, id) {
        console.log(this);
        this.items.push({ name: name, price: price, img: img, department: department, gender: gender, type: type });
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
            html += "<div class=\"items\">\n        <p> item : " + product.name + "</p>\n        <img class=\"img-back\" src=\"" + product.img + "\" >\n        <p> price : " + product.price + "$</p>\n       \n        </div>";
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
function handleShowItems() {
    console.log(gucci.items);
}
gucci.getData();
// function handleShowItems() {
//   gucci.getData();
//   const root = document.getElementById("root");
//   gucci.renderAllitems(root);
// }
function handleAddItems(ev) {
    ev.preventDefault();
    console.dir(ev.target);
    var name = ev.target.name.value;
    var price = ev.target.price.value;
    var img = ev.target[2].value;
    var department = ev.target[3].value;
    var gender = ev.target[4].value;
    var type = ev.target[5].value;
    var id = uid;
    gucci.addItems(name, price, img, department, gender, type, id);
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
