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
                    //andrew - i added split and join because- maybe the user will space in between his email. So i erase spaces. You will se in the server - i'm using the email to figure if he is already registered
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
                    return [4 /*yield*/, axios.get("/users/log-user?loginEmail=" + email + "&loginPassword=" + password)];
                case 2:
                    data = (_a.sent()).data;
                    userLogedIn.addlogData(data);
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
    var user = JSON.parse(localStorage.getItem('user'));
    if (user)
        site.user = user;
    if (window.location.pathname.split("/").pop() == 'account_page.html') {
        var main = document.querySelector('.main-account');
        main.innerHTML = "<h2>welcome back " + site.user.userName + "!</h2>\n                        <img src=\"" + site.user.url + "\">\n                        <h3>" + site.user.email + "</h3>\n                        <h3>Funds: " + site.user.fund + " BTC</h3>";
    }
}
function handleAccountRedirect() {
    if (site.user.userName)
        window.location.href = "./account_page.html";
    else
        window.location.href = "./register.html";
}
function handleAccountOption(ev) {
    var page = ev.target.id;
    var html = '';
    var main = document.querySelector('.main-account');
    switch (page) {
        case 'main':
            handleOnLoad();
            return;
        case 'settings':
            html = "<h2>Account Settings</h2>\n            <form onsubmit=\"handleSettingsForm(event)\">\n                <input type=\"text\" name=\"userName\" value=\"" + site.user.userName + "\">\n                <input type=\"submit\" value=\"update username\">\n            </form>\n            <form onsubmit=\"handleSettingsForm(event)\">\n                <input type=\"text\" name=\"email\" value=\"" + site.user.email + "\">\n                <input type=\"submit\" value=\"update email\">\n            </form>\n            <form onsubmit=\"handleSettingsForm(event)\">\n                <input type=\"text\" name=\"url\" value=\"" + site.user.url + "\">\n                <input type=\"submit\" value=\"update profile picture\">\n            </form>\n            <form onsubmit=\"handleSettingsForm(event)\">\n                <label for=\"oldPassword\">Old password</label>\n                <input type=\"text\" name=\"oldPassword\" value=\"\">\n                <label for=\"password\">New password</label>\n                <input type=\"text\" name=\"password\" value=\"\">\n                <label for=\"password2\">Confirm new password</label>\n                <input type=\"text\" name=\"password2\" value=\"\">\n                <input type=\"submit\" value=\"update password\">\n            </form>";
            break;
        case 'stats':
            html = "<h1>Statistics</h1>";
            break;
        case 'create':
            html = "<h1>Add New Art!</h1>\n                    <h3>use the form below to add a new art to your collection, the cost of adding a new art is 3 BTC</h3>\n                    <h3>Funds: " + site.user.fund + " BTC</h3>\n                    <form onsubmit=\"handleAddArt(event)\">\n                        <label for=\"url\">Copy Image URL to here:</label>\n                        <input type=\"text\" name=\"url\">\n                        <label for=\"name\">Create a name for your Art:</label>\n                        <input type=\"text\" name=\"name\">\n                        <input type=\"submit\">\n                    </form>\n                    ";
            break;
        case 'sale':
            html = "<h1>These are the items you listed for sale</h1>";
            break;
    }
    main.innerHTML = html;
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
function handleAddArt(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var newArt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    newArt = { name: ev.target.name.value, url: ev.target.url.value, author: site.user.userName };
                    return [4 /*yield*/, axios.post('/users/add-art', { newArt: newArt, user: site.user })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// volatile database for current user and etc'
var site = {
    user: {}
};
//sideBar
function handleStatusClick() {
    document.querySelector('.status-buttons').classList.toggle('toggle');
}
function handleOnSale() {
    var onSale = document.querySelector('.onSale');
    onSale.classList.toggle('hidden');
}
