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
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var Adidas = {
    // id:0,
    products: [],
    wishlistArr: [],
    cartArr: [],
    deleteItem: function (id) {
        this.products = this.products.filter(function (product) { return product.id !== id; });
        this.setData();
    },
    renderWish: function (list, domElement) {
        //onsole.log(list);
        var html = "";
        this.wishlistArr.forEach(function (product) {
            html += "\n     <div class=\"cards__item\" >\n\n      <div class=\"picture\">\n          <img src=\"" + product.pictureBack + "\" >\n         <img src=\"" + product.pictureFront + "\" class=\"img-top\">\n          </div>\n              \n\n      <div class=\"description\">\n         <p>" + product.title + "</p>\n          \n          <p>" + product.price + "\u20AA</p> \n      </div>\n\n      <div class=\"color\">\n      <p> " + product.color + "</p>\n      </div>\n          </div>   ";
        });
        domElement.innerHTML = html;
    },
    renderCart: function (list, domElement) {
        //console.log(list);
        var html = "";
        this.cartArr.forEach(function (product) {
            html += "\n     <div class=\"cards__item\" >\n\n      <div class=\"picture\">\n          <img src=\"" + product.pictureBack + "\" >\n         <img src=\"" + product.pictureFront + "\" class=\"img-top\">\n          </div>\n              \n      <div class=\"description\">\n         <p>" + product.title + "</p>\n          \n          <p>" + product.price + "\u20AA</p> \n      </div>\n      <div class=\"color\">\n      <p> " + product.color + "</p>\n      </div>\n          </div>   ";
        });
        domElement.innerHTML = html;
    },
    updateItem: function (id, newTitle, newPrice, newGender, newCategory, newPictureFront, newPictureBack, newColor, newDescription, newShoeSize) {
        var index = this.products.findIndex(function (product) { return product.id === id; });
        if (index >= 0) {
            this.products[index].title = newTitle;
            this.products[index].price = newPrice;
            this.products[index].gender = newGender;
            this.products[index].category = newCategory;
            this.products[index].pictureFront = newPictureFront;
            this.products[index].pictureBack = newPictureBack;
            this.products[index].color = newColor;
            this.products[index].description = newDescription;
            this.products[index].shoeSize = newShoeSize;
            console.log(index);
            this.setData();
        }
    },
    renderAllData: function (domElement) {
        this.render(this.products, domElement);
    },
    renderAllWish: function (domElement) {
        this.renderWish(this.wishlistArr, domElement);
    },
    renderAllCart: function (domElement) {
        this.renderCart(this.cartArr, domElement);
    },
    filterItems: function (highPrice, lowPrice) {
        return this.products.filter(function (item) { return item.price >= lowPrice && item.price <= highPrice; });
    },
    shoeSizeFilter: function (size) {
        return (this.products = this.products.filter(function (item) { return item.shoeSize === size; }));
    },
    sortItemsAsc: function () {
        this.products.sort(function (x, y) { return y.price - x.price; });
    },
    sortItemsDsc: function () {
        this.products.sort(function (x, y) { return x.price - y.price; });
    },
    sortByGender: function (item) {
        return this.products.filter(function (element) { return element.gender === item; });
    },
    sortByColor: function (color) {
        return this.products.filter(function (element) { return element.color === color; });
    },
    sortByType: function (category) {
        return this.products.filter(function (element) { return element.category === category; });
    },
    renderFilter: function (filterd, domElement) {
        // console.log(filterd);
        this.render(filterd, domElement);
    },
    WishList: function (id) {
        var index = this.products.findIndex(function (product) { return product.id === id; });
        //console.log(`The index:${index}.`)
        //console.log(`The id: ${id}.`)
        var item;
        item = Adidas.products[index];
        this.wishlistArr.push(item);
    },
    Cart: function (id) {
        var index = this.products.findIndex(function (product) { return product.id === id; });
        var item;
        item = Adidas.products[index];
        this.cartArr.push(item);
    },
    shoeRender: function (id) {
        var index = this.products.findIndex(function (product) { return product.id === id; });
        //console.log(`The index:${index}.`)
        //console.log(`The id: ${id}.`)
        var item;
        item = Adidas.products[index];
        this.wishlistArr.push(item);
        console.log(Adidas.wishlistArr);
    }
};
function handleSearchProduct(ev) {
    var search = ev.target.value;
    var regex = new RegExp(search, "i");
    var root = document.getElementById("rootSearch");
    root.innerHTML = "";
    if (search.length > 0) {
        var foundProducts = Adidas.products.filter(function (product) {
            if (regex.test(product.title))
                return true;
        });
        var html = foundProducts
            .map(function (product) {
            return "<p>" + product.title + "</p>";
        })
            .join("");
        root.innerHTML = html;
        console.log(foundProducts);
    }
}
function handleDelete(id) {
    console.log(id);
    var root = document.getElementById("rootOwner");
    Adidas.deleteItem(id);
    Adidas.renderAllData(root);
}
function handleUpdate(ev, itemId) {
    ev.preventDefault();
    var newTitle = ev.target.elements.newTitle.value;
    var newPrice = ev.target.elements.newPrice.valueAsNumber;
    var newGender = ev.target.elements.newGender.value;
    var newCategory = ev.target.elements.newCategory.value;
    var newPictureFront = ev.target.elements.newPictureFront.value;
    var newPictureBack = ev.target.elements.newPictureBack.value;
    var newColor = ev.target.elements.newColor.value;
    var newDescription = ev.target.elements.newDescription.value;
    var newShoeSize = ev.target.elements.newShoeSize.valueAsNumber;
    var root = document.getElementById("rootOwner");
    Adidas.updateItem(itemId, newTitle, newPrice, newGender, newCategory, newPictureFront, newPictureBack, newColor, newDescription, newShoeSize);
    Adidas.renderAllData(root);
}
function handleSort(ev) {
    ev.preventDefault();
    var sort = ev.target.value;
    var root = document.getElementById("rootCustomer");
    if (sort === "priceAsc") {
        Adidas.sortItemsAsc();
        Adidas.renderAllData(root);
    }
    else if (sort === "priceDsc") {
        Adidas.sortItemsDsc();
        Adidas.renderAllData(root);
    }
    else {
        Adidas.renderAllData(root);
    }
    console.log(sort);
    Adidas.setData();
}
function handleType(ev) {
    var type = ev.target.value;
    ev.preventDefault();
    console.log(type);
    var root = document.getElementById("rootCustomer");
    if (type === "Sneakers") {
        console.log(type);
        Adidas.render(Adidas.sortByType(type), root);
    }
    else if (type === "Boots") {
        Adidas.renderFilter(Adidas.sortByType(type), root);
    }
    else if (type === "Hi Tops") {
        Adidas.renderFilter(Adidas.sortByType(type), root);
    }
    else if (type === "Flip Flops") {
        Adidas.renderFilter(Adidas.sortByType(type), root);
    }
    else {
        Adidas.renderAllData(root);
    }
}
function handleColor(ev) {
    var color = ev.target.value;
    ev.preventDefault();
    var root = document.getElementById("rootCustomer");
    if (color === "red") {
        return Adidas.renderFilter(Adidas.sortByColor(color), root);
    }
    else if (color === "blue") {
        return Adidas.renderFilter(Adidas.sortByColor(color), root);
    }
    else {
        Adidas.renderAllData(root);
    }
}
function handleGender(ev) {
    var gender = ev.target.value;
    ev.preventDefault();
    var root = document.getElementById("rootCustomer");
    if (gender === "men") {
        console.log(gender);
        Adidas.renderFilter(Adidas.sortByGender(gender), root);
    }
    else if (gender === "women") {
        console.log(gender);
        Adidas.renderFilter(Adidas.sortByGender(gender), root);
    }
    else if (gender === "unisex") {
        console.log(gender);
        Adidas.renderFilter(Adidas.sortByGender(gender), root);
    }
    else {
        Adidas.renderAllData(root);
    }
}
function handleWishList(id) {
    //console.log(id);
    var root = document.getElementById("rootWish");
    Adidas.WishList(id);
    Adidas.renderAllWish(root);
}
function handleCart(id) {
    //console.log(id);
    var root = document.getElementById("rootCart");
    Adidas.Cart(id);
    Adidas.renderAllCart(root);
}
function handleAddStudent(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, price, gender, category, pictureFront, pictureBack, color, description, shoeSize, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    title = ev.target.elements.title.value;
                    price = ev.target.elements.price.valueAsNumber;
                    gender = ev.target.elements.title.value;
                    category = ev.target.elements.category.value;
                    pictureFront = ev.target.elements.pictureFront.value;
                    pictureBack = ev.target.elements.pictureBack.value;
                    color = ev.target.elements.color.value;
                    description = ev.target.elements.description.value;
                    shoeSize = ev.target.elements.shoeSize.valueAsNumber;
                    return [4 /*yield*/, axios.post("/add-Shoe", { title: title, price: price, gender: gender, category: category, pictureFront: pictureFront, pictureBack: pictureBack, color: color, description: description, shoeSize: shoeSize })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    ev.target.reset();
                    location.reload();
                    renderDataCustomer(data);
                    renderDataOwner(data);
                    return [2 /*return*/];
            }
        });
    });
}
function getAllDataCustomer() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/get-all-shoes")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderDataCustomer(data);
                    return [2 /*return*/];
            }
        });
    });
}
function getAllDataOwner() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/get-all-shoes")];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    renderDataOwner(data);
                    return [2 /*return*/];
            }
        });
    });
}
function renderDataCustomer(data) {
    var html = "";
    data.forEach(function (product) {
        html += "<div class=\"cards__item\" >\n\n    <div class=\"picture\">\n    <i class=\"fa-solid fa-heart fa-beat\"  onclick=\"handleWishList('" + product.id + "')\"></i>\n        <i class=\"fa-solid fa-circle-plus fa-beat\"  onclick=\"handleCart('" + product.id + "')\"></i>\n        <img src=\"" + product.pictureBack + "\" >\n       <img src=\"" + product.pictureFront + "\" class=\"img-top\">\n        </div>\n            \n    <div class=\"color\">\n    <p><b> Color: </b> " + product.color + "</p>\n    </div>\n\n    <div class=\"description\">\n       <p>" + product.title + "</p>\n        <p>" + product.description + "</p>\n        <p>" + product.price + "\u20AA</p> \n    </div>\n        </div>   ";
    });
    var root = document.querySelector("#rootCustomer");
    root.innerHTML = html;
}
function renderDataOwner(data) {
    var html = "";
    data.forEach(function (product) {
        html += "<div class=\"cards__item\" >\n\n    <div class=\"picture\">\n        <i class=\"far fa-heart\"  onclick=\"handleWishList('" + product.id + "')\"></i>\n        <img src=\"" + product.pictureBack + "\" >\n       <img src=\"" + product.pictureFront + "\" class=\"img-top\">\n        </div>\n            \n    <div class=\"color\">\n    <p><b> Color: </b> " + product.color + "</p>\n    </div>\n\n    <div class=\"description\">\n       <p>" + product.title + "</p>\n        <p>" + product.description + "</p>\n        <p>" + product.price + "\u20AA</p> \n    </div>;\n\n    <form onsubmit=\"handleUpdate(event, '" + product.id + "')\">\n    <input type=\"text\" name=\"newTitle\" placeholder=\"new title\" value=\"" + product.title + "\">\n    <input type=\"number\" name=\"newPrice\" placeholder=\"new price\" value=\"" + product.price + "\">\n    <input type=\"text\" name=\"newCategory\" placeholder=\"new category\" value=\"" + product.category + "\">\n    <input type=\"text\" name=\"newPictureFront\" placeholder=\"new picture front\" value=\"" + product.pictureFront + "\">\n    <input type=\"text\" name=\"newPictureBack\" placeholder=\"new picture back\" value=\"" + product.pictureBack + "\">\n    <input type=\"text\" name=\"newColor\" placeholder=\"new color\" value=\"" + product.color + "\">\n    <input type=\"text\" name=\"newGender\" placeholder=\"new gender\" value=\"" + product.gender + "\">\n    <input type=\"text\" name=\"newDescription\" placeholder=\"new description\" value=\"" + product.description + "\">\n    <input type=\"number\" name=\"newShoeSize\" placeholder=\"new shoeSize\" value=\"" + product.shoeSize + "\">\n    <button type=\"submit\">Update</button>\n    </form>\n\n    <button onclick=\"handleDelete('" + product.id + "')\">Delete</button>\n        </div>  ";
    });
    var root = document.querySelector("#rootOwner");
    root.innerHTML = html;
}
