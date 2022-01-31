var women = document.querySelector(".title_mouseover");
var popup = document.querySelector(".category__women");
var closePopup = document.querySelector(".popup_close");
women.addEventListener("mouseover", function () {
    popup.style.visibility = "visible";
});
closePopup.addEventListener("click", function () {
    popup.style.visibility = "hidden";
});
var gucciShop = {
    data: [],
    addItem: function (title, type, price) {
        // const id = uid();
        this.data.push({ title: title, price: price, type: type });
    },
    filterMaxPrice: function (price) {
        return this.data.filter(function (item) { return item.price < price; });
    },
    filterByType: function (type) {
        return this.data.filter(function (item) { return item.type === type; });
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
    renderByType: function (type, domElement) {
        var filterd = this.filterByType(type);
        this.render(filterd, domElement);
    },
    renderFilter: function (filterd, domElement) {
        this.render(domElement, filterd);
    },
    render: function (list, domElement) {
        var html = "";
        list.forEach(function (item) {
            html += "<div class=\"item\">\n        <h3> " + item.title + "</h3><p>" + item.type + "</p>\n        <h3>" + item.price + "</h3>\n        </div>";
        });
        domElement.innerHTML = html;
    },
    renderAllData: function (domElement) {
        this.render(this.data, domElement);
    }
};
function handlePriceAscen() {
    gucciShop.sortAscen();
    var root = document.getElementById("root");
    gucciShop.renderAllData(root);
}
function handlePriseDescen() {
    var root = document.getElementById("root");
    gucciShop.sortDescen();
    gucciShop.renderAllData(root);
}
function handleSelect(e) {
    var root = document.getElementById("root");
    var type = e.target.value;
    if (type === "all") {
        gucciShop.renderAllData(root);
    }
    else {
        console.log(type);
        gucciShop.renderByType(type, root);
    }
}
function handleFilter(e) {
    var price = e.target.valueAsNumber;
    var root = document.getElementById("root");
    if (price) {
        // console.log(price);
        var filterd = gucciShop.filterMaxPrice(price);
        // console.log(filterd);
        gucciShop.renderFilter(root, filterd);
    }
    else {
        gucciShop.renderAllData(root);
    }
}
gucciShop.addItem("Gucci Tiger denim shorts with embroidery", "dress", 1800);
gucciShop.addItem("Shiny leather pant", "pants", 3800);
var root = document.getElementById("root");
gucciShop.renderAllData(root);
gucciShop.renderByType("pants", root);
