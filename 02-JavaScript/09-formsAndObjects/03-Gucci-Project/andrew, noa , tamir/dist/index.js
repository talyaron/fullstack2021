var aviator = {
    items: [],
    filteritems: [],
    renderitem: function (domElement) {
        var html = '';
        html += "<div class=\"category-wrapper\">";
        this.items.forEach(function (item) {
            html += "\n                <div class=\"category-wrapper__title\">DOUGLAS</div>\n                <div class=\"category-wrapper__card\">\n                    <div class='category-wrapper__card__img'> <img src=\"" + item.img + "\"></div>\n                    <div class=\"category-wrapper__card__name\" >" + item.name + " </div>\n                    <div class=\"category-wrapper__card__price\">" + item.price + "</div>\n                    \n                    \n                    <button class='add1' onclick=\"handleaddcart(event,'" + item.id + "')\" style=\"cursor: pointer;color:black\">add to cart<i class=\"fab fa-opencart\"></i></button>\n                </div>";
        });
        domElement.innerHTML = html;
    },
    renderitemcart: function (domElement) {
        var html2 = '';
        this.filteritems.forEach(function (item) {
            html2 += "<div class='cart'>\n            <img src=\"" + item.img + "\">\n           \n        \n           <button  onclick='handleDelete(\"" + item.id + "\")' style=\"width:50px ;\"'><i class=\"far fa-trash-alt\"></i> Delete</button>\n            </div>";
        });
        domElement.innerHTML = html2;
    },
    renderCartCount: function () {
        document.querySelector('.header__cart-notification').innerHTML = "" + this.filteritems.length;
    },
    additem: function (newItem) {
        this.filteritems.push(newItem);
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
        this.filteritems = this.filteritems.filter(function (item) { return item.id !== id; });
        this.renderitemcart(cart);
        console.log(this.filteritems);
        this.cartItems--;
        document.querySelector('.header__cart-notification').innerHTML = "" + this.cartItems;
        this.renderCartCount();
    }
};
function handleaddcart(ev, itemToAddId) {
    var itemToAdd = aviator.items.filter(function (item) { return item.id == itemToAddId; })[0];
    console.log(itemToAdd);
    aviator.additem(itemToAdd);
    var cart = document.getElementById('cart');
    aviator.renderitemcart(cart);
    var cartIcon = document.querySelector("#cart-icon");
    cartIcon.classList.add("pulse");
    setTimeout(function () { cartIcon.classList.remove("pulse"); }, 1000);
    aviator.renderCartCount();
    //
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
var rootitems = document.getElementById('main');
aviator.renderitem(rootitems);
var cart = document.getElementById('cart');
aviator.renderitemcart(cart);
var filters = document.querySelectorAll('.per');
filters.forEach(function (item) {
    item.addEventListener('click', handelfilters);
});
function handelfilters() {
}
