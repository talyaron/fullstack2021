var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function handleLoad(e) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1, form, username, email, password, password2, container;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/all-games")
                            .then(function (_a) {
                            var data = _a.data;
                            var root = document.querySelector('#root');
                            renderArticles(root, data);
                            // console.log(data);
                            if (!root)
                                throw new Error("no root in handleLoad");
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3:
                    form = document.getElementById('form');
                    username = document.getElementById('username');
                    email = document.getElementById('email');
                    password = document.getElementById('password');
                    password2 = document.getElementById('password2');
                    container = document.querySelector('.container');
                    container.style.visibility = "hidden";
                    setTimeout(function () {
                        container.style.visibility = 'visible';
                    }, 3000);
                    form.addEventListener('submit', function (e) {
                        e.preventDefault();
                        checkInputs(form, username, email, password, password2);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetGameById(e) {
    return __awaiter(this, void 0, void 0, function () {
        var id_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    id_1 = e.target.elements.id.value;
                    return [4 /*yield*/, axios.get("/get-game-by-id?search=" + id_1)
                            .then(function (_a) {
                            var data = _a.data;
                            var root = document.querySelector('#root');
                            var rootFindGame = document.querySelector('#rootFindGame');
                            if (data[0] === null) {
                                rootFindGame.innerHTML = "You have " + data[1] + " games";
                            }
                            else {
                                var arrayToRender = [data[0]];
                                rootFindGame.innerHTML = "You found the game, please see below. You can refresh the page to see all games";
                                renderArticles(root, arrayToRender);
                            }
                            if (!id_1)
                                throw new Error("no root or rootFindGame in handleGetGameById");
                            if (!id_1)
                                throw new Error("no id in handleGetGameById");
                        })];
                case 1:
                    _a.sent();
                    e.target.reset();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleaddGame(e) {
    return __awaiter(this, void 0, void 0, function () {
        var addGame, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    addGame = { name: e.target.elements.add.value, price: e.target.elements.price.valueAsNumber };
                    return [4 /*yield*/, axios.post('/add-game', { addGame: addGame })];
                case 1:
                    data = (_a.sent()).data;
                    // console.log(data);
                    if (!data)
                        throw new Error("no data in handleaddGame");
                    //}       
                    e.target.reset();
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderArticles(root, games) {
    try {
        if (!games || !root)
            throw new Error("no games || root in renderArticles");
        var html_1 = '';
        games.forEach(function (game) {
            html_1 += "<div class=\"card\">\n           <p>" + game.name + ": " + game.price + " ILS</p>\n           </div>\n           <form id=\"" + game.id + "\" class=\"updateGame\" onsubmit=\"handleUpdateGame(event)\">\n           <input type=\"text\" name=\"name\" id=\"\" placeholder=\"Please update the Game\">\n           <input type=\"number\" name=\"price\" id=\"\" placeholder=\"Please update the Price\">\n           <input type=\"submit\" value=\"Update\">\n           </form>";
        });
        root.innerHTML = html_1;
    }
    catch (error) {
        console.error(error);
    }
}
function handleUpdateGame(e) {
    return __awaiter(this, void 0, void 0, function () {
        var id, updateGame, data, root, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    e.preventDefault();
                    id = e.target.id;
                    updateGame = { name: e.target.elements.name.value, price: e.target.elements.price.valueAsNumber };
                    return [4 /*yield*/, axios.patch('update-game', __assign(__assign({}, updateGame), { id: id }))];
                case 1:
                    data = (_a.sent()).data;
                    root = document.querySelector('#root');
                    renderArticles(root, data);
                    // if (typeof updateGame.name === 'number'){
                    //}
                    if (!id)
                        throw new Error("no id in handleUpdateGame");
                    e.target.reset();
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
///client login
function checkInputs(form, username, email, password, password2) {
    return __awaiter(this, void 0, void 0, function () {
        var usernameValue, emailValue, passwordValue, password2Value, data, userInsideOrNot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    usernameValue = username.value.split(' ').join('');
                    emailValue = email.value.split(' ').join('');
                    passwordValue = password.value;
                    password2Value = password2.value;
                    if (usernameValue === '') {
                        setErrorFor(username, 'Username cannot be blank');
                    }
                    else {
                        setSuccessFor(username);
                    }
                    if (emailValue === '') {
                        setErrorFor(email, 'Email cannot be blank');
                    }
                    else {
                        setSuccessFor(email);
                    }
                    if (passwordValue === '') {
                        setErrorFor(password, 'Password cannot be blank');
                    }
                    else {
                        setSuccessFor(password);
                    }
                    if (password2Value === '') {
                        setErrorFor(password2, 'Password cannot be blank');
                    }
                    else if (passwordValue !== password2Value) {
                        setErrorFor(password2, 'Passwords are not matched');
                    }
                    else {
                        setSuccessFor(password2);
                    }
                    if (!(usernameValue !== '' && emailValue !== '' && passwordValue !== '' && password2Value !== '' && passwordValue === password2Value)) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios.post('/add-user', { username: usernameValue, email: emailValue, password: passwordValue })];
                case 1:
                    data = (_a.sent()).data;
                    userInsideOrNot = data.userInsideOrNot;
                    if (userInsideOrNot === true) {
                    }
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function setErrorFor(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function renderToRegister(usernameValue) {
    var sucssesToRegister = document.querySelector('#sucssesToRegister');
    var html = "<h1>Welcome " + usernameValue + "</h1>";
    setTimeout(function () {
        sucssesToRegister.className = 'sucssesToRegister sucess';
        sucssesToRegister.innerHTML = html;
    }, 2000);
    console.log(sucssesToRegister);
}
function handleLogin() {
    var container = document.querySelector('.container');
    var container2 = document.querySelector('.container2');
    container2.style.visibility = 'visible';
}
function showLoginForm(event) {
    return __awaiter(this, void 0, void 0, function () {
        var loginUserName, passwordValue, container2Root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    loginUserName = event.target.elements.usernameLogin.value;
                    passwordValue = event.target.elements.emailLogin.value;
                    container2Root = document.querySelector('#container2Root');
                    return [4 /*yield*/, axios.get("/get-password-and-username?loginName=" + loginUserName + "&loginPassword=" + passwordValue)
                            .then(function (_a) {
                            var data = _a.data;
                            if (data.check === true) {
                                var html = "<h4 style=\"color:#2ecc71;\">Welcome Back " + data.name + "!</h4>";
                                container2Root.innerHTML = html;
                                var container_1 = document.querySelector('.container');
                                var container2_1 = document.querySelector('.container2');
                                setTimeout(function () {
                                    container_1.style.visibility = "hidden";
                                    container2_1.style.visibility = "hidden";
                                }, 2000);
                            }
                            else {
                                var html2 = "<h4 style=\"color:red;\">Please Try Again</h4>";
                                container2Root.innerHTML = html2;
                            }
                        })];
                case 1:
                    _a.sent();
                    event.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
