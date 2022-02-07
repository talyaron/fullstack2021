var aviator = {
    items: [],
    cartItems: [],
    renderitem: function (domElement, list) {
        var html = '';
        html += "<div class=\"category-wrapper\">";
        list.forEach(function (item) {
            html += "\n                <div class=\"category-wrapper__title\">DOUGLAS</div>\n                <div class=\"category-wrapper__card\">\n                    <div class='category-wrapper__card__img'> <img src=\"" + item.img + "\"></div>\n                    <div class=\"category-wrapper__card__name\" >" + item.name + " </div>\n                    <div class=\"category-wrapper__card__price\">" + item.price + "</div>\n                    \n                    \n                    <button class='add1' onclick=\"handleaddcart(event,'" + item.id + "')\" style=\"cursor: pointer;color:black\">add to cart<i class=\"fab fa-opencart\"></i></button>\n                </div>";
        });
        domElement.innerHTML = html;
    },
    renderitemcart: function (domElement) {
        var html2 = '';
        this.cartItems.forEach(function (item) {
            html2 += "<div class='cart'>\n            <img src=\"" + item.img + "\">\n           \n        \n           <button  onclick='handleDelete(\"" + item.id + "\")' style=\"width:50px ;\"'><i class=\"far fa-trash-alt\"></i> Delete</button>\n            </div>";
        });
        domElement.innerHTML = html2;
    },
    renderCartCount: function () {
        document.querySelector('.header__cart-notification').innerHTML = "" + this.cartItems.length;
    },
    additem: function (newItem) {
        this.cartItems.push(newItem);
    },
    sortitemup: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortitemdown: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
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
    filterItems: function (category) {
        var keys = Object.keys(this.items[0]);
        var filteredItems = [];
        var _loop_1 = function (i) {
            filteredItems = this_1.items.filter(function (item) { return item[keys[i]] == category; });
            if (this_1.items[keys[i]] == category) {
                console.log(filteredItems);
            }
        };
        var this_1 = this;
        for (var i = 3; i < keys.length; i++) {
            _loop_1(i);
        }
        ;
        // console.log(filteredItems);
        this.renderitem(document.getElementById('main'), filteredItems);
    }
};
function handleaddcart(ev, itemToAddId) {
    var itemToAdd = aviator.items.filter(function (item) { return item.id == itemToAddId; })[0];
    aviator.additem(itemToAdd);
    var cart = document.getElementById('cart');
    aviator.renderitemcart(cart);
    var cartIcon = document.querySelector("#cart-icon");
    cartIcon.classList.add("pulse");
    setTimeout(function () { cartIcon.classList.remove("pulse"); }, 1000);
    aviator.renderCartCount();
    setTimeout(function () { cartIcon.classList.remove("pulse"); }, 1000);
    //
}
function handlesortitem(ev) {
    aviator.sortitemup();
    aviator.renderitem(rootitems, aviator.items);
}
function handlesortitemacs(ev) {
    aviator.sortitemdown();
    aviator.renderitem(rootitems, aviator.items);
}
function handleDelete(id) {
    aviator.deleteItem(id);
    aviator.renderitemcart(cart);
}
aviator.getdata();
var rootitems = document.getElementById('main');
aviator.renderitem(rootitems, aviator.items);
var cart = document.getElementById('cart');
aviator.renderitemcart(cart);
var filters = document.querySelectorAll('.filter');
filters.forEach(function (item) {
    item.addEventListener('click', handelfilters);
});
function handelfilters(ev) {
    console.log(ev.target.innerText);
    aviator.filterItems(ev.target.innerText);
}
// console.dir(ev.target.innerText)
