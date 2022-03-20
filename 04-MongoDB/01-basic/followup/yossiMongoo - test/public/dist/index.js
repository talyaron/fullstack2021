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
function loadPage(ev) {
    handleGetAllUsers(ev);
}
function handleRegister(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, password, role, img, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ev.preventDefault();
                    _a = ev.target.elements, username = _a.username, password = _a.password, role = _a.role, img = _a.img;
                    username = username.value;
                    password = password.value;
                    role = role.value;
                    img = img.value;
                    return [4 /*yield*/, axios.post('/add-user', { username: username, password: password, role: role, img: img })];
                case 1:
                    data = (_b.sent()).data;
                    console.log(data);
                    this.handleGetAllUsers();
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetAllUsers(ev) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-all-users').then(function (_a) {
                        var data = _a.data;
                        console.log(data);
                        var root = document.querySelector('#root');
                        renderAll(root, data);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleGetUserByRole(ev) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/get-user-by-role').then(function (_a) {
                        var data = _a.data;
                        console.log(data);
                        var root = document.querySelector('#root');
                        renderAll(root, data);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleUpdateRole(ev, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var role, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(ev, userId);
                    role = ev.target.value;
                    return [4 /*yield*/, axios.patch('/update-user-role', { userId: userId, role: role })];
                case 1:
                    data = (_a.sent()).data;
                    loadPage(ev);
                    return [2 /*return*/];
            }
        });
    });
}
function handleUpdateName(ev, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var username, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(ev, userId);
                    username = ev.target.value;
                    return [4 /*yield*/, axios.patch('/update-user-name', { userId: userId, username: username })];
                case 1:
                    data = (_a.sent()).data;
                    loadPage(ev);
                    return [2 /*return*/];
            }
        });
    });
}
function handleDelete(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios["delete"]('/delete-user', { data: { userId: userId } })];
                case 1:
                    data = (_a.sent()).data;
                    this.handleGetAllUsers();
                    return [2 /*return*/];
            }
        });
    });
}
function renderAll(root, data) {
    var html = '';
    data.forEach(function (user) {
        html += "<div class=\"user\">\n        <div class=\"product\"><span style=\"color: #000;\"></span>" + user.username + "</div>\n        <div class=\"price\"><span style=\"color: #000;\"></span>" + user.role + "</div>\n        <div><img src=\"" + user.img + "\" alt=\"https://gameforge.com/de-DE/littlegames/includes/images/games/10343_5eb3f0ec15588.jpg\"></div>\n        <div><input type=\"text\" placeholder=\"username\" value=\"" + user.username + "\" onblur=\"handleUpdateName(event, '" + user._id + "')\"/></div>\n        <div><input type=\"text\" placeholder=\"role\" value=\"" + user.role + "\" onblur=\"handleUpdateRole(event, '" + user._id + "')\"/></div>\n        \n        <div><button onclick=\"handleDelete('" + user._id + "')\">DELETE</button></div>\n        </div>\n        ";
    });
    root.innerHTML = html;
}
// async function handleGetUserByRole(ev) {
//     let role = ev.target.elements.role.value
//     await axios.get('/get-user-by-role').then(({ data }) => {
//         console.log(data)
//         const root = document.querySelector('#root');
//         renderAll(root, data);
//     })
// }
