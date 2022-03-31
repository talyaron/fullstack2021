// import axios from "axios";
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
function handleRegister(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, firstName, lastName, email, password, role, gender, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password, role = _a.role, gender = _a.gender;
                    firstName = firstName.value;
                    lastName = lastName.value;
                    email = email.value;
                    password = password.value;
                    role = role.value;
                    gender = gender.value;
                    return [4 /*yield*/, axios.post("/users/add-user", {
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            password: password,
                            role: role,
                            gender: gender
                        })];
                case 1:
                    data = (_b.sent()).data;
                    window.location.href = "/";
                    return [2 /*return*/];
            }
        });
    });
}
function handleLogin(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var email, password, userData, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    email = ev.target.elements.email.value;
                    password = ev.target.elements.password.value;
                    userData = {
                        email: email,
                        password: password
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.post("/users/log-in", userData).then(function (response) {
                            var status = response.data.ok;
                            var userExists = response.data.aUser;
                            var verifiedUser = response.data.verifiedUser;
                            var verifiedUserId = verifiedUser[0]._id;
                            if (!status)
                                throw new Error("no status");
                            if (status) {
                                window.location.href = "/home.html?id=" + verifiedUserId;
                            }
                            else if (userExists < 0) {
                                console.log("1");
                            }
                        })];
                case 2:
                    data = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log("error in handleLogin:");
                    console.log(error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleRenderUser(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, data, userInfo, user, name;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    userId = ev.target.location.search.replace(/.*?id=/g, "");
                    return [4 /*yield*/, axios.get("users/logged-in-user?userId=" + userId)];
                case 1:
                    data = (_a.sent()).data;
                    userInfo = data.userInfo;
                    user = userInfo[0];
                    name = document.querySelector("[data-name]");
                    name.innerHTML = user.firstName + " " + user.lastName + "<br><span>" + user.role + "</span>";
                    getUsersTasks(userId);
                    return [2 /*return*/];
            }
        });
    });
}
function handleRenderPage(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var userURL, requestedPage, data, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userURL = ev.target.baseURI;
                    requestedPage = ev.target.outerText.split(" ").join("");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    if (!(requestedPage === "home")) return [3 /*break*/, 3];
                    return [4 /*yield*/, axios
                            .post("/users/nav", { userURL: userURL, requestedPage: requestedPage })
                            .then(function (response) {
                            var _a = response.data, firstName = _a.firstName, lastName = _a.lastName, gender = _a.gender, role = _a.role;
                            renderHome(firstName, lastName, gender, role);
                            return;
                        })];
                case 2:
                    data = (_a.sent()).data;
                    return [2 /*return*/];
                case 3:
                    if (!(requestedPage === "RecentlyCreated")) return [3 /*break*/, 5];
                    return [4 /*yield*/, axios
                            .post("/tasks/nav ", { userURL: userURL, requestedPage: requestedPage })
                            .then(function (response) {
                            var _a = response.data, newURL = _a.newURL, currentUsersTasks = _a.currentUsersTasks;
                            console.log(newURL, currentUsersTasks);
                            window.location.href = newURL;
                            // renderRecentlyCreated(newURL ,tasks);
                        })];
                case 4:
                    data = (_a.sent()).data;
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_2 = _a.sent();
                    console.log("error in handleRenderPage:");
                    console.log(error_2.message);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function renderHome(firstName, lastName, gender, role) {
    var body = document.body;
    var html = "\n  <body onload=\"handleRenderUser(event)\">\n    <div id=\"landing\">\n        <div id=\"control\">\n            <div id=\"control__nav\">\n                <nav>\n                    <ul>\n                        <li id=\"home\">\n                            <a onclick=\"handleRenderPage(event)\">\n                                <i class=\"material-icons white-color\">home</i>\n                            </a>\n                        </li>\n                        <li id=\"chart\">\n                            <a onclick=\"handleRenderPage(ev)\">\n                                <i class=\"material-icons white-color\">settings</i>\n                            </a>\n                        </li>\n                        <li id=\"info\">\n                            <a onclick=\"handleRenderPage(ev)\">\n                                <i class=\"material-icons white-color\">info</i>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n        </div>\n        <div id=\"landing-home\">\n            <div id=\"landing-home__logo\">\n            <h1 data-name>" + firstName + " " + lastName + " <br><span>" + role + "</span></h1>\n            <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51Gk5jjB4qD-BkcDh_fhsE4HkfnLDblQPrQLaOY13u7v5MNoBea8JzZ5NZAa0G-gAcgY&usqp=CAU\"\n                    alt=\"\">\n            </div>\n            <div id=\"landing-home__search\">\n                <i class=\"material-icons\">search</i>\n                <input type=\"text\" placeholder=\"\">\n            </div>\n\n\n            <div id=\"landing-home__task\">\n                <h2>My Tasks</h2>\n                <div class=\"task\">\n                    <div class=\"icon icon__1\"><i class=\"material-icons\">list_alt</i></div>\n                    <p class=\"left\">To do</p>\n                    <p><span>5</span> tasks</p>\n                </div>\n                <div class=\"task\">\n                    <div class=\"icon icon__2\"><i class=\"material-icons\">drive_file_rename_outline</i></div>\n                    <p class=\"left\">In progress</p>\n                    <p><span>3</span> tasks</p>\n\n                </div>\n                <div class=\"task\">\n                    <div class=\"icon icon__3\"><i class=\"material-icons\">check_circle_outline</i>\n                    </div>\n                    <p class=\"left\">Done</p>\n                    <p> <span>12</span> tasks</p>\n\n                </div>\n            </div>\n            <div id=\"landing-home__recent\">\n                <div class=\"recent__title\">\n                    <h2><a onclick=\"handleRenderPage(event)\">Recently Created</a></h2>\n                    <i class=\"material-icons\">keyboard_arrow_right</i>\n                </div>\n\n\n                <div id=\"landing__task-count\">\n                    <div class=\"box box__home1\">\n                        <div id=\"box__flex\">\n                            <div class=\"box__header\">\n                                <div class=\"box__title\">\n                                    <p class=\"box__title-text box__title-home-text\">mobile app</p>\n                                </div>\n                            </div>\n                            <div class=\"box__expln box__expln-home\">\n                                <div class=\"flex-date\">\n                                    <i class=\"material-icons\">schedule</i>\n                                    <p>2 sep</p>\n                                </div>\n                            </div>\n                            <h4>high priority</h4>\n                        </div>\n                    </div>\n                    <div class=\"box box__home2\">\n                        <div id=\"box__flex\">\n                            <div class=\"box__header\">\n                                <div class=\"box__title\">\n                                    <p class=\"box__title-text box__title-home-text\">web</p>\n                                </div>\n                            </div>\n                            <div class=\"box__expln box__expln-home\">\n                                <div class=\"flex-date\">\n                                    <i class=\"material-icons\">schedule</i>\n                                    <p>30 nov</p>\n                                </div>\n                            </div>\n                            <h4>low priority</h4>\n                        </div>\n                    </div>\n                    <div class=\"box box__home3\">\n                        <div id=\"box__flex\">\n                            <div class=\"box__header\">\n                                <div class=\"box__title\">\n                                    <p class=\"box__title-text box__title-home-text\">PC</p>\n                                </div>\n                            </div>\n                            <div class=\"box__expln box__expln-home\">\n                                <div class=\"flex-date\">\n                                    <i class=\"material-icons\">schedule</i>\n                                    <p>25 dec</p>\n                                </div>\n                            </div>\n                            <h4>low priority</h4>\n                        </div>\n                    </div>\n\n\n\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n  ";
    body.outerHTML = html;
}
function handleRenderTasks(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var userURL, userId;
        return __generator(this, function (_a) {
            userURL = ev.target.baseURI;
            userId = userURL.split('/')[-24];
            console.log(userId);
            getUsersTasks(userId);
            return [2 /*return*/];
        });
    });
}
console.dir();
console.log(addGlobalEventListener);
addGlobalEventListener(onload, '#landing__task-count', getUsersTasks(window.location.href), {});
function getUsersTasks(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("tasks/getTasks?i=" + userId)];
                case 1:
                    data = (_a.sent()).data;
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.log("error in getUsersTasks:");
                    console.log(error_3.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function addGlobalEventListener(type, selector, callback, options, parent) {
    if (parent === void 0) { parent = document; }
    parent.addEventListener(type, function (e) {
        if (e.target.matches(selector))
            callback(e);
    }, options);
}
