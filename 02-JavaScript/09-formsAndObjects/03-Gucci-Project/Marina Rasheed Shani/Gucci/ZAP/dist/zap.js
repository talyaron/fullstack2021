// popup
var helloGuest = document.querySelector(".guest_mouseover");
var popup = document.querySelector(".popup_wrapper");
var closePopup = document.querySelector(".popup_close");
setTimeout(function popupTimeOut() {
    popup.style.visibility = "visible";
}, 2000);
helloGuest.addEventListener("mouseover", function () {
    popup.style.visibility = "visible";
});
closePopup.addEventListener("click", function () {
    popup.style.visibility = "hidden";
});
// Search input on hover CSS changing
var generalInput = document.querySelector(".search");
generalInput.addEventListener("click", function (e) {
    generalInput.style.backgroundColor = "rgb(58, 63, 64)";
    generalInput.style.color = "white";
});
generalInput.addEventListener("mouseout", function (e) {
    generalInput.style.backgroundColor = "rgb(58, 63, 64)";
    generalInput.style.color = "white";
});
//login popup mouse event
var login = document.querySelector(".login");
login.addEventListener("mouseover", function () {
    login.style.cursor = "pointer";
});
// on COMPUTERS click event
var filteCategoryComputer = document.querySelector(".category");
filteCategoryComputer.addEventListener("click", function () {
    var html = "    <div class=\"computers\">\n        <div class=\"computers_comp1\">\n            <h3>Apple MacBook Air MGN93HB / A Apple</h3>\n            <h4>Prise: 4,590   &star; &bigstar; &bigstar; &bigstar; &bigstar; </h4> \n            <p>Manufacturer: Apple, Screen size: 13.3 inches, Processor type: M1, RAM: 8 GB</p>\n            <p>Screen: 2560 x1600, Touch screen: without, Hard drive: 256 GB, Weight: 1.29 kg</p>\n        </div>\n        <div>\n            <img  style=\"width: 80%;\" class=\"apple\" src=\"https://img.zap.co.il/pics/3/4/3/5/58935343c.gif\" alt=\"\">\n        </div>\n\n    </div>";
    var root = document.getElementById("root");
    root.innerHTML = html;
});
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var ZapSearch = {
    data: [],
    addItem: function (title, type, price) {
        var id = uid();
        this.data.push({ id: id, title: title, type: type, price: price });
    },
    addNewItem: function (title, price) {
        var id = uid();
        this.data.push({ id: id, title: title, price: price });
    },
    filterByType: function (type) {
        return this.data.filter(function (item) { return item.type === type; });
    },
    renderFilter: function (filterd, domElement) {
        this.render(domElement, filterd);
    },
    filterMaxPrice: function (price) {
        return this.data.filter(function (item) { return item.price < price; });
    },
    deleteItem: function (id) {
        this.data = this.data.filter(function (item) { return item.id !== id; });
    },
    deleteItemByName: function (itemName) {
        var index = this.data.findIndex(function (item) { return item.title === itemName; });
        if (index >= 0) {
            this.data.splice(index, 1);
            // this.data.delete[index]
        }
    },
    sortAscen: function () {
        console.log("sortAscen");
        this.data = this.data.sort(function (a, b) {
            return a.price - b.price;
        });
        console.log(this.data);
    },
    sortDescen: function () {
        console.log("sortDescen");
        this.data = this.data.sort(function (a, b) {
            return b.price - a.price;
        });
        console.dir(this);
    },
    render: function (list, domElement) {
        var html = "";
        list.forEach(function (item) {
            html += "<div class=\"item\">\n        <p>You were looking for </p> <h3> " + item.title + "</h3><p>" + item.type + "</p> <p>for</p>\n        <h3>" + item.price + "</h3>\n        <button  style= \" border-radius: 10px;\n        width: 7%;\n        height: 3em;\n        border-color: transparent;\n        font-size: 1em;\n        box-shadow: 1px 2px 6px rgba(102, 95, 107, 0.4);\"  \n        onclick=\"handleDelete('" + item.id + "')\">Delete</button>\n          </div>";
        });
        domElement.innerHTML = html;
    }
};
function handlePriceAscen() {
    ZapSearch.sortAscen();
    var root = document.getElementById("root");
    ZapSearch.renderAllData(root);
}
function handlePriseDescen() {
    var root = document.getElementById("root");
    ZapSearch.sortDescen();
    ZapSearch.renderAllData(root);
}
function handleSelect(e) {
    var root = document.getElementById("root");
    var type = e.target.value;
    if (type === "all") {
        ZapSearch.renderAllData(root);
    }
    else {
        console.log(type);
        ZapSearch.renderByType(type, root);
    }
}
function handleDeleteByName(e) {
    e.preventDefault();
    var title = e.target.elements["delete"].value;
    ZapSearch.deleteItemByName(title);
    var root = document.getElementById("root");
    ZapSearch.renderAllData(root);
}
function handleDelete(id) {
    console.log(id);
    var root = document.getElementById("root");
    ZapSearch.deleteItem(id);
    ZapSearch.renderAllData(root);
}
function handleSubmit(e) {
    e.preventDefault();
    console.dir(e.target);
    var root = document.querySelector("#root");
    var title = e.target.elements.title.value;
    var price = e.target.elements.price.value;
    ZapSearch.addNewItem(title, price);
    ZapSearch.renderAllData(root);
    e.target.reset();
}
function handleFilter(e) {
    var price = e.target.valueAsNumber;
    var root = document.getElementById("root");
    if (price) {
        // console.log(price);
        var filterd = ZapSearch.filterMaxPrice(price);
        // console.log(filterd);
        ZapSearch.renderFilter(root, filterd);
    }
    else {
        ZapSearch.renderAllData(root);
    }
}
ZapSearch.addItem("Apple MacBook Air MGN93HB/A", "computer", 4.567);
ZapSearch.addItem("TV Xiaomi L65M5-5ASP 4K", "electronics", 3.499);
ZapSearch.addItem("Dell Inspiron 3511 IN-RD33-13121", "computer", 3.109);
ZapSearch.addItem("Asus X515EA-BQ950", "computer", 2.449);
ZapSearch.addItem("Apple AirPods Pro True Wireless", "electronics", 1.203);
var root = document.getElementById("root");
ZapSearch.renderAllData(root);
