var aviator = {
    items: [{ name: 'DOUGLAS DAY 41', price: 45, img: "https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.278.4.webp" }, { name: 'DOUGLAS DAY-DATE 41', price: 55, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.276.4.webp' },
        { name: 'DOUGLAS', price: 35, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-dc-3/AVIATOR-WATCH--DOUGLAS-DC-3--V.3.32.2.237.4.webp' },
        { name: 'tamir', price: 57, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.2.277.4.webp' },
        { name: 'avi', price: 140, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.2.280.4.webp' },
        { name: 'nir', price: 60, img: 'https://aviatorwatch.swiss/assets/catalog/douglas-day-date-41/AVIATOR-WATCH--DOUGLAS-DAY-DATE-41--V.3.35.0.274.4.webp' }],
    filteritems: [],
    renderitem: function (domElement) {
        var html = '';
        html += "<div class=\"category-wrapper\">";
        this.items.forEach(function (item) {
            html += "\n                <div class=\"category-wrapper__title\">DOUGLAS</div>\n                <div class=\"category-wrapper__card\">\n                    <div class='category-wrapper__card__img'> <img src=\"" + item.img + "\"></div>\n                    <div class=\"category-wrapper__card__name\" >" + item.name + " </div>\n                    <div class=\"category-wrapper__card__price\">" + item.price + "</div>\n                    <div class='add' onclick=\"handleaddcart(event)\"></div>\n                    <button class='add1' onclick=\"handleaddcart(event)\" style=\"cursor: pointer;color:black\">add to cart<i class=\"fab fa-opencart\"></i></button>\n                </div>";
        });
        html += "</div>";
        domElement.innerHTML = html;
    },
    // <i class="fab fa-opencart"></i>
    renderitemcart: function (domElement) {
        var html2 = '';
        this.filteritems.forEach(function (item) {
            html2 += "<div class='cart'>\n           \n           " + item.img + "\n           <button onclick='handleDalete(event)'><i class=\"far fa-trash-alt\"></i></button>\n            </div>";
        });
        domElement.innerHTML = html2;
    },
    additem: function (newItem) {
        this.filteritems.push(newItem);
    },
    sortitemup: function () {
        this.items.sort(function (a, b) { return a.price - b.price; });
    },
    sortitemdown: function () {
        this.items.sort(function (a, b) { return b.price - a.price; });
    }
};
var cartItems = 0;
function handleaddcart(ev) {
    var img = (ev.path[1].innerHTML);
    var name = (ev.target.parentElement.firstElementChild.textContent);
    var price = (ev.target.previousElementSibling.textContent);
    aviator.additem({ img: img, name: name, price: price });
    var cart = document.getElementById('cart');
    aviator.renderitemcart(cart);
    //andrew's addition
    var cartIcon = document.querySelector("#cart-icon");
    cartIcon.classList.add("pulse");
    setTimeout(function () { cartIcon.classList.remove("pulse"); }, 1000);
    var cartNumber = document.querySelector('.header__cart-notification');
    cartItems++;
    cartNumber.innerHTML = "" + cartItems;
    //
}
function handlesortitem(ev) {
    ev.preventDefault();
    aviator.sortitemup();
    aviator.renderitem(rootitems);
}
function handlesortitemacs(ev) {
    ev.preventDefault();
    aviator.sortitemdown();
    aviator.renderitem(rootitems);
}
function handleDalete(ev) {
}
// document.body.removeChild(document.getElementById('cart'))
var rootitems = document.getElementById('main');
aviator.renderitem(rootitems);
var cart = document.getElementById('cart');
aviator.renderitemcart(cart);
