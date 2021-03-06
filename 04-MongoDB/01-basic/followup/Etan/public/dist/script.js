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
function handleShowAll(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var logInUsername, logInPassword, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    logInUsername = ev.target.logInUsername.value;
                    logInPassword = ev.target.logInPassword.value;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log(ev, "hello 1");
                    return [4 /*yield*/, axios.get("/get-users?logInUsername=" + logInUsername + "&logInPassword=" + logInPassword)];
                case 2:
                    data = (_a.sent()).data;
                    console.log(ev, "hello 2");
                    if (data > -1)
                        throw new Error("we dont have a user with username " + logInUsername);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderUsers(list) {
    var html;
    list.forEach(function (user) {
        html += "<div id='" + user.id + "' class='user'>\n    <h1 class='card_user-name'>" + user.username + "</h1> <p class='card_user-role'>" + user.role + "</p>\n    <div class='card_personal'>\n    <p>" + user.firstName + "</p>  <p>" + user.lastName + "</p>\n    </div>\n    <p>" + user.birthDate + "</p>\n    <input type='password' class='card_user-password' value='" + user.password + "'>\n    </div>";
    });
    document.querySelector(".empty").innerHTML = html;
}
function handleRegister(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, firstName, lastName, birthDate, role, username, password, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    console.log(ev.target.elements);
                    _a = ev.target.elements, firstName = _a.firstName, lastName = _a.lastName, birthDate = _a.birthDate, role = _a.role, username = _a.username, password = _a.password;
                    console.log(username, password);
                    firstName = firstName.value;
                    lastName = lastName.value;
                    birthDate = birthDate.value;
                    role = role.value;
                    username = username.value;
                    password = password.value;
                    console.log(birthDate);
                    return [4 /*yield*/, axios.post("/add-user", {
                            firstName: firstName,
                            lastName: lastName,
                            birthDate: birthDate,
                            role: role,
                            username: username,
                            password: password
                        })];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
