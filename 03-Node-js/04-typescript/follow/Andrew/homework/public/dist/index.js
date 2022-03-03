var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        var total = 0;
        this.cartItems.forEach(function (item) {
            html2 += "<div class='cart__card'>\n            <img src=\"" + item.img + "\">\n            <p class=\"cart__card--name\">" + item.name + "</p>\n            <p class=\"cart__card--price\">" + item.price + "</p>\n            <button id=\"add_one\" onclick='handleQuantity(event, \"" + item.id + "\")'>\u25B2</button>\n            <p class=\"cart__card--quantity\">" + item.quantity + "</p>\n            <button id=\"remove_one\" onclick='handleQuantity(event, \"" + item.id + "\")'>\u25BC</button>\n           \n        \n           <button  onclick='handleDelete(\"" + item.id + "\")' style=\"width:50px ;\"'><i class=\"far fa-trash-alt\"></i> Delete</button>\n            </div>";
            total += (item.price * item.quantity);
        });
        domElement.innerHTML = html2;
        document.querySelector("#total").innerHTML = "" + total;
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
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios.get('/getItems')];
                    case 1:
                        data = (_a.sent()).data;
                        setTimeout(function () { console.log("1s passed"); }, 1000);
                        this.items = data;
                        this.renderitem(document.getElementById('main'));
                        return [2 /*return*/];
                }
            });
        });
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
function handleSearch(ev) {
    var searchTerm = ev.target.value;
    var regEx = new RegExp(searchTerm, "i");
    aviator.itemsToRender = [];
    aviator.items.forEach(function (item) {
        if (regEx.test(item.name)) {
            aviator.itemsToRender.push(item);
        }
    });
    aviator.renderitem(document.getElementById('main'));
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
    document.querySelector("#total").classList.add("USD");
    document.querySelector("#total").classList.remove("EUR", "GBP");
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
    document.querySelector("#total").classList.add("EUR");
    document.querySelector("#total").classList.remove("USD", "GBP");
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
    document.querySelector("#total").classList.add("GBP");
    document.querySelector("#total").classList.remove("EUR", "USD");
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
function handleRotate() {
    document.querySelector(".carousel").classList.toggle("rotate");
}
aviator.renderitem(document.getElementById('main'));
