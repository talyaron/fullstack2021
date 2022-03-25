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
function OpenSIgnUpForm(e) {
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
        var oldUser, email, password, data, error_2;
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
                    if (!email || !password)
                        throw new Error("no email || password in handleLogInForm");
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2.message);
                    return [3 /*break*/, 4];
                case 4:
                    e.target.reset();
                    return [2 /*return*/];
            }
        });
    });
}
var userLogedIn = {
    logData: [],
    addlogData: function (data) {
        // const uid = Date.now().toString(36) + Math.random().toString(36).substr(2);
        this.logData.push(data);
        console.log(this.logData);
    }
};
