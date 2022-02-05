var gucci = {
    items: [
        { name: "Retro tweed dress with velvet trims", price: 3800, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1632265215/674469_ZAH8I_6535_001_100_0000_Light-Retro-tweed-dress-with-velvet-trims.jpg", department: "clothes", gender: "women", type: "dress" },
        { name: "Pleated dress with chevron vintage Web", price: 5980, img: "//media.gucci.com/style/DarkGray_South_0_160_316x316/1634249776/669260_ZAH0J_9782_001_100_0000_Light-Pleated-dress-with-chevron-vintage-Web.jpg", department: "clothes", gender: "women", type: "dress" },
        { name: "The North Face x Gucci pant", price: 950, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1638553515/663766_ZLX45_3475_001_100_0000_Light-The-North-Face-x-Gucci-pant.jpg", department: "clothes", gender: "men", type: "pants" },
        { name: "Gucci Jordaan crocodile loafer", price: 3200, img: "//media.gucci.com/style/DarkGray_South_0_160_470x470/1459942203/406994_EC200_1000_001_100_0000_Light.jpg", department: "clothes", gender: "men", type: "shoes" },
        { name: "Cotton piquet polo with Interlocking G", price: 690, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1634749231/653380_XJDF8_3495_001_100_0000_Light-Cotton-piquet-polo-with-Interlocking-G.jpg", department: "clothes", gender: "men", type: "t-shirt" },
        { name: "Double G flower ring", price: 390, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1522084508/527394_J8474_8517_001_100_0000_Light-Double-G-flower-ring.jpg", department: "jewelry", gender: "women", type: "ring" },
        { name: "Gucci Diana small crocodile tote bag", price: 35000, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1618321510/660195_EZINT_2582_001_067_0000_Light-Gucci-Diana-small-crocodile-tote-bag.jpg", department: "bags", gender: "women", type: "bag" },
        { name: "Grip watch, 38mm", price: 1900, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1567584905/596509_I8600_8740_001_100_0000_Light-Grip-watch-38mm.jpg", department: "watches", gender: "men", type: "watch" },
        { name: "Leather ankle boot with belt", price: 1190, img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1537468210/550036_DKS00_1000_001_100_0000_Light-Leather-ankle-boot-with-belt.jpg", department: "shoes", gender: "women", type: "shoes" }
    ],
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
    },
    filterByItems: function (department, gender, type) {
        return this.items.filter(function (item) { return item.department === department; });
        return this.items.filter(function (item) { return item.gender === gender; });
        return this.items.filter(function (item) { return item.type === type; });
    }
};
function handleUpdate(ev, id) {
    ev.preventDefault();
    var root = document.getElementById("root");
    gucci.renderAllitems(root);
    var itemName = ev.target.elements.itemName.value;
    var NewPrice = ev.target.elements.update.value;
    gucci.updateItems(id, NewPrice, itemName);
    gucci.storeData();
}
function handleShowItems() {
    console.log(gucci.items);
}
function handleShowDropDown(ev) {
    console.log(ev);
    var id = ev.target.id;
    var dropDown = document.getElementById(id + "-dropdown");
    if (ev.type === "mouseleave") {
        // dropDown.classList.replace("show", "hide");
    }
    else if (ev.type === "mouseenter") {
        //all dropdowns class hide
        dropDown.classList.replace("hide", "show");
    }
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
    var root = document.getElementById("root");
    gucci.renderAllitems(root);
    console.log(gucci.items);
    gucci.storeData();
    ev.target.reset();
}
function handleRemoveItems(ev) {
    ev.preventDefault();
    var name = ev.target.elements.remove.value;
    gucci.removeItems(name);
    var root = document.getElementById("root");
    gucci.renderAllitems(root);
    gucci.storeData();
    ev.target.reset();
}
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
function handlePriceAsc(price) {
    gucci.sortByAscending(price);
    var root = document.getElementById("root");
    gucci.renderAllitems(root);
}
function handlePriceDesc(price) {
    gucci.sortByDescending(price);
    var root = document.getElementById("root");
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
// let navBar = document.querySelectorAll('.container__navBar__catergory');
// navBar.forEach(item => {
//   item.addEventListener('mouseover', handleNavMouseover)
// });
// let dropDown = document.querySelector('.container__dropdawn')
// function handleNavMouseover() {
//   dropDown.classList.toggle('visible')
// }
// navBar.forEach(item => {
//   item.addEventListener('mouseleave', handleNavMouseleave)
// })
// function handleNavMouseleave() {
//   dropDown.classList.toggle('hidden')
// }
gucci.getData();
var root = document.getElementById("root");
gucci.renderAllitems(root);
