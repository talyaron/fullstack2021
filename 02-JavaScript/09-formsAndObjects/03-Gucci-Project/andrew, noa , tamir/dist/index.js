var aviator = {
    items: [],
    cartItems: [],
    itemsToRender: [],
    currency: "USD",
    renderitem: function (domElement) {
        var html = '';
        html += "<div class=\"category-wrapper\">\n                 <div class=\"category-wrapper__title\">All Watches</div>";
        this.itemsToRender.forEach(function (item) {
            html += "\n                <div class=\"category-wrapper__card\">\n                    <div class='category-wrapper__card__img'> <img src=\"" + item.img + "\"></div>\n                    <div class=\"category-wrapper__card__name\" >" + item.name + " </div>\n                    <div class=\"category-wrapper__card__price\">" + item.price + "</div>\n                    \n                    \n                    <button class='add1' onclick=\"handleaddcart(event,'" + item.id + "')\" style=\"cursor: pointer;color:black\">add to cart<i class=\"fab fa-opencart\"></i></button>\n                </div>";
        });
        domElement.innerHTML = html;
        setCurrency();
    },
    renderitemcart: function (domElement) {
        var html2 = '';
        this.cartItems.forEach(function (item) {
            html2 += "<div class='cart__card'>\n            <img src=\"" + item.img + "\">\n            <p class=\"cart__card--name\">" + item.name + "</p>\n            <p class=\"cart__card--price\">" + item.price + "</p>\n            <button id=\"add_one\" onclick='handleQuantity(event, \"" + item.id + "\")'>\u25B2</button>\n            <p class=\"cart__card--quantity\">" + item.quantity + "</p>\n            <button id=\"remove_one\" onclick='handleQuantity(event, \"" + item.id + "\")'>\u25BC</button>\n           \n        \n           <button  onclick='handleDelete(\"" + item.id + "\")' style=\"width:50px ;\"'><i class=\"far fa-trash-alt\"></i> Delete</button>\n            </div>";
        });
        domElement.innerHTML = html2;
        setCurrency();
    },
    renderCartCount: function () {
        document.querySelector('.header__cart-notification').innerHTML = "" + this.cartItems.length;
    },
    additem: function (newItem) {
        var isAdded = false;
        if (!newItem.quantity)
            newItem.quantity = 1;
        this.cartItems.forEach(function (item) {
            if (item.id == newItem.id) {
                item.quantity += 1;
                console.log(item.quantity);
                isAdded = true;
                return;
            }
        });
        if (isAdded)
            return;
        this.cartItems.push(newItem);
    },
    sortitemup: function () {
        this.itemsToRender.sort(function (a, b) { return a.price - b.price; });
    },
    sortitemdown: function () {
        this.itemsToRender.sort(function (a, b) { return b.price - a.price; });
    },
    getdata: function () {
        this.items = JSON.parse(localStorage.getItem('storeData'));
    },
    deleteItem: function (id) {
        this.cartItems = this.cartItems.filter(function (item) { return item.id !== id; });
        this.renderitemcart(cart);
        console.log(this.cartItems);
        this.renderCartCount();
    },
    addOneItem: function (id) {
        var index = this.cartItems.findIndex(function (item) { return item.id == id; });
        this.cartItems[index].quantity++;
    },
    removeOneItem: function (id) {
        var index = this.cartItems.findIndex(function (item) { return item.id == id; });
        if (this.cartItems[index].quantity <= 1)
            this.deleteItem(id);
        else
            this.cartItems[index].quantity--;
    },
    filterItems: function (category) {
        var keys = Object.keys(this.items[0]);
        var filteredItems = [];
        var _loop_1 = function (i) {
            filteredItems = this_1.items.filter(function (item) { return item[keys[i]] == category; });
            if (filteredItems.length != 0)
                return "break";
        };
        var this_1 = this;
        for (var i = 3; i < keys.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
        ;
        aviator.itemsToRender = filteredItems;
        this.renderitem(document.getElementById('main'));
        document.querySelector(".category-wrapper__title").innerHTML = category;
    }
};
function handleaddcart(ev, itemToAddId) {
    var itemToAdd = aviator.items.filter(function (item) { return item.id == itemToAddId; })[0];
    aviator.additem(itemToAdd);
    var cart = document.querySelector('.cart');
    aviator.renderitemcart(cart);
    var cartIcon = document.querySelector("#cart-icon");
    cartIcon.classList.add("pulse");
    setTimeout(function () { cartIcon.classList.remove("pulse"); }, 1000);
    aviator.renderCartCount();
    setTimeout(function () { cartIcon.classList.remove("pulse"); }, 1000);
}
function handlesortitem(ev) {
    aviator.sortitemup();
    aviator.renderitem(rootitems);
}
function handlesortitemacs(ev) {
    aviator.sortitemdown();
    aviator.renderitem(rootitems);
}
function handleDelete(id) {
    aviator.deleteItem(id);
    aviator.renderitemcart(cart);
}
aviator.getdata();
aviator.itemsToRender = aviator.items;
var rootitems = document.getElementById('main');
aviator.renderitem(rootitems);
var cart = document.querySelector('.cart');
aviator.renderitemcart(cart);
var filters = document.querySelectorAll('.filter');
filters.forEach(function (item) {
    item.addEventListener('click', handelfilters);
});
function handelfilters(ev) {
    console.log(ev.target.innerText);
    aviator.filterItems(ev.target.innerText);
}
document.querySelector('.filter-bar__item').addEventListener('click', function () {
    aviator.itemsToRender = aviator.items;
    aviator.renderitem(document.getElementById('main'));
});
//////////////// from index2 ///////////////////////////////////////////////////////////////////////////
var filterBar = document.querySelectorAll('.drop');
filterBar.forEach(function (item) {
    item.addEventListener('click', handleNavClick);
});
var filterDropBar = document.querySelector('.filter-dropbar');
function handleNavClick() {
    filterDropBar.classList.toggle("visible");
    console.log('click');
}
var currencyButton = document.querySelector('#currency-button');
var currencySelector = document.querySelector('.currency-selector');
var currencyOption = document.querySelectorAll('.currency');
currencyButton.addEventListener('click', handleCurrencySelectorClick);
function handleCurrencySelectorClick() {
    currencySelector.classList.toggle("visible");
}
currencyOption.forEach(function (currency) {
    currency.addEventListener('click', handleCurrencyOptionClick);
});
function setCurrency() {
    switch (aviator.currency) {
        case "USD":
            swichToUsd();
            break;
        case "EUR":
            swichToEur();
            break;
        case "GBP":
            swichToGbp();
            break;
    }
}
function swichToUsd() {
    var prices = document.querySelectorAll(".category-wrapper__card__price");
    var cartPrices = document.querySelectorAll(".cart__card--price");
    prices.forEach(function (price) {
        price.classList.add("USD");
        price.classList.remove("EUR", "GBP");
    });
    cartPrices.forEach(function (price) {
        price.classList.add("USD");
        price.classList.remove("EUR", "GBP");
    });
}
;
function swichToEur() {
    var prices = document.querySelectorAll(".category-wrapper__card__price");
    var cartPrices = document.querySelectorAll(".cart__card--price");
    prices.forEach(function (price) {
        price.classList.add("EUR");
        price.classList.remove("USD", "GBP");
    });
    cartPrices.forEach(function (price) {
        price.classList.add("EUR");
        price.classList.remove("USD", "GBP");
    });
}
;
function swichToGbp() {
    var prices = document.querySelectorAll(".category-wrapper__card__price");
    var cartPrices = document.querySelectorAll(".cart__card--price");
    prices.forEach(function (price) {
        price.classList.add("GBP");
        price.classList.remove("EUR", "USD");
    });
    cartPrices.forEach(function (price) {
        price.classList.add("GBP");
        price.classList.remove("EUR", "USD");
    });
}
;
function handleCurrencyOptionClick(ev) {
    var id = ev.target.id;
    console.log(id);
    currencyButton.innerHTML = "ISRAEL (" + id + ")";
    switch (id) {
        case "USD":
            aviator.currency = "USD";
            break;
        case "EUR":
            aviator.currency = "EUR";
            break;
        case "GBP":
            aviator.currency = "GBP";
            break;
    }
    setCurrency();
}
document.querySelectorAll(".category-wrapper__card__price").forEach(function (price) {
    price.classList.add("USD");
});
document.querySelectorAll(".cart__card--price").forEach(function (price) {
    price.classList.add("USD");
});
var cartIcon = document.querySelector("#cart-icon");
cartIcon.addEventListener('click', handleCartClick);
function handleCartClick() {
    var cart = document.querySelector(".wow");
    cart.classList.toggle("visible");
    console.log(cart.classList);
}
function handleQuantity(ev, id) {
    switch (ev.target.id) {
        case "add_one":
            aviator.addOneItem(id);
            break;
        case "remove_one":
            aviator.removeOneItem(id);
            break;
    }
    aviator.renderitemcart(cart);
}
