// import Art from "../model/artModel";
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
var site = {
    user: {},
    arts: []
};
function OpenSignUpForm(e) {
    return __awaiter(this, void 0, void 0, function () {
        var newUser, userName, email, password, password2, url, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    newUser = e.target.elements;
                    userName = newUser.userName, email = newUser.email, password = newUser.password, password2 = newUser.password2, url = newUser.url;
                    userName = userName.value.split(' ').join('');
                    email = email.value.split(' ').join('');
                    password = password.value;
                    password2 = password2.value;
                    url = url.value;
                    if (!(password === password2)) return [3 /*break*/, 3];
                    return [4 /*yield*/, axios.post('/users/add-user', { userName: userName, email: email, password: password, password2: password2, url: url })];
                case 2:
                    data = (_a.sent()).data;
                    return [3 /*break*/, 4];
                case 3: throw new Error("passwords are NOT matched");
                case 4:
                    if (!userName || !email || !password || !password2 || !url)
                        throw new Error("no userName, email, password, password2, url in OpenSIgnUpForm");
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error(error_1.message);
                    return [3 /*break*/, 6];
                case 6:
                    e.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
function handleLogInForm(e) {
    return __awaiter(this, void 0, void 0, function () {
        var oldUser, email, password, data, error_2, signIn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    oldUser = e.target.elements;
                    email = oldUser.email, password = oldUser.password;
                    email = email.value.split(' ').join('');
                    password = password.value.split(' ').join('');
                    return [4 /*yield*/, axios.get("/users/log-user?loginEmail=" + email + "&loginPassword=" + password)
                        // userLogedIn.addlogData(data)
                    ];
                case 2:
                    data = (_a.sent()).data;
                    // userLogedIn.addlogData(data)
                    site.user = data.oldUser[0];
                    localStorage.setItem('user', JSON.stringify(site.user));
                    if (!email || !password)
                        throw new Error("no email || password in handleLogInForm");
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2.message);
                    return [3 /*break*/, 4];
                case 4:
                    if (window.location.pathname.split("/").pop() == 'register.html')
                        window.location.href = "./account_page.html";
                    e.target.reset();
                    signIn = document.querySelector('.sign-in-form');
                    signIn.classList.toggle('in-vis');
                    return [2 /*return*/];
            }
        });
    });
}
function handleAccount() {
    var popUP = document.querySelector('.sign-in-form');
    if (site.user.userName) {
        popUP.innerHTML = "<p>Hi " + site.user.userName + "</p><button onclick=\"handleLogOut()\">Log Out</button>";
    }
    popUP.classList.toggle('in-vis');
}
function handleLogOut() {
    site.user = {};
    localStorage.clear();
    if (window.location.pathname.split("/").pop() == 'account_page.html')
        window.location.href = "./register.html";
    else
        location.reload();
}
function handleOnLoad() {
    return __awaiter(this, void 0, void 0, function () {
        var user, main, data, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user = JSON.parse(localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem('user'));
                    if (user)
                        site.user = user;
                    if (window.location.pathname.split("/").pop() == 'account_page.html') {
                        main = document.querySelector('.main-account');
                        main.innerHTML = "<h2>welcome back " + site.user.userName + "!</h2>\n                        <img src=\"" + site.user.url + "\">\n                        <h3>" + site.user.email + "</h3>\n                        <h3>Funds: " + site.user.fund + " BTC</h3>";
                    }
                    return [4 /*yield*/, axios.get('/arts/art-for-sale')];
                case 1:
                    data = (_a.sent()).data;
                    result = data.result;
                    console.log(result);
                    renderArtForSale(result);
                    return [2 /*return*/];
            }
        });
    });
}
function renderArtForSale(urls) {
    //אנדרו - לא מצליח לרנדר הכל
    //השעה כבר מאוחרת.. צריך לעשות תנאי שהיוזר שעשה לוגאין יראה רק יצירות שהן ---לא--- (!) שלו
    var images = document.querySelectorAll(".main__card__img");
    var renderImg = '';
    var elements = document.querySelectorAll('.main__card__author');
    var prices = document.querySelectorAll('.main__card__price');
    elements.forEach(function (element) {
        prices.forEach(function (price) {
            urls.forEach(function (url) {
                element.children.item(0).innerHTML = url.artName + " #nftArts";
                element.children.item(1).innerHTML = url.author + "'s Collection";
                price.children.item(0).innerHTML = "<label onclick=\"handleBuy('" + url._id + "', '" + url.price + "', '" + url.ownerId + "')\">Click here to buy in</label> " + url.price + "$";
            });
        });
    });
    images.forEach(function (img) {
        urls.forEach(function (url) {
            renderImg = "url('" + url.url + "')";
        });
        img.style.backgroundImage = renderImg;
    });
}
function handleBuy(id, priceToRemove, ownerId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(site.user._id);
                    return [4 /*yield*/, axios.patch('/users/buy-and-sell', { _id: site.user._id, priceToRemove: priceToRemove.valueAsNumber, ownerId: ownerId })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, axios.patch('/arts/buy-and-sell', { id: id, ownerId: ownerId })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleAccountRedirect() {
    if (site.user.userName)
        window.location.href = "./account_page.html";
    else
        window.location.href = "./register.html";
}
function handleAccountOption(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var page, html, main, _a, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    page = ev.target.id;
                    html = '';
                    main = document.querySelector('.main-account');
                    _a = page;
                    switch (_a) {
                        case 'main': return [3 /*break*/, 1];
                        case 'settings': return [3 /*break*/, 2];
                        case 'my art': return [3 /*break*/, 3];
                        case 'create': return [3 /*break*/, 5];
                        case 'sale': return [3 /*break*/, 6];
                    }
                    return [3 /*break*/, 7];
                case 1:
                    handleOnLoad();
                    return [2 /*return*/];
                case 2:
                    html = "<h2>Account Settings</h2>\n            <form onsubmit=\"handleSettingsForm(event)\">\n                <input type=\"text\" name=\"userName\" value=\"" + site.user.userName + "\">\n                <input type=\"submit\" value=\"update username\">\n            </form>\n            <form onsubmit=\"handleSettingsForm(event)\">\n                <input type=\"text\" name=\"email\" value=\"" + site.user.email + "\">\n                <input type=\"submit\" value=\"update email\">\n            </form>\n            <form onsubmit=\"handleSettingsForm(event)\">\n                <input type=\"text\" name=\"url\" value=\"" + site.user.url + "\">\n                <input type=\"submit\" value=\"update profile picture\">\n            </form>\n            <form onsubmit=\"handleSettingsForm(event)\">\n                <label for=\"oldPassword\">Old password</label>\n                <input type=\"text\" name=\"oldPassword\" value=\"\">\n                <label for=\"password\">New password</label>\n                <input type=\"text\" name=\"password\" value=\"\">\n                <label for=\"password2\">Confirm new password</label>\n                <input type=\"text\" name=\"password2\" value=\"\">\n                <input type=\"submit\" value=\"update password\">\n            </form>";
                    return [3 /*break*/, 7];
                case 3: return [4 /*yield*/, axios.get("/arts/get-user-art?userId=" + site.user._id)];
                case 4:
                    data = (_b.sent()).data;
                    site.arts = data;
                    html = "<h1>My Art</h1>\n                     <div class=\"art-grid\">";
                    data.forEach(function (art) {
                        html += "<div class=\"art-grid__card\">\n                        <img src=\"" + art.url + "\">\n                        <h3>" + art.artName + "</h3>\n                        <h4>by: " + art.author + "</h4>";
                        if (!art.forSale) {
                            html += "<button onclick=\"handleSale('" + art._id + "', event)\">sell</button>";
                        }
                        else {
                            html += "<h5>item was put on sale for " + art.price + " BTC</h5>\n                            <button onclick=\"handleCancelSale('" + art._id + "')\">Cancel Sale</button>";
                        }
                        html += "</div>";
                    });
                    html += "</div>";
                    return [3 /*break*/, 7];
                case 5:
                    html = "<h1>Add New Art!</h1>\n                    <h3>use the form below to add a new art to your collection, the cost of adding a new art is 3 BTC</h3>\n                    <h3>Funds: " + site.user.fund + " BTC</h3>\n                    <form onsubmit=\"handleAddArt(event)\">\n                        <label for=\"url\">Copy Image URL to here:</label>\n                        <input type=\"text\" name=\"url\">\n                        <label for=\"name\">Create a name for your Art:</label>\n                        <input type=\"text\" name=\"name\">\n                        <input type=\"submit\">\n                    </form>\n                    ";
                    return [3 /*break*/, 7];
                case 6:
                    html = "<h1>These are the items you listed for sale</h1>";
                    return [3 /*break*/, 7];
                case 7:
                    main.innerHTML = html;
                    return [2 /*return*/];
            }
        });
    });
}
function handleSettingsForm(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var toBeUpdated, value;
        return __generator(this, function (_a) {
            ev.preventDefault();
            toBeUpdated = ev.target[0].name;
            value = ev.target[0].value;
            console.log(toBeUpdated);
            if (toBeUpdated == 'password') {
                if (value == site.user.password) {
                    if (ev.target[1].value == ev.target[2].value) {
                        site.user[toBeUpdated] = ev.target[1].value;
                        axios.patch('/users/update-user', { user: site.user });
                        localStorage.setItem('user', JSON.stringify(site.user));
                    }
                    else {
                        // add alert passwords do not match
                    }
                }
                else {
                    // add alert wrong password
                }
            }
            else {
                site.user[toBeUpdated] = value;
                axios.patch('/users/update-user', { user: site.user });
                localStorage.setItem('user', JSON.stringify(site.user));
            }
            return [2 /*return*/];
        });
    });
}
;
function handleSale(artId, ev) {
    var artToSale = site.arts.filter(function (art) { return art._id == artId; })[0];
    var html = "<form class=\"art-grid__card\" onsubmit=\"handleSaleForm(event,'" + artToSale._id + "')\">\n                        <img src=\"" + artToSale.url + "\">\n                        <h3>" + artToSale.artName + "</h3>\n                        <h4>by: " + artToSale.author + "</h4>\n                        <label for=\"price\">enter a price</label>\n                        <input type=\"number\" name=\"price\" step=any></input>\n                        <input type=\"submit\" value=\"Sale\"></input>\n                        </form>";
    ev.target.parentElement.outerHTML = html;
}
function handleSaleForm(ev, artId) {
    return __awaiter(this, void 0, void 0, function () {
        var price, fakeEvent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    price = ev.target.price.value;
                    return [4 /*yield*/, axios.patch('/arts/putArtOnSale', { price: price, artId: artId })];
                case 1:
                    _a.sent();
                    fakeEvent = { target: { id: "my art" } };
                    handleAccountOption(fakeEvent);
                    return [2 /*return*/];
            }
        });
    });
}
function handleCancelSale(artId) {
    return __awaiter(this, void 0, void 0, function () {
        var fakeEvent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.patch('/arts/cancelSale', { artId: artId })];
                case 1:
                    _a.sent();
                    fakeEvent = { target: { id: "my art" } };
                    handleAccountOption(fakeEvent);
                    return [2 /*return*/];
            }
        });
    });
}
function handleAddArt(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var newArt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    newArt = { artName: ev.target.name.value, url: ev.target.url.value, author: site.user.userName };
                    return [4 /*yield*/, axios.post('/arts/add-art', { newArt: newArt, userId: site.user._id })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//sideBar
function handleStatusClick() {
    document.querySelector('.status-buttons').classList.toggle('toggle');
}
function handleOnSale() {
    var onSale = document.querySelector('.onSale');
    onSale.classList.toggle('hidden');
}
