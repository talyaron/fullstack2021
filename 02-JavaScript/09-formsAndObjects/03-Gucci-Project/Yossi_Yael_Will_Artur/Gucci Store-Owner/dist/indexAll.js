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
                "<div class='containerCard'>\n                    <div class='card'>\n                        <div class=\"category\">" + item.selectItem + "</div>\n                        <div class=\"description\">" + item.description + "</div>\n                        <div class=\"price\">&#36;" + item.price + "</div>\n                        <div class=\"imgPic\">\n                          <div class=\"main__item pic" + item.selectItem + " \"></div>\n                        </div>\n                        <div class=\"itemPicLine\"><hr></div>\n                        <div class=\"delete\">\n                         <button onclick=\"handleDelete('" + item.id + "')\"><span style=\"color: #ff0000;\">Delete</span></button>\n                        </div>\n                        <div class=\"edit\">\n                            <form id=\"formAdd\" onsubmit=\"handleEditItems(event, '" + item.id + "')\">\n                            <input type=\"text\" name=\"selectItem\" placeholder=\"Edit selectItem\" value=\"" + item.selectItem + "\">\n                            <input type=\"number\" name=\"price\" placeholder=\"Edit price\" value=\"" + item.price + "\">\n                            <input type=\"text\" name=\"description\" placeholder=\"Description\" value=\"" + item.description + "\">\n                            <input type=\"submit\" id=\"update\" value=\"UPDATE\">\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <br>";
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
            htmlCart += "<div class=\"sortPopUpBag\">\n            <div class=\"imgCart\">\n            <div class=\"main__item pic" + item.selectItem + "\"></div>\n            </div>\n            <div class=\"title\">" + item.selectItem + "</div>\n            <div class=\"price\">&#36;" + item.price + "</div>\n            <div class=\"delete\">\n            <div class=\"deleteCartItem\"><button onclick=\"handleDeleteCart('" + item.id + "')\">\n            <i class=\"far fa-trash-alt\" aria-hidden=\"true\"></i></button></div>\n            </div>\n            </div>\n            <hr>";
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
    try {
        ev.preventDefault();
        var selectItem = ev.target.elements.selectItem.value;
        var description = ev.target.elements.description.value;
        var price = ev.target.elements.price.valueAsNumber;
        gucci.addItems(selectItem, description, price);
        var rootItems = document.querySelector('#rootItems');
        gucci.renderItems(gucci.items, rootItems);
        ev.target.reset();
        if (!rootItems)
            throw new Error('no "rootitems" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function handleaddItemsCart(ev, cartItemId) {
    try {
        var cartCount = '';
        var cartItem = gucci.items.filter(function (item) { return item.id == cartItemId; })[0];
        gucci.addItemsCart(cartItem);
        var rootItemsStoreCart = document.querySelector('#rootItemsStoreCart');
        gucci.renderItemsCart(gucci.cartItems, rootItemsStoreCart);
        gucci.addItemsCartNum(cartCount);
        var rootCartNum = document.querySelector('#cartNum');
        gucci.renderaddItemsCartNum(rootCartNum);
        if (!rootItemsStoreCart)
            throw new Error('no "rootItemsStoreCart" in DOM');
        if (!rootCartNum)
            throw new Error('no "cartNum" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function handleEditItems(ev, id) {
    try {
        console.log(id);
        ev.preventDefault();
        var selectItem = ev.target.elements.selectItem.value;
        var description = ev.target.elements.description.value;
        var price = ev.target.elements.price.valueAsNumber;
        gucci.editItem(id, selectItem, description, price);
        var rootItems = document.querySelector('#rootItems');
        ev.target.reset();
        gucci.renderItems(gucci.items, rootItems);
        if (!rootItems)
            throw new Error('no "rootItems" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function handlesortItemsDesc(ev) {
    try {
        gucci.sortItems('desc');
        var rootItemsStore = document.querySelector('#rootItemsStore');
        gucci.renderItemsStore(gucci.items, rootItemsStore);
        if (!rootItemsStore)
            throw new Error('no "rootItemsStore" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function handlesortItemsAsc(ev) {
    try {
        gucci.sortItems('asc');
        var rootItemsStore = document.querySelector('#rootItemsStore');
        gucci.renderItemsStore(gucci.items, rootItemsStore);
        if (!rootItemsStore)
            throw new Error('no "rootItemsStore" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function handleDelete(id) {
    try {
        var rootItems = document.querySelector('#rootItems');
        gucci.deleteItem(id);
        gucci.renderItems(gucci.items, rootItems);
        if (!rootItems)
            throw new Error('no "rootItems" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteCart(id) {
    try {
        var rootItemsStoreCart = document.querySelector('#rootItemsStoreCart');
        gucci.deleteItemCart(id);
        gucci.renderItemsCart(gucci.cartItems, rootItemsStoreCart);
        var cartCount = '';
        gucci.addItemsCartNum(cartCount);
        var rootCartNum = document.querySelector('#cartNum');
        gucci.renderaddItemsCartNum(rootCartNum);
        var popup = document.querySelector("#myPopupBag");
        popup.classList.toggle("show");
        if (!rootItemsStoreCart)
            throw new Error('no "rootItemsStoreCart" in DOM');
        if (!popup)
            throw new Error('no "myPopupBag" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
gucci.getData();
gucci.storeData();
function rendrOwenerItems() {
    try {
        var rootItems = document.querySelector('#rootItems');
        gucci.renderItems(gucci.items, rootItems);
        if (!rootItems)
            throw new Error('no "rootItems" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function handleRenderAllItems() {
    try {
        gucci.getData();
        var rootItemsStore = document.querySelector('#rootItemsStore');
        gucci.renderItemsStore(gucci.items, rootItemsStore);
        if (!rootItemsStore)
            throw new Error('no "rootItemsStore" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function myFunctionSort() {
    try {
        var popup = document.querySelector("#myPopupSort");
        popup.classList.toggle("show");
        if (!popup)
            throw new Error('no "myPopupSort" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function myFunctionBag() {
    try {
        var popup = document.querySelector("#myPopupBag");
        popup.classList.toggle("show");
        if (!popup)
            throw new Error('no "myPopupBag" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function myFunctionShowSearch() {
    try {
        var search = document.getElementById("searchDIV");
        if (search.style.display === "none") {
            search.style.display = "block";
        }
        else {
            search.style.display = "none";
        }
        if (!search)
            throw new Error('no "searchDIV" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
function handleSearch(ev) {
    try {
        var searchTerm = ev.target.value;
        var regex_1 = new RegExp(searchTerm, "i");
        var root = document.querySelector("#SearchList");
        var html_1 = "";
        if (searchTerm == 0) {
            root.innerHTML = html_1;
            return;
        }
        gucci.items.forEach(function (item) {
            if (regex_1.test(item.selectItem)) {
                html_1 += "\n            <div class=\"searchDiv\">\n            <div class=\"imgCart\">\n            <div class=\"main__item pic" + item.selectItem + "\"></div>\n            </div>\n            <div class=\"title\">" + item.selectItem + "</div>\n            <div class=\"price\">&#36;" + item.price + "</div>\n            </div>";
            }
        });
        root.innerHTML = html_1;
        if (!root)
            throw new Error('no "SearchList" in DOM');
    }
    catch (error) {
        console.error(error);
    }
}
