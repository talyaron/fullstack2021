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
function showSignUpFrom(ev) {
    var display = document.querySelector('.main_display');
    // console.dir(ev.target);
    var btnId = ev.target.id;
    if (btnId == 'signUp') {
        forms.renderSignUpFormfirstPage(display);
    }
    else if (btnId == 'signIn') {
        forms.renderSignIn(display);
    }
    // console.log(btnId);
}
function HandleSettingsMenu() {
    var settings = document.querySelector(".settings");
    settings.classList.toggle("setting-active");
    var updateForm = document.querySelector('.settings_buttons-updateForm');
    updateForm.classList.toggle("updateForm");
}
function handleUpdateProfile(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, userData, imagesData, user, images;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = ev.target.id;
                    password = ev.target.name;
                    return [4 /*yield*/, axios.get("/user/get-user?email=" + email + "&password=" + password)];
                case 1:
                    userData = _a.sent();
                    return [4 /*yield*/, axios.get("/images/get-images?email=" + email + "&password=" + password)];
                case 2:
                    imagesData = _a.sent();
                    user = __assign({}, userData.data);
                    images = __assign({}, imagesData.data);
                    // console.log(user)
                    // console.log(images);
                    renderUpdateForm(user, images);
                    return [2 /*return*/];
            }
        });
    });
}
var forms = {
    renderSignUpFormfirstPage: function (display) {
        display.innerHTML = "\n        <form id=\"firstPage\" class=\"main_display-signUpForm\" onsubmit=\"newUserDetails(event)\" style=\"animation: signUpAnimation 2s 1s forwards;\">\n<h1 class=\"main_display-signUpForm-header\">enter details and create account</h1>\n<label class=\"\" style=\"color:white;\">birthday: </label>\n<input type=\"date\" name=\"birthDay\" id=\"birthDay\" style=\"background-color:gray\";>\n<input class=\"main_display-signUpForm-input\" type=\"text\" name=\"firstName\" id=\"firstName\" placeholder=\"Enter first name\">\n<input class=\"main_display-signUpForm-input\" type=\"text\" name=\"lastName\" id=\"lastName\" placeholder=\"Enter last name\">\n<input class=\"main_display-signUpForm-input\" type=\"text\" name=\"country\" id=\"country\" placeholder=\"your country\">\n<select class=\"main_display-signUpForm-genderSelect\" name=\"gender\" id=\"gender\">\n        <option hidden>Gender</option>\n        <option value=\"male\">Male</option>\n        <option value=\"female\">Female</option>\n        </select>  \n<input class=\"main_display-signUpForm-input\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"Create Password...\" required>\n<input class=\"main_display-signUpForm-input\" type=\"password\" name=\"passwordConfirm\" id=\"passwordConfirm\" placeholder=\"confirm password...\" required>\n<input class=\"main_display-signUpForm-input\" type=\"email\" name=\"email\" id=\"email\" placeholder=\" Enter email...\" required>\n<input class=\"main_display-signUpForm-submit\" name=\"submit\" type=\"submit\" href=\"proflie.html\" value=\"Go to profile\">\n</form>";
    }, renderSignIn: function (display) {
        display.innerHTML = "\n    <form class=\"main_display-signInForm\" style=\"animation: signInAnimation 1.5s 1s forwards;\" onsubmit=\"HandleLogin(event)\">\n    <label class=\"main_display-signInForm-label\">enter your email : \n    <input class=\"main_display-signInForm-input\" type=\"email\" name=\"email\" id=\"email\">\n    </label> \n    <label class=\"main_display-signInForm-label\">enter password :\n    <input class=\"main_display-signInForm-input\" type=\"password\" name=\"password\" id=\"password\">\n    </label>\n    <button class=\"main_display-signInForm-submit\" type=\"submit\" name=\"logInSubmit\" id=\"logInSubmit\">log in</button>  \n    </form>";
    }
};
function renderProfile(email, password) {
    return __awaiter(this, void 0, void 0, function () {
        var userData, imagesData, i, error, user, imgs, display, html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/user/get-user?email=" + email + "&password=" + password)];
                case 1:
                    userData = _a.sent();
                    return [4 /*yield*/, axios.get("/images/get-images?email=" + email + "&password=" + password)];
                case 2:
                    imagesData = _a.sent();
                    i = 0;
                    error = userData.data.error;
                    if (error) {
                        alert(error);
                    }
                    else {
                        user = __assign({}, userData.data.result[0]);
                        imgs = __assign({}, imagesData.data.result[0]);
                        display = document.querySelector('.main');
                        html = "";
                        html += "<section class=\"profile\">\n\n    <div class=\"profile__navBar--top\">\n        <a href=\"index.html\"><i class=\"fas fa-arrow-left fa-xs\"></i></a>\n        <i class=\"fas fa-wrench fa-xs\" onclick=\"HandleSettingsMenu()\"></i>\n    </div>\n    <nav class=\"settings\">\n    <li><button class=\"settings_buttons\" id=\"" + user.email + "\" name=\"" + user.password + "\" onclick='handleUpdateProfile(event)'>update Profile</button></li>\n    <li><button class=\"settings_buttons delete\" id=\"" + user.email + "\" onclick=\"handleDeleteProfile(event)\">delete user</button></li>\n    <div id='updateRoot'></div>\n    </nav>\n    <div id=\"profilePic\"></div>\n    <div class=\"profile__header\">\n        <div class=\"profile__header__imgBorder\"  style=\"background-image: url(" + imgs.profileUrl + ")\">\n        <button class=\"profile__header__imgBorder-changeImage\" name=\"" + user.email + "\"\n        id=\"" + imgs.profileUrl + "\" lang=\"" + user.password + "\" \"type=\"button\" onclick=\"showProfilePicture(event)\">View</button>\n        </div>\n        <div class=\"profile__header__name\">" + user.firstName + " " + user.lastName + "</div>\n        <div class=\"profile__header__birthday\">" + user.birthday + "</div>\n        <div class=\"profile__header__country\">" + user.country + "</div>\n        <div class=\"profile__header__gender\">" + user.gender + "</div>\n        \n        <button class=\"profile__header__addButton\" name=\"" + user.password + "\" id=\"" + user.email + "\" onclick=\"AddImage(event)\">Add Post</button>\n    </div>\n    <div id=\"addPost\"></div>\n   \n    \n    <div class=\"profile__user__pics\"></div>\n        <div class=\"profile__navBar--down\">\n    <div class=\"homeIcon\"><a href=\"index.html\"><i class=\"fas fa-home\"></i></a></div>\n    <div class=\"profileIcon\"><i class=\"fas fa-user\"></i></div>\n    <div class=\"compassIcon\" onclick=\"browserUser(event)\"><a href=\"browse.html\"><i class=\"fas fa-compass\"></i></a></div>\n    <div class=\"heartIcon\"><i class=\"fas fa-heart\"></i></div>\n    </div>\n    </section>";
                        display.innerHTML = html;
                        renderUserImgs(imgs);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function renderUserImgs(list) {
    return __awaiter(this, void 0, void 0, function () {
        var html, imgs, display;
        return __generator(this, function (_a) {
            html = " ";
            imgs = list.url;
            display = document.querySelector('.profile__user__pics');
            imgs.forEach(function (img) {
                html += "<div class=\"profile__user__pics-userPics\" style=\"background-image:url(" + img + ");\"></div>";
            });
            display.innerHTML = html;
            return [2 /*return*/];
        });
    });
}
function AddImage(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, root, html;
        return __generator(this, function (_a) {
            email = ev.target.id;
            password = ev.target.name;
            root = document.querySelector("#addPost");
            html = "";
            html = "<form name=\"" + password + "\" id=\"" + email + "\" onsubmit=\"handleAddImage(event)\">\n    <input type=\"text\" name=\"newPostUrl\" placeholder=\"add Url Post\">\n    <input type=\"submit\" value=\"submit\">\n    </form>";
            root.innerHTML = html;
            return [2 /*return*/];
        });
    });
}
function handleAddImage(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, url, _a, ok, data, error, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    email = ev.target.id;
                    password = ev.target.name;
                    url = ev.target.elements.newPostUrl.value;
                    console.log(email);
                    console.log(url);
                    return [4 /*yield*/, axios.patch('/images/add-post', { email: email, url: url })];
                case 1:
                    _a = _b.sent(), ok = _a.ok, data = _a.data, error = _a.error;
                    renderProfile(email, password);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _b.sent();
                    console.error(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderUpdateForm(user, imgs) {
    var root = document.querySelector("#updateRoot");
    var html = "";
    html += " <form class=\"settings_buttons-updateForm\" name=\"" + user.result[0].password + "\"  id=\"" + user.result[0].email + "\" onsubmit=\"HandleUpdate(event)\">\n    <input class=\"settings_buttons-updateForm-input\" type=\"text\" name=\"firstName\" value=\"" + user.result[0].firstName + "\" id=\"firstName\" >\n    <input class=\"settings_buttons-updateForm-input\" type=\"text\" name=\"lastName\" value=\"" + user.result[0].lastName + "\" id=\"lastName\">\n    <input class=\"settings_buttons-updateForm-input\" type=\"text\" name=\"country\" value=\"" + user.result[0].country + "\" id=\"country\" >\n    <input class=\"settings_buttons-updateForm-submit\" type=\"submit\" value=\"Update Profile\">\n    </form>";
    root.innerHTML = html;
}
function HandleLogin(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var password, email;
        return __generator(this, function (_a) {
            try {
                ev.preventDefault();
                password = ev.target.elements.password.value;
                email = ev.target.elements.email.value;
                // console.log(email);
                // const userData = await axios.get(`/user/get-user?email=${email}&password=${password}`);
                // const imagesData = await axios.get(`/images/get-images?email=${email}&password=${password}`);
                // const user = { ...userData.data };
                // const images = { ...imagesData.data };
                // console.log(user);
                // console.log(images);
                localStorage.setItem("UserEmail", JSON.stringify("" + email));
                localStorage.setItem("UserPassword", JSON.stringify("" + password));
                renderProfile(email, password);
            }
            catch (error) {
                console.error(error.message);
            }
            return [2 /*return*/];
        });
    });
}
function newUserDetails(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var form, display, birthday, firstName, lastName, country, gender, password, email, _i, _a, field, newUser, userData, imagesData;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    form = ev.target;
                    display = document.querySelector('.main_display');
                    for (_i = 0, _a = ev.target; _i < _a.length; _i++) {
                        field = _a[_i];
                        if (field.name !== "submit") {
                            if (field.name == "birthDay") {
                                birthday = field.value;
                            }
                            else if (field.name == "firstName") {
                                firstName = field.value;
                            }
                            else if (field.name == "lastName") {
                                lastName = field.value;
                            }
                            else if (field.name == "country") {
                                country = field.value;
                            }
                            else if (field.name == "gender") {
                                gender = field.value;
                            }
                            else if (field.name == "password") {
                                password = field.value;
                            }
                            else if (field.name == "email") {
                                email = field.value;
                            }
                        }
                    }
                    newUser = { firstName: firstName, lastName: lastName, birthday: birthday, country: country, password: password, email: email, gender: gender };
                    return [4 /*yield*/, axios.post('/user/add-user', { newUser: newUser })];
                case 1:
                    userData = _b.sent();
                    return [4 /*yield*/, axios.post('/images/add-images', { email: email, password: password })];
                case 2:
                    imagesData = _b.sent();
                    // const user = { ...userData.data };
                    // const images = { ...imagesData.data };
                    renderProfile(email, password);
                    return [2 /*return*/];
            }
        });
    });
}
function HandleUpdate(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, firstName, lastName, country, _i, _a, field, updateUser, _b, ok, error, err_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    email = ev.target.id;
                    password = ev.target.name;
                    firstName = void 0, lastName = void 0, country = void 0;
                    for (_i = 0, _a = ev.target; _i < _a.length; _i++) {
                        field = _a[_i];
                        if (field.name !== "submit") {
                            if (field.name == "firstName") {
                                firstName = field.value;
                            }
                            else if (field.name == "lastName") {
                                lastName = field.value;
                            }
                            else if (field.name == "country") {
                                country = field.value;
                            }
                        }
                    }
                    updateUser = { firstName: firstName, lastName: lastName, country: country, email: email };
                    return [4 /*yield*/, axios.patch('/user/update-user', updateUser)];
                case 1:
                    _b = _c.sent(), ok = _b.ok, error = _b.error;
                    renderProfile(email, password);
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _c.sent();
                    console.error(err_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteProfile(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var email, images, data, deleleImages, error, results, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = ev.target.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, axios["delete"]("/images/delete-images", { data: { email: email } })];
                case 2:
                    images = (_a.sent()).images;
                    return [4 /*yield*/, axios["delete"]("/user/delete-user", { data: { email: email } })];
                case 3:
                    data = (_a.sent()).data;
                    deleleImages = images;
                    error = data.error, results = data.results;
                    deleteAlert(results);
                    if (error)
                        throw new Error(error);
                    console.log(results);
                    return [3 /*break*/, 5];
                case 4:
                    err_3 = _a.sent();
                    console.error(err_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function deleteAlert(results) {
    return __awaiter(this, void 0, void 0, function () {
        var display, html;
        return __generator(this, function (_a) {
            display = document.querySelector('.main');
            html = " ";
            html = " <div class=\"profile__header-deleteMessage\">\n    <h1 class=\"profile__header-deleteMessage-message\">" + results + "</h1>\n    <a href=\"index.html\"><button type=\"\"button\" class=\"profile__header-deleteMessage-btn\">Ok</button></a>\n        ";
            display.innerHTML = html;
            return [2 /*return*/];
        });
    });
}
function showProfilePicture(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var email, profileImg, password, header, root, html;
        return __generator(this, function (_a) {
            email = ev.target.name;
            profileImg = ev.target.id;
            password = ev.target.lang;
            header = document.querySelector(".profile__header");
            header.style.opacity = "0.2";
            root = document.querySelector('#profilePic');
            html = "";
            html = "  \n    <div class=\"profile-active\" style=\"background-image: url(" + profileImg + ");\">\n    <div class=\"exit\"><i class=\"fas fa-check\" id=\"" + email + "\" lang=\"" + password + "\" onclick=\"handleExit(event)\"></i></div>\n    <form class=\"profile-active__input\" id=\"" + email + "\" onsubmit=\"handleUpdateProfilePic(event)\">\n     <input class=\"profile-active__input\" name=\"newUrl\" \"type=\"text\" placeholder=\"New Profile url\" >\n     <input type=\"submit\" value=\"submit\">\n     </form>\n    </div>";
            root.innerHTML = html;
            return [2 /*return*/];
        });
    });
}
function handleExit(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password;
        return __generator(this, function (_a) {
            email = ev.target.id;
            password = ev.target.lang;
            renderProfile(email, password);
            return [2 /*return*/];
        });
    });
}
function handleUpdateProfilePic(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var email, newImg, _a, update, ok, error, err_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    console.dir(ev.target);
                    ev.preventDefault();
                    email = ev.target.id;
                    newImg = ev.target.elements.newUrl.value;
                    return [4 /*yield*/, axios.patch('/images/update-profile-img', { email: email, newImg: newImg })];
                case 1:
                    _a = _b.sent(), update = _a.update, ok = _a.ok, error = _a.error;
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _b.sent();
                    console.error(err_4.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function userCategoryActive(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var id, categories, category;
        return __generator(this, function (_a) {
            id = ev.target.id;
            categories = document.querySelectorAll(".profile__user__category__text");
            categories.forEach(function (cat) {
                cat.classList.remove("profile__user__category__text--active");
            });
            category = ev.target;
            category.classList.add("profile__user__category__text--active");
            return [2 /*return*/];
        });
    });
}
function browserUser() {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, _a, ok, data, error, usersProfileImgsList, err_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    email = JSON.parse(localStorage.getItem("UserEmail"));
                    password = JSON.parse(localStorage.getItem("UserPassword"));
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.patch('/images/get-users-profieImg', { email: email })];
                case 2:
                    _a = _b.sent(), ok = _a.ok, data = _a.data, error = _a.error;
                    if (error)
                        throw new Error(error);
                    usersProfileImgsList = data.profileImgs;
                    renderbrowseImgs(usersProfileImgsList);
                    return [3 /*break*/, 4];
                case 3:
                    err_5 = _b.sent();
                    console.error(err_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderbrowseImgs(list) {
    var display = document.querySelector('.browseMain_display');
    var html = " ";
    list.forEach(function (user) {
        html += "<div class=\"browseMain_display-userCard\" style=\"background-image:url(" + user.img + ")\">\n        <div class=\"browseMain_display-userCard-name\">" + user.userEmail + "</div>\n        <button class=\"browseMain_display-userCard-addFriendBtn\" type=\"button\">Add Friend</button>\n        </div>";
    });
    display.innerHTML = html;
}
function profileButton() {
    var email = JSON.parse(localStorage.getItem("UserEmail"));
    var password = JSON.parse(localStorage.getItem("UserPassword"));
    renderProfile(email, password);
}
