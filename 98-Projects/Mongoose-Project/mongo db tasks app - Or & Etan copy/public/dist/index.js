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
        var registerStatus, _a, firstName, lastName, email, password, role, gender, data, aUser;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    registerStatus = document.querySelector('[data-register-status]');
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
                    aUser = data.aUser;
                    if (aUser) {
                        registerStatus.innerHTML = "<h2>hello " + aUser.firstName + ", you seem to already have an account under that email!<h2> <a href=\"/\">Log in here</a>";
                        return [2 /*return*/];
                    }
                    window.location.href = "/";
                    return [2 /*return*/];
            }
        });
    });
}
function handleLogin(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var passwordStatus, email, password, userData, data, ok, aUser, verifiedUser, userId, verifiedUserId, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    passwordStatus = document.querySelector('[data-password-status]');
                    email = ev.target.elements.email.value;
                    password = ev.target.elements.password.value;
                    userData = {
                        email: email,
                        password: password
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios
                            .post("/users/log-in", userData)];
                case 2:
                    data = (_a.sent()).data;
                    ok = data.ok, aUser = data.aUser, verifiedUser = data.verifiedUser, userId = data.userId;
                    verifiedUserId = userId;
                    passwordStatus.style.color = '';
                    passwordStatus.innerHTML = '';
                    if (aUser) {
                        passwordStatus.style.color = 'red';
                        passwordStatus.innerHTML = "<h1>*Wrong password!</h1>";
                    }
                    if (!aUser && !ok) {
                        passwordStatus.innerHTML = "<h2>This email doesn't seem to exist in out database, Try again, or register bellow:</h2>";
                        return [2 /*return*/];
                    }
                    if (!ok)
                        throw new Error("no ok");
                    if (ok) {
                        window.location.href = "/home.html?id=" + verifiedUserId;
                    }
                    return [2 /*return*/];
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
function handleRenderHome(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var currentPage, userId, data, userInfo, decoded, user, name, gender, lowTasks, mediumTasks, highTasks, arr, low, medium, high;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    currentPage = ev.target.title;
                    userId = ev.target.location.search.replace(/.*?id=/g, "");
                    return [4 /*yield*/, axios.get("users/logged-in-user?userId=" + userId)];
                case 1:
                    data = (_a.sent()).data;
                    userInfo = data.userInfo, decoded = data.decoded;
                    getUsersTasks(userId, currentPage);
                    user = userInfo[0];
                    name = document.querySelector("[data-name]");
                    gender = document.querySelector("[data-gender]");
                    name.innerHTML = user.firstName + " " + user.lastName + "<br><span>" + user.role + "</span>";
                    if (user.gender === "male") {
                        gender.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51Gk5jjB4qD-BkcDh_fhsE4HkfnLDblQPrQLaOY13u7v5MNoBea8JzZ5NZAa0G-gAcgY&usqp=CAU";
                    }
                    else {
                        gender.src = "https://static.vecteezy.com/system/resources/thumbnails/002/586/938/small/woman-cartoon-character-portrait-brunette-female-round-line-icon-free-vector.jpg";
                    }
                    lowTasks = document.querySelector("[data-low]");
                    mediumTasks = document.querySelector("[data-medium]");
                    highTasks = document.querySelector("[data-high]");
                    return [4 /*yield*/, Promise.all([handleGetUrgencies(userId)])];
                case 2:
                    arr = _a.sent();
                    low = arr[0][0];
                    lowTasks.innerHTML = low.length;
                    medium = arr[0][1];
                    mediumTasks.innerHTML = medium.length;
                    high = arr[0][2];
                    highTasks.innerHTML = high.length;
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetUrgencies(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, lowUrgency, mediumUrgency, highUrgency, arr;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("tasks/get-urgencies?userId=" + userId)];
                case 1:
                    data = (_a.sent()).data;
                    lowUrgency = data.lowUrgency, mediumUrgency = data.mediumUrgency, highUrgency = data.highUrgency;
                    arr = [lowUrgency, mediumUrgency, highUrgency];
                    return [2 /*return*/, arr];
            }
        });
    });
}
function handleRenderRecentlyCreated(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var currentPage, userId, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    currentPage = ev.target.title.split(" ").join("");
                    userId = ev.target.location.search.replace(/.*?id=/g, "");
                    return [4 /*yield*/, axios.get("users/logged-in-user?userId=" + userId)];
                case 1:
                    data = (_a.sent()).data;
                    getUsersTasks(userId, currentPage);
                    return [2 /*return*/];
            }
        });
    });
}
function handleRenderSettings(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var currentPage, userId, settingsForm, data, userInfo, html, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    currentPage = ev.target.title;
                    userId = ev.target.location.search.replace(/.*?id=/g, "");
                    settingsForm = document.querySelector("[data-settings]");
                    return [4 /*yield*/, axios.get("users/logged-in-user?userId=" + userId)];
                case 1:
                    data = (_a.sent()).data;
                    userInfo = data.userInfo;
                    html = "";
                    user = userInfo[0];
                    html = "<form name=\"userUpdate\" id=\"userUpdate\" onsubmit=\"handleUserUpdate(event)\">\n  <h1>Update Your information</h1>\n  \n  <fieldset form=\"userUpdate\">\n  <legend>Personal Settings</legend>\n  <lable>First Name:</lable>\n  <input type=\"text\" name=\"firstNameUpdate\" value=\"" + user.firstName + "\" placeholder=\"" + user.firstName + "\">\n  <br>\n  <lable>Last Name:</lable>\n  <input type=\"text\" name=\"lastNameUpdate\" value=\"" + user.lastName + "\" placeholder=\"" + user.lastName + "\">\n  </fieldset>\n  <fieldset form=\"userUpdate\">\n  <legend>Account Settings</legend>\n  <lable>Email:</lable>\n  <input type=\"email\" name=\"emailUpdate\" value=\"" + user.email + "\" placeholder=\"" + user.email + "\">\n  <br>\n  <lable>Gender:</lable>\n  <select name=\"genderUpdate\" id=\"genderUpdate\"> \n  <option selected disabled value=\"" + user.gender + "\">" + user.gender + "</option>\n  <option value=\"male\">Male</option>\n  <option value=\"female\">Female</option>\n  </select>\n  <br>\n  <lable>Role:</lable>\n  <input type=\"text\" name=\"roleUpdate\" value=\"" + user.role + "\" placeholder=\"" + user.role + "\">\n  <br>\n  <lable>Password:</lable>\n  <input type=\"password\" name=\"passwordUpdate\" value=\"\" placeholder=\"Enter new password\">\n  \n  </fieldset>\n  <fieldset form=\"userUpdate\">\n  <legend>Password Confirmation</legend>\n  <h4>to save any of your settings changes, Enter your pass&shy;word bellow:</h4>\n  <input type=\"password\" name=\"passwordConfirmation\" placeholder=\"your current/old password\">\n  <input type=\"submit\" value=\"update info!\">\n  </fieldset>\n  <h6 data-password-status></h6>\n  </form>";
                    settingsForm.innerHTML = html;
                    return [2 /*return*/];
            }
        });
    });
}
function handleUserUpdate(ev) {
    var _a, _b, _c, _d, _e, _f, _g;
    return __awaiter(this, void 0, void 0, function () {
        var userId, passwordStatus_1, firstNameUpdate, lastNameUpdate, emailUpdate, genderUpdate, roleUpdate, passwordUpdate, passwordConfirmation, data;
        return __generator(this, function (_h) {
            ev.preventDefault();
            try {
                userId = ev.target.baseURI.slice(-24);
                passwordStatus_1 = document.querySelector("[data-password-status]");
                firstNameUpdate = (_a = ev.target.elements.firstNameUpdate) === null || _a === void 0 ? void 0 : _a.value;
                lastNameUpdate = (_b = ev.target.elements.lastNameUpdate) === null || _b === void 0 ? void 0 : _b.value;
                emailUpdate = (_c = ev.target.elements.emailUpdate) === null || _c === void 0 ? void 0 : _c.value;
                genderUpdate = (_d = ev.target.elements.genderUpdate) === null || _d === void 0 ? void 0 : _d.value;
                roleUpdate = (_e = ev.target.elements.roleUpdate) === null || _e === void 0 ? void 0 : _e.value;
                passwordUpdate = (_f = ev.target.elements.passwordUpdate) === null || _f === void 0 ? void 0 : _f.value;
                passwordConfirmation = (_g = ev.target.elements.passwordConfirmation) === null || _g === void 0 ? void 0 : _g.value;
                data = axios
                    .patch("/users/settings", {
                    firstNameUpdate: firstNameUpdate,
                    lastNameUpdate: lastNameUpdate,
                    emailUpdate: emailUpdate,
                    genderUpdate: genderUpdate,
                    roleUpdate: roleUpdate,
                    passwordUpdate: passwordUpdate,
                    passwordConfirmation: passwordConfirmation,
                    userId: userId
                })
                    .then(function (data) {
                    var _a = data.data, updatedUser = _a.updatedUser, updateStatus = _a.updateStatus;
                    passwordStatus_1.style.color = "";
                    if (updatedUser === undefined) {
                        passwordStatus_1.style.color = 'red';
                        passwordStatus_1.innerHTML = "*You Either put in the wrong password or no password at all, TRY AGAIN!";
                        return;
                    }
                    if (updateStatus === undefined) {
                        passwordStatus_1.innerHTML = "<h2>Your Inxrformation was updated successfully</h2>";
                    }
                }).data;
                // const {updatedUser} = data;
                // }else{
                // }
            }
            catch (error) {
                console.log(error);
                console.log({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
function handlePasswordCheck(password, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var data, isRightPassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.post("/users/passwordCheck", {
                        password: password,
                        userId: userId
                    })];
                case 1:
                    data = (_a.sent()).data;
                    isRightPassword = data.isRightPassword;
                    if (isRightPassword.length > 0) {
                        return [2 /*return*/, true];
                    }
                    else
                        return [2 /*return*/, false];
                    return [2 /*return*/];
            }
        });
    });
}
function handlePageChange(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var userURL, requestedPage, data, data, newURL, data, newURL, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userURL = ev.target.baseURI;
                    requestedPage = ev.target.outerText.split(" ").join("");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 10, , 11]);
                    if (!(requestedPage === "home")) return [3 /*break*/, 3];
                    return [4 /*yield*/, axios
                            .post("/users/nav", { userURL: userURL, requestedPage: requestedPage })
                            .then(function (response) {
                            var newURL = response.data.newURL;
                            window.location.href = newURL;
                        })];
                case 2:
                    data = (_a.sent()).data;
                    _a.label = 3;
                case 3:
                    if (!(requestedPage === "settings")) return [3 /*break*/, 5];
                    return [4 /*yield*/, axios.post("/users/nav", {
                            userURL: userURL,
                            requestedPage: requestedPage
                        })];
                case 4:
                    data = (_a.sent()).data;
                    newURL = data.newURL;
                    window.location.href = newURL;
                    _a.label = 5;
                case 5:
                    if (!(requestedPage === "info")) return [3 /*break*/, 7];
                    return [4 /*yield*/, axios.post("/users/nav", {
                            userURL: userURL,
                            requestedPage: requestedPage
                        })];
                case 6:
                    data = (_a.sent()).data;
                    newURL = data.newURL;
                    window.location.href = newURL;
                    _a.label = 7;
                case 7:
                    if (!(requestedPage === "RecentlyCreated")) return [3 /*break*/, 9];
                    return [4 /*yield*/, axios.post("/users/nav", {
                            userURL: userURL,
                            requestedPage: requestedPage
                        })
                            .then(function (response) {
                            var newURL = response.data.newURL;
                            window.location.href = newURL;
                        })];
                case 8:
                    data = (_a.sent()).data;
                    _a.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    error_2 = _a.sent();
                    console.log("error in handleRenderPage:");
                    console.log(error_2.message);
                    return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    });
}
function getUsersTasks(userId, currentPage) {
    return __awaiter(this, void 0, void 0, function () {
        var data, currentUsersTasks, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("tasks/getTasks?ownerId=" + userId)];
                case 1:
                    data = (_a.sent()).data;
                    currentUsersTasks = data;
                    renderTasks(currentUsersTasks, currentPage);
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
function renderTasks(currentUsersTasks, currentPage) {
    return __awaiter(this, void 0, void 0, function () {
        var html, formHtml, tasksRoot, tasksCount, counterRoot, tasksRoot, nextRoot, nextTask, formField;
        return __generator(this, function (_a) {
            sortTasksByDate(currentUsersTasks);
            html = "";
            formHtml = "";
            try {
                if (currentPage === "Home") {
                    tasksRoot = document.querySelector("[data-box-root]");
                    tasksCount = document.querySelector("[data-task-count]");
                    currentUsersTasks.forEach(function (task) {
                        html += "\n    <div class=\"box " + task.urgency + "\">\n                          <div id=\"box__flex\">\n                              <div class=\"box__header\">\n                                  <div class=\"box__title\">\n                                      <p class=\"box__title-text box__title-home-text\">" + task.title + "</p>\n                                  </div>\n                              </div>\n                              <div class=\"box__expln box__expln-home\">\n                                  <div class=\"flex-date\">\n                                      <i class=\"material-icons\">schedule</i>\n                                      <p>" + task.date + "</p>\n                                  </div>\n                              </div>\n                              <h4>" + task.urgency + " priority</h4>\n                          </div>\n                      </div>";
                    });
                    tasksRoot.innerHTML = html;
                    return [2 /*return*/];
                }
                if (currentPage === "RecentlyCreated") {
                    counterRoot = document.querySelector("[data-counter]");
                    counterRoot.innerHTML = currentUsersTasks.length;
                    tasksRoot = document.querySelector("[data-box-root]");
                    nextRoot = document.querySelector("[data-next-root]");
                    currentUsersTasks.forEach(function (task) {
                        if (task.description.length > 20) {
                            task.descriptionShorted = task.description.substring(0, 15) + "...";
                        }
                        else {
                            task.descriptionShorted = task.description;
                        }
                        if (!task.checked) {
                            html += "\n     <li class=\"box\">\n                      <div id=\"box__flex\">\n                          <div class=\"box__header\">\n                              <div class=\"box__logo-square " + task.urgency + "\">\n                                  <p style=\"color: " + task.color + "\" class=\"box__logo\">B\u0113</p>\n                              </div>\n                              <div  class=\"box__title\">\n                                  <p style=\"color: " + task.color + "\" class=\"box__title-text\">" + task.title + "</p>\n                                  <p class=\"box__title-urg\">" + task.urgency + "</p>\n                              </div>\n\n                              <i data-id=\"" + task._id + "\" onclick=\"renderTaskModal(event)\" class=\"fas fa-edit\"></i>\n\n                          </div>\n                          <div class=\"box__expln\">\n                              <h4>" + task.descriptionShorted + "</h4>\n                              <p class=\"box__expln-transp\">" + task.location + "</p>\n                          </div>\n                          <div  class=\"box__countdown\">" + task.date + "\n                          <a class=\"fas fa-check\" data-check=\"" + task._id + "\" onclick=\"handleTaskCheck(event)\"></a>\n                          </div>\n                          <a onclick=\"handleTaskDelete(event)\" class=\"box__delete\">\n                          <i data-delete=\"" + task._id + "\" class=\"fas fa-trash-alt\"></i>\n                          </a></div>\n                      </div>\n\n                  </li>";
                            return;
                        }
                        html += "\n        <li class=\"box\">\n        <del>\n                      <div id=\"box__flex\">\n                          <div class=\"box__header\">\n                              <div class=\"box__logo-square " + task.urgency + "\">\n                                  <p style=\"color: " + task.color + "\" class=\"box__logo\">B\u0113</p>\n                              </div>\n                              <div  class=\"box__title\">\n                                  <p style=\"color: " + task.color + "\" class=\"box__title-text\">" + task.title + "</p>\n                                  <p class=\"box__title-urg\">" + task.urgency + "</p>\n                              </div>\n\n                              <i data-id=\"" + task._id + "\" onclick=\"renderTaskModal(event)\" class=\"fas fa-edit\"></i>\n\n                          </div>\n                          <div class=\"box__expln\">\n                              <h4>" + task.descriptionShorted + "</h4>\n                              <p class=\"box__expln-transp\">" + task.location + "</p>\n                          </div>\n                          <div  class=\"box__countdown\">" + task.date + "\n                          <a class=\"fas fa-check\" data-check=\"" + task._id + "\" onclick=\"handleTaskCheck(event)\"></a>\n                          </div>\n                          <a onclick=\"handleTaskDelete(event)\" class=\"box__delete\">\n                          <i data-delete=\"" + task._id + "\" class=\"fas fa-trash-alt\"></i>\n                          </a></div>\n                      </div>\n                      </del>\n                  </li>";
                    });
                    nextTask = getNextTask(currentUsersTasks);
                    tasksRoot.innerHTML = html;
                    if (nextTask) {
                        formHtml = "\n    <input onchange=\"handleColor(event)\" type=\"color\" name=\"color\" id=\"color\" value=\"" + nextTask.color + "\">\n                        <div  class=\"task-title\">\n                            <input type=\"text\" name=\"title\" id=\"title\" value=\"" + nextTask.title + "\">\n                        </div>\n                        <div class=\"task-urg\">\n                            <select type=\"text\" name=\"urgency\" id=\"urg\">\n                            <option selected disabled value=\"" + nextTask.urgency + "\">" + nextTask.urgency + "</option>\n                            <option value=\"high\">High</option>\n                                <option value=\"medium\">Medium</option>\n                                <option value=\"low\">Low</option>\n                            </select>\n                            \n                        </div>\n                        <div class=\"task-description\">\n                            <input type=\"text\" name=\"description\" id=\"description\" value=\"" + nextTask.description + "\">\n                        </div>\n                        <div class=\"task-location\">\n                            <input type=\"text\" name='location' id='owner' value=\"" + nextTask.location + "\">\n                        </div>\n                        <div class=\"task-time\">\n                            <input type=\"date\" name=\"date\" id=\"date\" value=\"" + nextTask.date + "\">\n                        </div>\n                        <input data-id=\"" + nextTask._id + "\" type=\"submit\" name=\"submit\" id=\"submit\" value=\"Update this task\">\n";
                    }
                    if (!nextTask) {
                        formHtml = "<h1> You are all caught up! </h1>";
                    }
                    formField = nextRoot.parentElement;
                    formField.style.background = nextTask.color;
                    nextRoot.innerHTML = formHtml;
                    return [2 /*return*/];
                }
            }
            catch (error) {
                console.log(error);
                console.error(error.message);
            }
            return [2 /*return*/];
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
function sortTasksByDate(tasks) {
    tasks.forEach(function (task) {
        var year = new Date(task.date).getFullYear();
        var month = ("0" + (new Date(task.date).getMonth() + 1)).slice(-2);
        var day = ("0" + (new Date(task.date).getDate() + 1)).slice(-2);
        var stringDate = year + "-" + month + "-" + day;
        task.year = year;
        task.month = month;
        task.day = day;
        task.date = new Date(task.date).toLocaleDateString().replace(/\//g, "-");
        task.date = stringDate;
    });
    tasks.sort(function (a, b) { return a.day - b.day; });
    tasks.sort(function (a, b) { return a.month - b.month; });
    tasks.sort(function (a, b) { return a.year - b.year; });
}
function getNextTask(currentUsersTasks) {
    var _this = this;
    var thisYear = new Date().getFullYear();
    var thisMonth = new Date().getMonth() + 1;
    var thisDay = new Date().getDate();
    var nextTasks = currentUsersTasks.filter(function (task) {
        if (!task.checked) {
            if (task.year > thisYear) {
                return task;
            }
            else if ((task.year = _this)) {
                if (task.month > thisMonth) {
                    return task;
                }
                else if ((task.month = thisMonth)) {
                    if (task.day > thisDay) {
                        return task;
                    }
                }
            }
        }
    });
    var nextTask = nextTasks[0];
    return nextTask;
}
function handleNewTask(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, _a, color, title, description, urgency, location, date;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    userId = ev.target.baseURI.slice(-24);
                    _a = ev.target.elements, color = _a.color, title = _a.title, description = _a.description, urgency = _a.urgency, location = _a.location, date = _a.date;
                    (color = color.value), (title = title.value), (description = description.value), (urgency = urgency.value), (location = location.value), (date = date.value);
                    return [4 /*yield*/, axios
                            .post("/tasks/add-new-task", {
                            color: color,
                            title: title,
                            description: description,
                            urgency: urgency,
                            location: location,
                            date: date,
                            userId: userId
                        })
                            .then(function (response) {
                            var currentUsersTasks = response.data.currentUsersTasks;
                            renderTasks(currentUsersTasks, "RecentlyCreated");
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleTaskUpdate(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var color, title, urgency, description, location, date, taskId, userId, data, currentUsersTasks, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    color = ev.target.elements.color.value;
                    title = ev.target.elements.title.value;
                    urgency = ev.target.elements.urgency.value;
                    description = ev.target.elements.description.value;
                    location = ev.target.elements.location.value;
                    date = ev.target.elements.date.value;
                    taskId = ev.target.elements.submit.dataset.id;
                    userId = ev.target.baseURI.split("=")[1];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.patch("/tasks/updated-task", {
                            _id: taskId,
                            ownerId: userId,
                            color: color,
                            title: title,
                            urgency: urgency,
                            description: description,
                            location: location,
                            date: date
                        })];
                case 2:
                    data = (_a.sent()).data;
                    currentUsersTasks = data.currentUsersTasks;
                    renderTasks(currentUsersTasks, "RecentlyCreated");
                    closeTaskModal();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.log("error in handleTaskUpdate");
                    console.log({ error: error_4.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleTaskCheck(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var timeChecked, taskId, userId, data, currentUsersTasks, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    timeChecked = new Date().toLocaleDateString().replace(/\//g, "-");
                    taskId = ev.target.dataset.check;
                    userId = ev.target.baseURI.slice(-24);
                    return [4 /*yield*/, axios.patch("/tasks/check-task", {
                            _id: taskId,
                            ownerId: userId,
                            timeChecked: timeChecked
                        })];
                case 1:
                    data = (_a.sent()).data;
                    currentUsersTasks = data.currentUsersTasks;
                    renderTasks(currentUsersTasks, "RecentlyCreated");
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.log("error in handleTaskCheck");
                    console.log({ error: error_5.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleTaskDelete(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var taskId, userURL, data, currentUsersTasks, currentPage, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    taskId = ev.target.dataset["delete"];
                    userURL = ev.target.baseURI;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios["delete"]("/tasks/delete-task", {
                            data: { taskId: taskId, userURL: userURL }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    currentUsersTasks = data.currentUsersTasks, currentPage = data.currentPage;
                    renderTasks(currentUsersTasks, currentPage);
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.log("error in handleTaskDelete");
                    console.log({ error: error_6.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleColor(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var newColor, formField;
        return __generator(this, function (_a) {
            newColor = ev.target.value;
            formField = document.querySelector("#landing__task-next");
            formField.style.backgroundColor = newColor;
            return [2 /*return*/];
        });
    });
}
// task update modal:
function openTaskModal(modal) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (modal == null)
                return [2 /*return*/];
            modal.classList.add("active");
            overlay.classList.add("active");
            return [2 /*return*/];
        });
    });
}
function closeTaskModal() {
    var modal = document.querySelector(".taskModal");
    if (modal == null)
        return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}
function renderTaskModal(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var taskId, modal, html, data, currentTask, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    taskId = ev.target.dataset.id;
                    modal = document.querySelector(".taskModal");
                    html = "";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.post("/tasks/task", { taskId: taskId })];
                case 2:
                    data = (_a.sent()).data;
                    currentTask = data;
                    if (!currentTask)
                        throw new Error("no task in the modal");
                    currentTask.date = currentTask.date.slice(0, 10);
                    html += "\n<div class=\"taskModal-header\">\n<h1>" + currentTask.title + "</h1>\n<button onclick=\"closeTaskModal()\" class=\"taskModal-closeButton\"> &times; </button>\n</div>\n<form onsubmit=\"handleTaskUpdate(event)\" class=\"taskModal-form\">\n<fieldset>\n<legend>Task title</legend>\n<div  class=\"taskModal-title\">\n<label for=\"title\">Task title:</label>\n<input type=\"text\" name=\"title\" id=\"title\" value=\"" + currentTask.title + "\">\n<label for=\"color\">Task title color:</label>\n<input onchange=\"handleColor(event)\" type=\"color\" name=\"color\" id=\"color\" value=\"" + currentTask.color + "\">\n</fieldset>\n</div>\n<div class=\"taskModal-urgency\">\n<select type=\"text\" name=\"urgency\" id=\"urg\">\n<option selected disabled value=\"" + currentTask.urgency + "\">" + currentTask.urgency + "</option>\n<option value=\"high\">High</option>\n<option value=\"medium\">Medium</option>\n<option value=\"low\">Low</option>\n</select>\n\n</div>\n<div class=\"taskModal-description\">\n<input type=\"text\" name=\"description\" id=\"description\" value=\"" + currentTask.description + "\">\n</div>\n<div class=\"taskModal-location\">\n<input type=\"text\" name='location' id='owner' value=\"" + currentTask.location + "\">\n</div>\n<div class=\"taskModal-date\">\n<input type=\"date\" name=\"date\" id=\"date\" value=\"" + currentTask.date + "\">\n</div>\n<input data-id=\"" + currentTask._id + "\" type=\"submit\" name=\"submit\" id=\"submit\" value=\"Update this task\">\n</form>\n<div onclick=\"closeTaskModal()\" data-taskModal-overlay class=\"overlay\"></div>";
                    modal.innerHTML = html;
                    openTaskModal(modal);
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _a.sent();
                    console.log(error_7.message);
                    console.log(error_7);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
