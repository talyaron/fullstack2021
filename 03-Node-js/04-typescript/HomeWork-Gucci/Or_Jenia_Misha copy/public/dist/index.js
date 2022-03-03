"use strict";
exports.__esModule = true;
function renderDishesStore(list, domElement) {
    try {
        var html_1 = "";
        list.forEach(function (item) {
            html_1 += "<div class=\"dishes\" id = \"" + item.id + "\"> \n      \n      <div class = \"dishes__title\"> \n         <h3 class =\"dishes__title__name\">" + item.name + "&nbsp</h3> \n         <p class =\"dishes__title__price\">" + item.price + " <button onclick=\"handleAddToCart(event)\" id=\"" + item.id + "\">+</button> </p>\n      </div>\n         <p class =\"dishes__desc\">" + item.description + "</p>\n      </div>";
        });
        domElement.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function renderDishesERP(list, domElement) {
    var html = "<section class=\"dishesWrap\" > ";
    list.forEach(function (item) {
        html += "<div class=\"dishesERP\"> \n          <input type=\"checkbox\" id=" + item.id + "></input>\n           <h3 class =\"dishesERP__title__name\">" + item.name + "</h3> \n           <p class =\"dishesERP__desc\">" + item.description + "</p>\n           <p class =\"dishesERP__title__price\">" + item.price + " \u20AA</p>\n           <p class =\"dishesERP__title__category\"> " + item.category + "</p>\n          <form onsubmit=\"handleUpdateDish(event)\" id=\"" + item.id + "\">\n           <input type=\"text\" name=\"name\" id=\"\" placeholder=\"Dish Name\"/>\n           <input type=\"number\" name=\"price\" id=\"\" placeholder=\"Dish Price\"/>\n           <input type=\"text\" name=\"description\" id=\"\" placeholder=\"Add Dish description\"/>\n           <select name=\"category\" id=\"updated-category\">\n               <option value=\"Choose\" selected disabled>Select category</option>\n               <option value=\"firsts\">Firsts</option>\n               <option value=\"soups\">Soups</option>\n               <option value=\"salads\">Salads</option>\n               <option value=\"buns\">Buns</option>\n               <option value=\"robta-yaki\">Robta Yaki</option>\n               <option value=\"gyoza\">Gyoza</option>\n               <option value=\"inside-out\">Inside Out</option>\n               <option value=\"specials\">Specials</option>\n               <option value=\"kids\">Kids Dishes</option>\n               <option value=\"main\">Main Dishes</option>\n               <option value=\"wok\">Wok</option>\n               <option value=\"cokctails\">Cokctails</option>\n               <option value=\"combinations\">Combinations</option>\n               <option value=\"sashimi\">Sashimi</option>\n               <option value=\"nigiri\">Nigiri</option>\n               <option value=\"sandwich-sushi\">Sandwich Sushi</option>\n               <option value=\"maki-sushi\">Maki Sushi</option>\n               <option value=\"gonkan\">Gonkan Maki</option>\n           </select>\n           <input type=\"submit\" value=\"Update\"/>\n           </form>\n  \n           \n        </div>";
    });
    html += '</section>';
    domElement.innerHTML = html;
}
function renderCart(list, domElement) {
    try {
        var html_2 = "";
        list.forEach(function (item) {
            html_2 += "<div class=\"cart__dishes\" id = \"" + item.id + "\"> \n        \n           <h3 class =\"dishes__title__name\">" + item.name + "&nbsp <span>Qnt</span>: " + item.quantity + "</h3> \n           <p class =\"dishes__title__price\">" + item.price + "\u20AA <button onclick=\"handleDeleteFromCart(event)\" id=\"" + item.id + "\">-</button></p>\n           </div>";
        });
        domElement.innerHTML = html_2;
    }
    catch (error) {
        console.error(error);
    }
}
renderSushiMenu();
function renderSushiMenu() {
    try {
        sushiMenu.getData();
        var rootStore_1 = document.getElementById("rootStore");
        var rootERP = document.getElementById("rootERP");
        if (rootStore_1) {
            sushiMenu.renderDishesStore(sushiMenu.dishes, rootStore_1);
        }
        if (rootERP) {
            sushiMenu.renderDishesERP(sushiMenu.dishes, rootERP);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddDish(ev) {
    try {
        ev.preventDefault();
        var dishName = ev.target.elements.name.value;
        var dishPrice = ev.target.elements.price.valueAsNumber;
        var dishDesc = ev.target.elements.description.value;
        var dishCategory = document.getElementById("category")
            .value;
        sushiMenu.addDish(dishName, dishPrice, dishDesc, dishCategory);
        renderSushiMenu();
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function log(str) {
    console.dir(str);
    console.log(str);
}
function handleDeleteDish() {
    var children = document.querySelector('.dishesWrap').children;
    Array.from(children).forEach(function (el) {
        var _a = el.children[0], checked = _a.checked, id = _a.id;
        if (checked) {
            sushiMenu.removeDish(id);
        }
    });
    renderSushiMenu();
}
function handleUpdateDish(ev) {
    ev.preventDefault();
    try {
        var dishName = ev.target.elements.name.value;
        var dishPrice = ev.target.elements.price.valueAsNumber;
        var dishDesc = ev.target.elements.description.value;
        var dishCategory = document.getElementById("updated-category").value;
        var dishId_1 = ev.target.id;
        var index = sushiMenu.dishes.findIndex(function (dish) { return dish.id === dishId_1; });
        var newDish = { id: dishId_1, name: dishName, price: dishPrice, description: dishDesc, category: dishCategory };
        if (!dishName) {
            newDish.name = sushiMenu.dishes[index].name;
        }
        if (!dishPrice) {
            newDish.price = sushiMenu.dishes[index].price;
        }
        if (!dishDesc) {
            newDish.description = sushiMenu.dishes[index].description;
        }
        console.log(dishCategory);
        if (dishCategory === 'Choose') {
            newDish.category = sushiMenu.dishes[index].category;
        }
        sushiMenu.updateDish(dishId_1, newDish);
        sushiMenu.getData();
        renderSushiMenu();
    }
    catch (error) {
        console.error(error);
    }
}
var rootStore = document.getElementById("rootStore");
if (rootStore) {
    sushiMenu.renderDishesStore(sushiMenu.dishes, rootStore);
}
function handleSearch(ev) {
    try {
        var searchTerm = ev.target.value;
        var regex_1 = new RegExp(searchTerm, "i");
        var html_3 = "";
        var root = document.querySelector("#rootERP");
        if (searchTerm == 0) {
            renderSushiMenu();
            return;
        }
        sushiMenu.dishes.forEach(function (item) {
            if (regex_1.test(item.name)) {
                html_3 += "<div class=\"dishesERP\"> \n        <input type=\"checkbox\" id=" + item.id + "></input></form>\n         <h3 class =\"dishesERP__title__name\">" + item.name + "</h3> \n         <p class =\"dishesERP__desc\">" + item.description + "</p>\n         <p class =\"dishesERP__title__price\">" + item.price + " \u20AA</p>\n         <p class =\"dishesERP__title__category\"> " + item.category + "</p>\n         <form onsubmit=\"handleUpdateDish(event)\" id=\"" + item.id + "\">\n         <input type=\"text\" name=\"name\" id=\"\" placeholder=\"Dish Name\">\n         <input type=\"number\" name=\"price\" id=\"\" placeholder=\"Dish Price\">\n         <input type=\"text\" name=\"description\" id=\"\" placeholder=\"Add Dish description\">\n         <select name=\"category\" id=\"updated-category\">\n             <option value=\"Choose\" selected disabled>Select category</option>\n             <option value=\"firsts\">Firsts</option>\n             <option value=\"soups\">Soups</option>\n             <option value=\"salads\">Salads</option>\n             <option value=\"buns\">Buns</option>\n             <option value=\"robta-yaki\">Robta Yaki</option>\n             <option value=\"gyoza\">Gyoza</option>\n             <option value=\"inside-out\">Inside Out</option>\n             <option value=\"specials\">Specials</option>\n             <option value=\"kids\">Kids Dishes</option>\n             <option value=\"main\">Main Dishes</option>\n             <option value=\"wok\">Wok</option>\n             <option value=\"cokctails\">Cokctails</option>\n             <option value=\"combinations\">Combinations</option>\n             <option value=\"sashimi\">Sashimi</option>\n             <option value=\"nigiri\">Nigiri</option>\n             <option value=\"sandwich-sushi\">Sandwich Sushi</option>\n             <option value=\"maki-sushi\">Maki Sushi</option>\n             <option value=\"gonkan\">Gonkan Maki</option>\n         </select>\n         <input type=\"submit\" value=\"Update\">\n         </form>\n\n         \n      </div>";
            }
        });
        root.innerHTML = html_3;
    }
    catch (error) {
        console.error(error);
    }
}
// ---- CSS MANIPULATION --- //
function navSlide() {
    try {
        var burger_1 = document.querySelector(".burger");
        var nav_1 = document.querySelector(".navtags");
        if (burger_1 && nav_1) {
            burger_1.addEventListener("click", function () {
                nav_1.classList.toggle("navtags-active");
                burger_1.classList.toggle("burger-active");
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}
function popMenuActive() {
    try {
        var picWrap = document.querySelectorAll(".picwrap");
        var pop_1 = document.querySelector(".popmenu");
        var close = document.querySelector(".popmenu__x");
        var blur_1 = document.querySelector(".blurwrapper");
        var overflow_1 = document.querySelector("body");
        if (picWrap && pop_1 && close && blur_1 && overflow_1) {
            blur_1.addEventListener("click", function () {
                pop_1.classList.toggle("popmenu-active");
                blur_1.classList.toggle("blurwrapper-active");
                overflow_1.classList.toggle("body-active");
            });
            close.addEventListener("click", function () {
                pop_1.classList.toggle("popmenu-active");
                blur_1.classList.toggle("blurwrapper-active");
                overflow_1.classList.toggle("body-active");
            });
            picWrap.forEach(function (cell) {
                cell.addEventListener("click", function () {
                    var list = sushiMenu.filterByCategory(cell.id);
                    renderSushiMenu();
                    sushiMenu.renderDishesStore(list, rootStore);
                    pop_1.classList.toggle("popmenu-active");
                    blur_1.classList.toggle("blurwrapper-active");
                    overflow_1.classList.toggle("body-active");
                });
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}
popMenuActive();
navSlide();
function popNavBarActive() {
    try {
        var categories_1 = document.querySelectorAll(".popCategory");
        categories_1.forEach(function (category) {
            category.addEventListener("click", function () {
                var list = sushiMenu.filterByCategory(category.id);
                renderSushiMenu();
                sushiMenu.renderDishesStore(list, rootStore);
                categories_1.forEach(function (category) {
                    category.classList.remove("popCategory-active");
                });
                category.classList.add("popCategory-active");
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
popNavBarActive();
function popCartActive() {
    try {
        var cartBox_1 = document.querySelector(".cart__box");
        var cartImg = document.querySelector(".cart__img");
        var cartClose_1 = document.querySelector(".cart__close");
        var cart_1 = document.querySelector(".cart");
        var cartFooter_1 = document.querySelector(".cart__footer");
        var cartQnt_1 = document.querySelector(".cart__box__Qnt");
        if (cartBox_1 && cartImg && cartClose_1 && cart_1 && cartFooter_1 && cartQnt_1) {
            cartImg.addEventListener("click", function () {
                cart_1.classList.add("cart-active");
                cartBox_1.classList.add("cart__box-active");
                cartClose_1.classList.add("cart__close-active");
                cartFooter_1.classList.add("cart__footer-active");
                cartQnt_1.style.display = 'none';
            });
            cartClose_1.addEventListener("click", function () {
                cart_1.classList.remove("cart-active");
                cartBox_1.classList.remove("cart__box-active");
                cartClose_1.classList.remove("cart__close-active");
                cartFooter_1.classList.remove("cart__footer-active");
                cartQnt_1.style.display = 'block';
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}
popCartActive();
function handlePlaceOrder(ev) {
    ev.preventDefault();
    try {
        window.alert("place order");
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddToCart(ev) {
    try {
        var idToCart_1 = ev.target.id;
        var index = sushiMenu.dishes.findIndex(function (dish) { return dish.id === idToCart_1; });
        var cartRoot = document.getElementById("cart__root");
        var cartBox = document.querySelector(".cart__box");
        if (cartBox.classList.contains("cart__box-click")) {
            cartBox.classList.remove("cart__box-click");
        }
        if (!cartBox.classList.contains("cart__box-click")) {
            cartBox.classList.add("cart__box-click");
        }
        sushiMenu.addCartDish(sushiMenu.dishes[index]);
        sushiMenu.renderCart(sushiMenu.cartDishes, cartRoot);
        totalPrice(sushiMenu.cartDishes);
    }
    catch (error) {
        console.error(error);
    }
}
function totalPrice(list) {
    try {
        var sumCartAdd = 0;
        var sumCart = sushiMenu.sumCartPrice(list);
        sumCartAdd += sumCart;
        var totalPriceRoot = document.querySelector(".totalprice");
        if (totalPriceRoot) {
            totalPriceRoot.innerHTML = "Total Price " + sumCartAdd + "\u20AA";
        }
    }
    catch (error) {
        console.error(error);
    }
}
totalPrice(sushiMenu.cartDishes);
function handleDeleteFromCart(ev) {
    try {
        var idFromCart = ev.target.id;
        sushiMenu.removeCartDish(idFromCart);
        totalPrice(sushiMenu.cartDishes);
    }
    catch (error) {
        console.error(error);
    }
}
