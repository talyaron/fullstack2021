var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var gucci = {
    items: [
        { id: '1', selectItem: 'Timeless-40mm', description: 'PRICE FOR THIS WATCH +10% IN 2023', price: 1000 },
        { id: '2', selectItem: 'Timeless-38mm', description: 'PRICE FOR THIS WATCH +10% IN 2023', price: 2000 },
        { id: '3', selectItem: 'Tiger1-38mm', description: 'PRICE FOR THIS WATCH +10% IN 2023', price: 3000 },
        { id: '4', selectItem: 'Tiger2-38mm', description: 'PRICE FOR THIS WATCH +10% IN 2023', price: 4000 },
        { id: '5', selectItem: 'Timeless-Automatic-38mm', description: 'PRICE FOR THIS WATCH +10% IN 2023', price: 5000 },
        { id: '6', selectItem: 'Dive-40mm', description: 'PRICE FOR THIS WATCH +10% IN 2023', price: 6000 },
        { id: '7', selectItem: 'Limited-Dive-40mm', description: 'PRICE FOR THIS WATCH +10% IN 2023', price: 7000 },
        { id: '8', selectItem: 'Dive-45mm', description: 'PRICE FOR THIS WATCH +10% IN 2023', price: 8000 },
        { id: '9', selectItem: 'Timeless-40mm', description: 'PRICE FOR THIS WATCH +10% IN 2023', price: 1000 },
        { id: '10', selectItem: 'Timeless-38mm', description: 'PRICE FOR THIS WATCH +10% IN 2023', price: 2000 },
    ],
    cartItems: [],
    addItems: function (selectItem, description, price) {
        var id = uid();
        this.items.push({ id: id, selectItem: selectItem, description: description, price: price });
        this.storeData();
        this.getData();
    },
    addItemsCart: function (Items) {
        this.cartItems.push(Items);
    },
    addItemsCartNum: function (cartCount) {
        cartCount = this.cartItems.length;
        console.log(cartCount);
    },
    editItem: function (id, selectItem, description, price) {
        var index = this.items.findIndex(function (item) { return item.id === id; });
        if (index >= 0) {
            this.items[index].selectItem = selectItem;
            this.items[index].description = description;
            this.items[index].price = price;
        }
        this.storeData();
        this.getData();
    },
    sortItems: function (orderBy) {
        if (orderBy === void 0) { orderBy = 'asc'; }
        if (orderBy === 'asc') {
            this.items.sort(function (a, b) { return b.price - a.price; });
        }
        else if (orderBy === 'desc') {
            this.items.sort(function (a, b) { return a.price - b.price; });
        }
    },
    storeData: function () {
        localStorage.setItem('storeData', JSON.stringify(this.items));
    },
    getData: function () {
        var items = JSON.parse(localStorage.getItem("storeData"));
        if (items) {
            this.items = items;
        }
    },
    deleteItem: function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
        localStorage.setItem('storeData', JSON.stringify(this.items));
    },
    deleteItemCart: function (id) {
        this.cartItems = this.cartItems.filter(function (item) { return item.id !== id; });
    },
    renderItems: function (list, domElement) {
        var html = '';
        list.forEach(function (item) {
            html +=
                "<div class='containerCard'>\n                    <div class='card'>\n                        <div class=\"category\">" + item.selectItem + "</div>\n                        <div class=\"description\">" + item.description + "</div>\n                        <div class=\"price\">&#36;" + item.price + "</div>\n                        <div class=\"imgPic\">\n                          <div class=\"main__item pic" + item.selectItem + " \"></div>\n                        </div>\n                        <div class=\"itemPicLine\">\n                            <img src=\"" + item.selectItem + ".jpg\" alt=\"\">\n                            <hr>\n                        </div>\n                        <div class=\"delete\">\n                         <button onclick=\"handleDelete('" + item.id + "')\"><span style=\"color: #ff0000;\">Delete</span></button>\n                        </div>\n                        <div class=\"edit\">\n                            <form id=\"formAdd\" onsubmit=\"handleEditItems(event, '" + item.id + "')\">\n                            <input type=\"text\" name=\"selectItem\" placeholder=\"Edit selectItem\" value=\"" + item.selectItem + "\">\n                            <input type=\"number\" name=\"price\" placeholder=\"Edit price\" value=\"" + item.price + "\">\n                            <input type=\"text\" name=\"description\" placeholder=\"Description\" value=\"" + item.description + "\">\n                            <input type=\"submit\" id=\"update\" value=\"UPDATE\">\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <br>";
        });
        localStorage.setItem('storeData', JSON.stringify(this.items));
        domElement.innerHTML = html;
    },
    renderItemsStore: function (list, rootItemsStore) {
        var htmlStore = '';
        list.forEach(function (item) {
            htmlStore +=
                "<div class=\"main__item pic" + item.selectItem + "\">\n                <span class=\"title\">" + item.selectItem + "</span>\n                <span class=\"price\">&#36;" + item.price + "</span>\n                <button class=\"buy-now\" onclick=\"handleaddItemsCart(event, '" + item.id + "')\" type=\"buttom\">SHOP THIS \n                <i class=\"fas fa-chevron-right\" style=\"color: #000; font-size:10px;  padding: 10px;\" aria-hidden=\"true\"></i>\n                </button>\n                </div>";
        });
        rootItemsStore.innerHTML = htmlStore;
    },
    renderItemsCart: function (list, rootItemsStoreCart) {
        var htmlCart = '';
        list.forEach(function (item) {
            htmlCart += "<div class=\"sortPopUpBag\">\n            <div class=\"imgCart\">\n            <div class=\"main__item pic" + item.selectItem + "\"></div>\n            </div>\n            <div class=\"title\">" + item.selectItem + "</div>\n            <div class=\"price\">&#36;" + item.price + "</div>\n            <div class=\"delete\">\n            <div class=\"deleteCartItem\"><button onclick=\"handleDeleteCart('" + item.id + "')\">\n            <i class=\"far fa-trash-alt\" aria-hidden=\"true\"></i></button></div>\n           </div>\n            </div><hr>\n            ";
        });
        rootItemsStoreCart.innerHTML = htmlCart;
    },
    renderaddItemsCartNum: function (rootCartNum) {
        rootCartNum.innerHTML = '';
        var htmlCartCount = "" + this.cartItems.length;
        rootCartNum.innerHTML = htmlCartCount;
    }
};
function handleaddItems(ev) {
    ev.preventDefault();
    var selectItem = ev.target.elements.selectItem.value;
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    gucci.addItems(selectItem, description, price);
    var rootItems = document.getElementById('rootItems');
    gucci.renderItems(gucci.items, rootItems);
    ev.target.reset();
}
function handleaddItemsCart(ev, cartItemId) {
    var cartCount = '';
    var cartItem = gucci.items.filter(function (item) { return item.id == cartItemId; })[0];
    gucci.addItemsCart(cartItem);
    var rootItemsStoreCart = document.getElementById('rootItemsStoreCart');
    gucci.renderItemsCart(gucci.cartItems, rootItemsStoreCart);
    gucci.addItemsCartNum(cartCount);
    var rootCartNum = document.querySelector('#cartNum');
    gucci.renderaddItemsCartNum(rootCartNum);
}
function handleEditItems(ev, id) {
    console.log(id);
    ev.preventDefault();
    var selectItem = ev.target.elements.selectItem.value;
    var description = ev.target.elements.description.value;
    var price = ev.target.elements.price.valueAsNumber;
    gucci.editItem(id, selectItem, description, price);
    var rootItems = document.getElementById('rootItems');
    ev.target.reset();
    gucci.renderItems(gucci.items, rootItems);
}
function handlesortItemsDesc(ev) {
    gucci.sortItems('desc');
    var rootItemsStore = document.getElementById('rootItemsStore');
    gucci.renderItemsStore(gucci.items, rootItemsStore);
}
function handlesortItemsAsc(ev) {
    gucci.sortItems('asc');
    var rootItemsStore = document.getElementById('rootItemsStore');
    gucci.renderItemsStore(gucci.items, rootItemsStore);
}
function handleDelete(id) {
    var rootItems = document.getElementById('rootItems');
    gucci.deleteItem(id);
    gucci.renderItems(gucci.items, rootItems);
}
function handleDeleteCart(id) {
    var rootItemsStoreCart = document.getElementById('rootItemsStoreCart');
    gucci.deleteItemCart(id);
    gucci.renderItemsCart(gucci.cartItems, rootItemsStoreCart);
}
gucci.getData();
gucci.storeData();
function rendrOwenerItems() {
    var rootItems = document.getElementById('rootItems');
    gucci.renderItems(gucci.items, rootItems);
}
function handleRenderAllItems() {
    gucci.getData();
    var rootItemsStore = document.getElementById('rootItemsStore');
    gucci.renderItemsStore(gucci.items, rootItemsStore);
}
function myFunctionSort() {
    var popup = document.getElementById("myPopupSort");
    popup.classList.toggle("show");
}
function myFunctionBag() {
    var popup = document.getElementById("myPopupBag");
    popup.classList.toggle("show");
}
function myFunctionShowSearch() {
    var search = document.getElementById("searchDIV");
    if (search.style.display === "none") {
        search.style.display = "block";
    }
    else {
        search.style.display = "none";
    }
}
function handleSearch(ev) {
    var searchTerm = ev.target.value;
    var regex = new RegExp(searchTerm, "i");
    var root = document.querySelector("#SearchList");
    var html = "";
    if (searchTerm == 0) {
        root.innerHTML = html;
        return;
    }
    gucci.items.forEach(function (item) {
        if (regex.test(item.selectItem)) {
            html += "\n            <div class=\"searchDiv\">\n            <div class=\"imgCart\">\n            <div class=\"main__item pic" + item.selectItem + "\"></div>\n            </div>\n            <div class=\"title\">" + item.selectItem + "</div>\n            <div class=\"price\">&#36;" + item.price + "</div>\n            </div>";
        }
    });
    root.innerHTML = html;
}
