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
function appInit() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            getProductsMain();
            return [2 /*return*/];
        });
    });
}
function getProductsMain() {
    return __awaiter(this, void 0, void 0, function () {
        var data, marketItems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/products/get-products-to-main')];
                case 1:
                    data = (_a.sent()).data;
                    marketItems = data.marketItems;
                    if (marketItems) {
                        renderItemsMain(marketItems);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function handleAddProduct(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, pic, title, description, price, category, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, pic = _a.pic, title = _a.title, description = _a.description, price = _a.price, category = _a.category;
                    pic = pic.value;
                    title = title.value;
                    description = description.value;
                    price = price.value;
                    category = category.value;
                    return [4 /*yield*/, axios.post('/products/add-product', { pic: pic, title: title, description: description, price: price, category: category })];
                case 1:
                    data = (_b.sent()).data;
                    document.querySelector("form").reset();
                    document.getElementById("message").innerHTML = "The product was successfully added";
                    window.setTimeout(function () { location.reload(); }, 2000);
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var data, filterdProducts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/products/get-products')];
                case 1:
                    data = (_a.sent()).data;
                    filterdProducts = data.filterdProducts;
                    console.log({ filterdProducts: filterdProducts });
                    if (filterdProducts) {
                        renderProducts(filterdProducts);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function renderItemsMain(items, userName) {
    var html = '';
    var rootItems = document.querySelector('.mainPage__middle--products');
    if (items) {
        items.forEach(function (item) {
            html += "\n            <div class=\"mainPage__middle--products--item\">\n                <img src=\"" + item.pic + "\" title='" + item.title + "'>\n                <h4>" + item.description + "</h4>\n                <p>" + item.price + "$</p>\n                <i title=\"Add product to cart\" id=\"myBtn\" class=\"fa fa-shopping-cart\"></i>\n                <i class=\"fa fa-heart\"></i>\n            </div>\n            ";
        });
        if (localStorage.getItem("name") != null) {
            document.querySelector(".mainPage__header--welcome").innerHTML = "\n            hello " + localStorage.getItem("name") + " <a href=\"personal-zone.html\"><i class=\"fa fa-user\" ></i></a\n            </br></br>\n            <button onclick=\"localStorage.clear();location.reload()\">log out</button>\n            ";
        }
        else if (localStorage.getItem("name") === 'user') {
            document.querySelector(".mainPage__header--welcome").innerHTML = '';
        }
        else {
            document.querySelector(".mainPage__header--welcome").innerHTML = '';
        }
        rootItems.innerHTML = html;
    }
}
function renderProducts(products, userName) {
    var html = products.map(function (product) {
        return "\n        <div class=\"mainPage__middle--products--item\" id=\"card\">\n        <div id=\"trash\"><i class=\"fa fa-trash-o\" style=\"font-size:20px;cursor: pointer;\" title=\"Delete product\" onclick='handleDelete(\"" + product._id + "\")'></i></div>\n        <img src=\"" + product.pic + "\" title='" + product.title + "'>\n        <p>" + product.title + ".</p>\n        <p>" + product.price + "$</p>\n        <p>" + product.description + ".</p>\n        <form onsubmit=\"handleUpadte(event,'" + product._id + "')\">\n            <input type = 'text' name = 'newImg' placeholder = 'Update img' >\n            <input type = 'text' name = 'newTitle' placeholder = 'Update title'>\n            <input type = 'text' name = 'newPrice' placeholder = 'Update price'>\n            <input type = \"submit\" value = \"Update\">\n        </form>\n        </div>\n        ";
    }).join('');
    document.getElementById('products').innerHTML = html;
}
function handleUpadte(ev, gameId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            ev.preventDefault();
            console.log(gameId);
            return [2 /*return*/];
        });
    });
}
// async function handleUpdateTitle(ev, gameId) {
//     const newTitle = ev.target.value;
//     const { data } = await axios.patch('/products/update-title', { gameId, newTitle });
//     const {products} = data;
//     location.reload();
//     renderProducts(products);
// }
// async function handleUpdatePrice(ev, gameId) {
//     const newPrice = ev.target.value;
//     const { data } = await axios.patch('/products/update-price', { gameId, newPrice });
//     const {products} = data;
//     location.reload();
//     renderProducts(products);
// }
function handleDelete(productId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, products, productsMarket;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios["delete"]('/products/delete-product', { data: { productId: productId } })];
                case 1:
                    data = (_a.sent()).data;
                    products = data.products, productsMarket = data.productsMarket;
                    location.reload();
                    renderProducts(products);
                    renderItemsMain(productsMarket);
                    return [2 /*return*/];
            }
        });
    });
}
function handleCategoryShow(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var chosenCategory, data, filterd, products;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chosenCategory = ev.target.textContent;
                    return [4 /*yield*/, axios.post('/products/get-by-category', { chosenCategory: chosenCategory })];
                case 1:
                    data = (_a.sent()).data;
                    filterd = data.filterd;
                    products = data.products;
                    if (filterd)
                        renderItemsMain(filterd);
                    else if (products)
                        renderItemsMain(products);
                    return [2 /*return*/];
            }
        });
    });
}
function handleAscending(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var data, filterd, products;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    return [4 /*yield*/, axios.post('/products/sort-by-Ascending')];
                case 1:
                    data = (_a.sent()).data;
                    filterd = data.filterd;
                    products = data.products;
                    if (filterd)
                        renderItemsMain(filterd);
                    else if (products)
                        renderItemsMain(products);
                    return [2 /*return*/];
            }
        });
    });
}
function handleDescending(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var data, filterd, products;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    return [4 /*yield*/, axios.post('/products/sort-by-Descending')];
                case 1:
                    data = (_a.sent()).data;
                    filterd = data.filterd;
                    products = data.products;
                    if (filterd)
                        renderItemsMain(filterd);
                    else if (products)
                        renderItemsMain(products);
                    return [2 /*return*/];
            }
        });
    });
}
function handleSignUp(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, userName, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, email = _a.email, password = _a.password, userName = _a.userName;
                    email = email.value;
                    password = password.value;
                    userName = userName.value;
                    document.querySelector("form").reset();
                    document.getElementById("regMessage").innerHTML = "Successfully Signed Up";
                    return [4 /*yield*/, axios.post('/products/register', { email: email, password: password, userName: userName })];
                case 1:
                    data = (_b.sent()).data;
                    return [2 /*return*/];
            }
        });
    });
}
// async function handleLogin(ev) {
//     ev.preventDefault();
//     let { email, password } = ev.target.elements;
//     email = email.value;
//     password = password.value;
//     const { data } = await axios.post('/products/login', {email, password});
//     console.log(window)
//     // if(data.login){
//     //     const {products} = data;
//     //     const {userName} = data;
//     //     renderItemsMain(products, userName)
//     // }
// }
function handleLogin(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, data, userName, ok, items;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, email = _a.email, password = _a.password;
                    email = email.value;
                    password = password.value;
                    return [4 /*yield*/, axios.post('/products/login', { email: email, password: password })];
                case 1:
                    data = (_b.sent()).data;
                    userName = data.userName;
                    ok = data.ok;
                    items = data.items;
                    if (ok === true) {
                        document.getElementById("logMessage").innerHTML = " You are login";
                        window.setTimeout(function () { location.reload(); }, 2000);
                        localStorage.setItem("name", userName);
                    }
                    else {
                        document.getElementById("logMessage").innerHTML = "Email or Password is wrong, try again";
                    }
                    renderItemsMain(items, userName);
                    return [2 /*return*/];
            }
        });
    });
}
